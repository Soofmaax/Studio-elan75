import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '../ui/Button';
import { useAuthStore } from '../../stores/authStore';
import toast from 'react-hot-toast';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

interface FormData {
  email: string;
  password: string;
  name?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { signIn, signUp } = useAuthStore();

  const onSubmit = async (data: FormData) => {
    try {
      if (mode === 'login') {
        await signIn(data.email, data.password);
        toast.success('Connexion réussie');
      } else {
        await signUp(data.email, data.password, data.name || '');
        toast.success('Inscription réussie. Vous pouvez maintenant vous connecter.');
      }
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Une erreur est survenue');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-serif text-sage mb-6">
          {mode === 'login' ? 'Connexion' : 'Inscription'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: mode === 'register' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">Le nom est requis</p>
              )}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">L'email est requis</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: true, minLength: 6 })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sage focus:ring focus:ring-sage focus:ring-opacity-50"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                Le mot de passe doit contenir au moins 6 caractères
              </p>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg" isFullWidth>
            {mode === 'login' ? 'Se connecter' : 'S\'inscrire'}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthModal;