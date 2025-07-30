import { create } from 'zustand';
import { stripe } from '../lib/stripe';
import { supabase } from '../lib/supabase';

interface PaymentState {
  isLoading: boolean;
  createPaymentSession: (priceId: string) => Promise<string>;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  isLoading: false,

  createPaymentSession: async (priceId: string) => {
    set({ isLoading: true });
    try {
      const { data: { sessionId }, error } = await supabase.functions.invoke('create-checkout-session', {
        body: { priceId }
      });

      if (error) throw error;

      const stripeInstance = await stripe;
      if (!stripeInstance) throw new Error('Stripe not initialized');

      const { error: stripeError } = await stripeInstance.redirectToCheckout({
        sessionId
      });

      if (stripeError) throw stripeError;

      return sessionId;
    } finally {
      set({ isLoading: false });
    }
  }
}));