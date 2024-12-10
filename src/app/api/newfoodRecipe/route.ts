import { NextRequest, NextResponse } from 'next/server';
import { registerFoodRecipe } from '@/lib/cassandra';

export async function POST(req: NextRequest) {
  try {
    const { name, serving_size, serving_size_units, serving_type, calories, proteins, carbohydrates, fats } = await req.json();

    await registerFoodRecipe( name, serving_size, serving_size_units, serving_type, calories, proteins, carbohydrates, fats);

    return NextResponse.json({ message: 'Food created.' }, { status: 201 });
  } catch (error) {
    console.error('An error occurred while registering the food:', error);
    return NextResponse.json(
      { message: 'An error occurred while registering the food.' },
      { status: 500 }
    );
  }
}