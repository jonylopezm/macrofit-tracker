import { NextRequest, NextResponse } from 'next/server';
import { registerFoodRecord } from '@/lib/cassandra';

export async function POST(req: NextRequest) {
  try {
    const { user_id, food_id, date, meal_type, quantity } = await req.json();

    await registerFoodRecord(user_id, food_id, date, meal_type, quantity);

    return NextResponse.json({ message: 'Food record created.' }, { status: 201 });
  } catch (error) {
    console.error('An error occurred while registering the food record:', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the food record.' },
      { status: 500 }
    );
  }
}