import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { ClassBooking } from '../types';
import { format } from 'date-fns';

interface BookingState {
  bookings: ClassBooking[];
  isLoading: boolean;
  availableSpots: number | null;
  createBooking: (classId: string, date: string, time: string, formData: any) => Promise<void>;
  loadBookings: () => Promise<void>;
  cancelBooking: (bookingId: string) => Promise<void>;
  checkAvailability: (classId: string, date: string, time: string) => Promise<number>;
}

export const useBookingStore = create<BookingState>((set, get) => ({
  bookings: [],
  isLoading: false,
  availableSpots: null,

  createBooking: async (classId: string, date: string, time: string, formData: any) => {
    // Check available spots
    const availableSpots = await get().checkAvailability(classId, date, time);
    
    if (availableSpots <= 0) {
      throw new Error('Class is full');
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        { 
          class_id: classId, 
          date, 
          time,
          user_data: formData 
        }
      ])
      .select()
      .single();

    if (error) throw error;
    set({ bookings: [...get().bookings, data] });

    // Send confirmation email
    await supabase.functions.invoke('send-booking-confirmation', {
      body: { 
        bookingId: data.id,
        formData
      }
    });

    // Add to Google Calendar if authorized
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('google_calendar_token')
        .single();

      if (profile?.google_calendar_token) {
        await supabase.functions.invoke('google-calendar-sync', {
          body: { 
            bookingId: data.id,
            action: 'create'
          }
        });
      }
    } catch (error) {
      console.error('Failed to sync with Google Calendar:', error);
    }
  },

  loadBookings: async () => {
    set({ isLoading: true });
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    set({ bookings: data, isLoading: false });
  },

  cancelBooking: async (bookingId: string) => {
    const { error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('id', bookingId);

    if (error) throw error;

    // Remove from Google Calendar if authorized
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('google_calendar_token')
        .single();

      if (profile?.google_calendar_token) {
        await supabase.functions.invoke('google-calendar-sync', {
          body: { 
            bookingId,
            action: 'delete'
          }
        });
      }
    } catch (error) {
      console.error('Failed to sync with Google Calendar:', error);
    }

    await get().loadBookings();
  },

  checkAvailability: async (classId: string, date: string, time: string) => {
    const { count } = await supabase
      .from('bookings')
      .select('*', { count: 'exact' })
      .eq('class_id', classId)
      .eq('date', date)
      .eq('time', time)
      .eq('status', 'booked');

    const availableSpots = 15 - (count || 0);
    set({ availableSpots });
    return availableSpots;
  }
}));