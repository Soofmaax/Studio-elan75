import { z } from 'zod';

export const bookingSchema = z.object({
  courseType: z.string().min(1, "Le type de cours est requis"),
  date: z.string().min(1, "La date est requise"),
  time: z.string().min(1, "L'horaire est requis"),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email n'est pas valide"),
  phone: z.string().min(10, "Le numéro de téléphone n'est pas valide"),
  notes: z.string().optional()
});

export const profileSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("L'email n'est pas valide"),
  phone: z.string().min(10, "Le numéro de téléphone n'est pas valide")
});

export type BookingFormData = z.infer<typeof bookingSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;