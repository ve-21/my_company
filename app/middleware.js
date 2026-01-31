import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Skip middleware for static files, api routes (except those we want protected), and auth pages
    if (
        pathname.startsWith('/_next') ||
        pathname.includes('/api/auth') ||
        pathname.includes('/auth') ||
        pathname === '/favicon.ico' ||
        pathname.startsWith('/images') ||
        pathname === '/admin/login'
    ) {
        return NextResponse.next();
    }

    // 2. Check Site-Wide Protection (Temporary for Client)
    const siteAuth = request.cookies.get('site_access');
    if (!siteAuth && pathname !== '/login') {
        // Exclude API routes from site-wide redirect so they don't break frontend but you might want to protect them too
        if (pathname.startsWith('/api')) return NextResponse.next();

        const url = request.nextUrl.clone();
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    // 3. Check Admin Protection
    if (pathname.startsWith('/admin')) {
        const adminAuth = request.cookies.get('admin_access');
        if (!adminAuth) {
            const url = request.nextUrl.clone();
            url.pathname = '/admin/login';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes) - usually you'd want to protect these but let's keep it simple for now
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
