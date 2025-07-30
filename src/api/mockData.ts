import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  products: { productId: string; quantity: number }[];
  total: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

// Generate mock data
export const mockUsers: User[] = [
  {
    id: uuidv4(),
    name: 'Alice Martin',
    email: 'alice.martin@example.com',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Thomas Dubois',
    email: 'thomas.dubois@example.com',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: 'Tapis de yoga premium',
    description: 'Tapis de yoga écologique avec excellente adhérence',
    price: 45.99,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: 'Bloc de yoga en liège',
    description: 'Bloc de yoga durable et naturel',
    price: 19.99,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const mockOrders: Order[] = [
  {
    id: uuidv4(),
    userId: mockUsers[0].id,
    products: [{ productId: mockProducts[0].id, quantity: 1 }],
    total: 45.99,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];