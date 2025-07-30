import { loadStripe } from '@stripe/stripe-js';
import { apiConfig } from '../config/apis';

if (!apiConfig.stripe.publicKey) {
  throw new Error('Missing Stripe public key');
}

export const stripe = loadStripe(apiConfig.stripe.publicKey);