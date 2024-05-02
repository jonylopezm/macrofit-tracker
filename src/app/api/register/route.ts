import { NextRequest, NextResponse, userAgentFromString } from "next/server";
import {registerUser } from '@/lib/cassandra';


export async function POST(req: NextRequest){
    try {
        const {email, password, first_name, last_name, gender} = await req.json();
      
        await registerUser(first_name, last_name, email, password, gender)
        
        return NextResponse.json({message: "User registered."}, {status:201});
    } catch (error) {
        return NextResponse.json(
            {message: "An error ocurred while registering the user."},  
            {status:500}
        );
    }
}