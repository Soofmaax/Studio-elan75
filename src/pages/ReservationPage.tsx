import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useBookingStore } from '../stores/bookingStore';
import { useAuthStore } from '../stores/authStore';
import toast from 'react-hot-toast';
import AuthModal from '../components/auth/AuthModal';

interface BookingFormData {
  courseType: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

const ReservationPage = () => {
  const navigate = useNavigate();
  const { createBooking } = useBookingStore();
  const { user } = useAuthStore();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    try {
      setIsSubmitting(true);
      await createBooking(data.courseType, data.date, data.time);
      
      toast.success(
        `Merci ${data.name} pour votre réservation au Studio Élan!\n` +
        `Cours: ${data.courseType}\n` +
        `Date: ${data.date}\n` +
        `Heure: ${data.time}`
      );

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      if (error instanceof Error && error.message === 'Class is full') {
        toast.error('Désolé, ce cours est complet. Veuillez choisir un autre horaire.');
      } else {
        toast.error('Une erreur est survenue lors de la réservation.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-cream">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title after:mx-auto">Réservation</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Réservez votre prochain cours de yoga en quelques clics.
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="courseType" className="block text-sm font-medium text-gray-700 mb-1">
                Type de cours
              </label>
              <select
                id="courseType"
                {...register('courseType', { required: true })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              >
                <option value="">Sélectionnez un cours</option>
                <option value="prenatal">Yoga Prénatal</option>
                <option value="gentle">Yoga Doux</option>
                <option value="dynamic">Yoga Tonique</option>
                <option value="children">Yoga Enfants</option>
              </select>
              {errors.courseType && (
                <p className="mt-1 text-sm text-red-600">Veuillez sélectionner un cours</p>
              )}
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                {...register('date', { required: true })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-600">Veuillez sélectionner une date</p>
              )}
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Horaire
              </label>
              <select
                id="time"
                {...register('time', { required: true })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              >
                <option value="">Sélectionnez un horaire</option>
                <option value="morning">Matin</option>
                <option value="afternoon">Après-midi</option>
                <option value="evening">Soir</option>
              </select>
              {errors.time && (
                <p className="mt-1 text-sm text-red-600">Veuillez sélectionner un horaire</p>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: true })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">Veuillez entrer votre nom</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">Veuillez entrer une adresse email valide</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: true })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">Veuillez entrer votre numéro de téléphone</p>
              )}
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes ou besoins particuliers
              </label>
              <textarea
                id="notes"
                {...register('notes')}
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              ></textarea>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              isFullWidth 
              isLoading={isSubmitting}
            >
              Confirmer la réservation
            </Button>
          </form>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        mode="login" 
      />
    </div>
  );
};

export default ReservationPage;