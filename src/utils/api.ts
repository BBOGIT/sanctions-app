import { API_BASE_URL } from '../config/api';
import { ApiResponse } from '../types';

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string,
    public details?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function fetchApi<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const result: ApiResponse<T> = {
    status: response.status,
    message: response.statusText,
  };

  if (response.status !== 204) {
    try {
      const body = await response.json();
      result.data = body.data;
      result.message = body.message || response.statusText;
      result.error = body.error;
    } catch (error) {
      console.error('Error parsing JSON response:', error);
    }
  }

  if (!response.ok) {
    if (response.status === 500) {
      throw new ApiError(
        500,
        'An unexpected server error occurred. Please try again later.',
        'INTERNAL_SERVER_ERROR',
        result.error?.details
      );
    }
    throw new ApiError(
      response.status,
      result.message || 'An error occurred',
      result.error?.code,
      result.error?.details
    );
  }

  return result;
}