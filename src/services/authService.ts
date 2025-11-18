import api from '../config/api';
import { User } from '../types';

interface LoginResponse {
  token: string;
  user: User;
}

interface RegisterData {
  name: string;
  email: string;
  tel: string;
  role: 'staff' | 'admin';
  password: string;
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  async register(data: RegisterData): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/register', data);
    return response.data;
  },

  async logout(): Promise<void> {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/auth/me');
    return response.data;
  },
};