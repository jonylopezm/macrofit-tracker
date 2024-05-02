import { NextRequest, NextResponse } from 'next/server';
import { sendPasswordResetEmail } from '@/lib/resend';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        await sendPasswordResetEmail(email);
        return NextResponse.json({ message: 'Password reset email sent.' }, { status: 200 });
    } catch (error) {
        console.error('An error occurred while sending password reset email:', error);
        return NextResponse.json({ message: 'Failed to send password reset email.' }, { status: 500 });
    }
}