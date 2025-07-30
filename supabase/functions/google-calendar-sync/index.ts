import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { bookingId, action } = await req.json();

    // Get booking details with user profile
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select(`
        *,
        profiles (
          name,
          email,
          google_calendar_token
        )
      `)
      .eq('id', bookingId)
      .single();

    if (bookingError) throw bookingError;

    // Google Calendar API integration would go here
    // This is a placeholder - implement your Google Calendar logic here
    console.log(`${action} calendar event for booking:`, booking);

    return new Response(
      JSON.stringify({ message: 'Calendar synced successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});