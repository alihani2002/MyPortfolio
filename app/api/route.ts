import { NextRequest } from 'next/server';
import { validateApiKey, handleApiError, createApiResponse } from '@/lib/api-utils';

export async function GET(request: NextRequest) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return createApiResponse({ error: 'Unauthorized' }, 401);
    }

    // Your API logic here
    const data = {
      message: 'API is working!',
      timestamp: new Date().toISOString(),
    };

    return createApiResponse(data);
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return createApiResponse({ error: 'Unauthorized' }, 401);
    }

    // Parse the request body
    const body = await request.json();

    // Your API logic here
    const data = {
      message: 'Data received successfully',
      received: body,
      timestamp: new Date().toISOString(),
    };

    return createApiResponse(data);
  } catch (error) {
    return handleApiError(error);
  }
}