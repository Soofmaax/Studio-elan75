import { create } from 'zustand';

interface ReservationState {
  selectedClass: string | null;
  selectedDate: string | null;
  selectedTime: string | null;
  setReservationDetails: (classId: string, date?: string, time?: string) => void;
  clearReservationDetails: () => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  selectedClass: null,
  selectedDate: null,
  selectedTime: null,
  setReservationDetails: (classId, date, time) => set({
    selectedClass: classId,
    selectedDate: date || null,
    selectedTime: time || null
  }),
  clearReservationDetails: () => set({
    selectedClass: null,
    selectedDate: null,
    selectedTime: null
  })
}));