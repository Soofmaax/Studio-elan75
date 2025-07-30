import { mockUsers, mockProducts, mockOrders, User, Product, Order } from './mockData';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Error handling
class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Generic response wrapper
interface ApiResponse<T> {
  data: T;
  message: string;
  timestamp: string;
}

function createResponse<T>(data: T, message = 'Success'): ApiResponse<T> {
  return {
    data,
    message,
    timestamp: new Date().toISOString(),
  };
}

// Users API
export const usersApi = {
  async getAll(): Promise<ApiResponse<User[]>> {
    await delay(300);
    return createResponse(mockUsers);
  },

  async getById(id: string): Promise<ApiResponse<User>> {
    await delay(200);
    const user = mockUsers.find(u => u.id === id);
    if (!user) throw new ApiError(404, 'User not found');
    return createResponse(user);
  },

  async create(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<User>> {
    await delay(500);
    const newUser: User = {
      id: crypto.randomUUID(),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockUsers.push(newUser);
    return createResponse(newUser, 'User created successfully');
  },

  async update(id: string, userData: Partial<User>): Promise<ApiResponse<User>> {
    await delay(400);
    const index = mockUsers.findIndex(u => u.id === id);
    if (index === -1) throw new ApiError(404, 'User not found');
    
    mockUsers[index] = {
      ...mockUsers[index],
      ...userData,
      updatedAt: new Date().toISOString(),
    };
    return createResponse(mockUsers[index], 'User updated successfully');
  },

  async delete(id: string): Promise<ApiResponse<void>> {
    await delay(300);
    const index = mockUsers.findIndex(u => u.id === id);
    if (index === -1) throw new ApiError(404, 'User not found');
    
    mockUsers.splice(index, 1);
    return createResponse(undefined, 'User deleted successfully');
  },
};

// Products API
export const productsApi = {
  async getAll(): Promise<ApiResponse<Product[]>> {
    await delay(300);
    return createResponse(mockProducts);
  },

  async getById(id: string): Promise<ApiResponse<Product>> {
    await delay(200);
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new ApiError(404, 'Product not found');
    return createResponse(product);
  },

  async create(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Product>> {
    await delay(500);
    const newProduct: Product = {
      id: crypto.randomUUID(),
      ...productData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockProducts.push(newProduct);
    return createResponse(newProduct, 'Product created successfully');
  },

  async update(id: string, productData: Partial<Product>): Promise<ApiResponse<Product>> {
    await delay(400);
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) throw new ApiError(404, 'Product not found');
    
    mockProducts[index] = {
      ...mockProducts[index],
      ...productData,
      updatedAt: new Date().toISOString(),
    };
    return createResponse(mockProducts[index], 'Product updated successfully');
  },

  async delete(id: string): Promise<ApiResponse<void>> {
    await delay(300);
    const index = mockProducts.findIndex(p => p.id === id);
    if (index === -1) throw new ApiError(404, 'Product not found');
    
    mockProducts.splice(index, 1);
    return createResponse(undefined, 'Product deleted successfully');
  },
};

// Orders API
export const ordersApi = {
  async getAll(): Promise<ApiResponse<Order[]>> {
    await delay(300);
    return createResponse(mockOrders);
  },

  async getById(id: string): Promise<ApiResponse<Order>> {
    await delay(200);
    const order = mockOrders.find(o => o.id === id);
    if (!order) throw new ApiError(404, 'Order not found');
    return createResponse(order);
  },

  async create(orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Order>> {
    await delay(500);
    const newOrder: Order = {
      id: crypto.randomUUID(),
      ...orderData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    mockOrders.push(newOrder);
    return createResponse(newOrder, 'Order created successfully');
  },

  async update(id: string, orderData: Partial<Order>): Promise<ApiResponse<Order>> {
    await delay(400);
    const index = mockOrders.findIndex(o => o.id === id);
    if (index === -1) throw new ApiError(404, 'Order not found');
    
    mockOrders[index] = {
      ...mockOrders[index],
      ...orderData,
      updatedAt: new Date().toISOString(),
    };
    return createResponse(mockOrders[index], 'Order updated successfully');
  },

  async delete(id: string): Promise<ApiResponse<void>> {
    await delay(300);
    const index = mockOrders.findIndex(o => o.id === id);
    if (index === -1) throw new ApiError(404, 'Order not found');
    
    mockOrders.splice(index, 1);
    return createResponse(undefined, 'Order deleted successfully');
  },
};