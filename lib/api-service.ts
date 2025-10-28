const API_BASE_URL = 'https://alyhani.tryasp.net/api';

export const apiService = {
  async get(endpoint: string = '') {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin,
        },
        mode: 'cors',
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          errorData
        });
        throw new Error(
          errorData?.message || `API Error: ${response.status} ${response.statusText}`
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('Network Error - Could not reach the API:', {
          url: `${API_BASE_URL}${endpoint}`,
          error
        });
        throw new Error('Could not connect to the server. Please check your internet connection and try again.');
      }
      console.error('API Request failed:', error);
      throw error;
    }
  },

  async post(endpoint: string = '', data: any) {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      console.log('Sending request to:', url);
      console.log('Request data:', data);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin,
        },
        mode: 'cors',
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          console.error('API Error Response:', errorData);
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          console.error('Could not parse error response:', e);
        }
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      console.log('Response data:', responseData);
      return responseData;
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        console.error('Network Error - Could not reach the API:', {
          url: `${API_BASE_URL}${endpoint}`,
          error
        });
        throw new Error('Could not connect to the server. Please check if the API is accessible and try again.');
      }
      console.error('API Request failed:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }
};