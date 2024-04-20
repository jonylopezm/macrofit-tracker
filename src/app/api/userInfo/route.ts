import { NextResponse } from "next/server";
import {getInfoUser } from '@/lib/cassandra';
import { json } from "stream/consumers";

export async function POST( res: NextResponse){
    try {
        const {email} = await res.json();

        const infoResult = await getInfoUser(email);
        if (infoResult) {
            return NextResponse.json(infoResult, {status:201});
        } else {
            return NextResponse.json({message: "Error"}, {status:401});
        }
        
    } catch (error) {
        return NextResponse.json(
            {message: "user info error"},  
            {status:500}
        );
    }
}