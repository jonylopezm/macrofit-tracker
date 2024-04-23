import { NextResponse, userAgentFromString } from "next/server";
import {registerUser, updateProfile } from '@/lib/cassandra';


export async function POST(req: NextResponse){
    try {
        const { age,weight, height} = await req.json();
        const user_id = req.headers.get("X-User-Id");
        
        console.log(user_id, age, weight, height)
       if (typeof user_id === "string") {
            await updateProfile(age, weight, height, user_id);
            return NextResponse.json({ message: "Profile updated." }, { status: 201 });
        } else {
            throw new Error("Invalid user_id");
        }
    } catch (error) {
        return NextResponse.json(
            {message: "An error ocurred while updating the profile."},  
            {status:500}
        );
    }
}