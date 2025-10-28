import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the header token
  const authHeader = request.headers.get('authorization')
  
  // Check if it's an API route
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Basic security checks
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse(
        JSON.stringify({ error: 'Authentication required' }),
        {
          status: 401,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
    }

    // Rate limiting could be implemented here
    
    // CORS headers
    return NextResponse.next({
      headers: {
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: '/api/:path*',
}