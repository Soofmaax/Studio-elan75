import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '../../stores/authStore';
import Button from '../ui/Button';
import { Calendar } from 'lucide-react';
import toast from 'react-hot-toast';

const GoogleAuthButton = () => {
  const { updateGoogleToken } = useAuthStore();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        await updateGoogleToken(response.access_token);
        toast.success('Calendrier Google connecté avec succès');
      } catch (error) {
        toast.error('Erreur lors de la connexion au calendrier Google');
      }
    },
    onError: () => {
      toast.error('Erreur lors de la connexion au calendrier Google');
    },
    scope: 'https://www.googleapis.com/auth/calendar.events',
  });

  return (
    <Button
      variant="outline"
      size="md"
      leftIcon={<Calendar size={20} />}
      onClick={() => login()}
    >
      Connecter Google Calendar
    </Button>
  );
};

export default GoogleAuthButton;