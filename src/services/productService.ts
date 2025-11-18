import api from '../config/api';
import { Product } from '../types';

interface CreateProductData {
  name: string;
  description: string;
  stockQuantity: number;
  imageUrl?: string;
}

export const productService = {
  async getAllProducts(): Promise<Product[]> {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },

  async getProductById(id: string): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },

  async createProduct(data: CreateProductData): Promise<Product> {
    const response = await api.post<Product>('/products', data);
    return response.data;
  },

  async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
    const response = await api.put<Product>(`/products/${id}`, data);
    return response.data;
  },

  async deleteProduct(id: string): Promise<void> {
    await api.delete(`/products/${id}`);
  },
};