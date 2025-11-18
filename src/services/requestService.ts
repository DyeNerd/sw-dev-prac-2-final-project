import api from '../config/api';
import { StockRequest, RequestStatus } from '../types';

interface CreateRequestData {
  productId: string;
  type: 'Stock In' | 'Stock Out';
  quantity: number;
}

export const requestService = {
  // Get all requests (admin) or user's own requests (staff)
  async getRequests(): Promise<StockRequest[]> {
    const response = await api.get<StockRequest[]>('/requests');
    return response.data;
  },

  // Get user's own requests
  async getMyRequests(): Promise<StockRequest[]> {
    const response = await api.get<StockRequest[]>('/requests/my');
    return response.data;
  },

  // Create a new request
  async createRequest(data: CreateRequestData): Promise<StockRequest> {
    const endpoint = data.type === 'Stock In' ? '/requests/stockin' : '/requests/stockout';
    const response = await api.post<StockRequest>(endpoint, {
      productId: data.productId,
      quantity: data.quantity,
    });
    return response.data;
  },

  // Update request (edit quantity or other fields)
  async updateRequest(id: string, data: Partial<StockRequest>): Promise<StockRequest> {
    const response = await api.put<StockRequest>(`/requests/${id}`, data);
    return response.data;
  },

  // Update request status (admin only)
  async updateRequestStatus(id: string, status: RequestStatus): Promise<StockRequest> {
    const response = await api.patch<StockRequest>(`/requests/${id}/status`, { status });
    return response.data;
  },

  // Delete request
  async deleteRequest(id: string): Promise<void> {
    await api.delete(`/requests/${id}`);
  },
};