import { NextResponse } from "next/server";
import {authUser } from '@/lib/cassandra';

export async function POST(req: NextResponse){
    try {
        const {email, password} = await req.json();

        await authUser(email, password);

        return NextResponse.json({message: "Login"}, {status:201});
        
    } catch (error) {
        
    }
}