import { NextResponse } from "next/server";
import {authUser } from '@/lib/cassandra';

export async function POST(req: NextResponse){
    try {
        const {email, password} = await req.json();

        const authResult = await authUser(email, password);
        if (authResult.success) {
            const {user} = authResult;
            return NextResponse.json({message: "Login", user}, {status:201});
        } else {
            return NextResponse.json({message: "Invalid email or password"}, {status:401});
        }
        
    } catch (error) {
        return NextResponse.json(
            {message: "An error ocurred while loggin the user."},  
            {status:500}
        );
    }
}