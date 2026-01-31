import { NextResponse } from 'next/server';

export async function POST(request) {
    const { username, password } = await request.json();

    if (username === 'client' && password === process.env.SITE_PASSWORD) {
        const response = NextResponse.json({ success: true });

        // Set cookie for 7 days
        response.cookies.set('site_access', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        });

        return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid access code' }, { status: 401 });
}
