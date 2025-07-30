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

    const { bookingId, formData } = await req.json();

    // Get booking details
    const { data: booking, error: bookingError } = await supabase
      .from('bookings')
      .select(`
        *,
        profiles (name, email)
      `)
      .eq('id', bookingId)
      .single();

    if (bookingError) throw bookingError;

    // Email template
    const emailContent = `
      Bonjour ${formData.name},

      Merci pour votre réservation au Studio Élan !

      Détails de votre réservation :
      - Cours : ${formData.courseType}
      - Date : ${formData.date}
      - Heure : ${formData.time}
      - Numéro de confirmation : ${bookingId}

      Politique d'annulation :
      - Annulation gratuite jusqu'à 24h avant le cours
      - Passé ce délai, le cours sera décompté de votre forfait

      Adresse : 15 Rue des Abbesses, 75018 Paris

      À très bientôt !
      L'équipe du Studio Élan
    `;

    // Send email using your preferred email service
    // This is a placeholder - implement your email sending logic here
    console.log('Sending confirmation email:', emailContent);

    return new Response(
      JSON.stringify({ message: 'Confirmation email sent' }),
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