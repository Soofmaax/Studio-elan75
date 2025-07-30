export const apiConfig = {
  google: {
    maps: {
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    },
    calendar: {
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
      apiKey: import.meta.env.VITE_GOOGLE_API_KEY || '',
      scopes: ['https://www.googleapis.com/auth/calendar.events'],
    },
  },
  stripe: {
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    priceIds: {
      singleClass: 'price_single',
      tenClasses: 'price_ten',
      unlimited: 'price_unlimited',
    },
  },
};

export const validateApiConfig = () => {
  const missingKeys = [];
  
  if (!apiConfig.google.maps.apiKey) missingKeys.push('VITE_GOOGLE_MAPS_API_KEY');
  if (!apiConfig.google.calendar.clientId) missingKeys.push('VITE_GOOGLE_CLIENT_ID');
  if (!apiConfig.google.calendar.apiKey) missingKeys.push('VITE_GOOGLE_API_KEY');
  if (!apiConfig.stripe.publicKey) missingKeys.push('VITE_STRIPE_PUBLIC_KEY');

  if (missingKeys.length > 0) {
    console.warn(`Missing API keys: ${missingKeys.join(', ')}`);
    return false;
  }

  return true;
};