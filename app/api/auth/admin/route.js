import { NextResponse } from 'next/server';

export async function POST(request) {
    const { username, password } = await request.json();

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        const response = NextResponse.json({ success: true });

        // Set cookie for 1 day
        response.cookies.set('admin_access', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24,
            path: '/',
        });

        return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}
