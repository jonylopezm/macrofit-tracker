import { NextRequest, NextResponse } from 'next/server';
import { sendPasswordResetEmail } from '@/lib/resend';
import { getInfoUser } from '@/lib/cassandra';

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();
        await sendPasswordResetEmail(email);
        const infoResult = await getInfoUser(email)

        if(infoResult){
            return NextResponse.json(infoResult, { status: 200 });
        }else{
            return NextResponse.json({message: "Error"}, {status:401});
        }
        
    } catch (error) {
        console.error('An error occurred while sending password reset email:', error);
        return NextResponse.json({ message: 'Failed to send password reset email.' }, { status: 500 });
    }
}