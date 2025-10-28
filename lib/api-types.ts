// Add your API response types here
export interface ApiResponse {
  // Add common response properties
  success: boolean;
  message?: string;
  data?: any;
}

// Add specific response types as needed
export interface ApiError {
  message: string;
  code?: string;
  details?: any;
}