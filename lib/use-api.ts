import { useState, useCallback } from 'react';
import { apiService } from './api-service';

export function useApi() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (endpoint?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await apiService.get(endpoint);
      return data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const postData = useCallback(async (endpoint: string = '', data: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiService.post(endpoint, data);
      return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    fetchData,
    postData,
    isLoading,
    error,
  };
}