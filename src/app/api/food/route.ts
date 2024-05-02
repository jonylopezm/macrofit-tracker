import { NextRequest, NextResponse } from "next/server";
import { getAllFoodData } from '@/lib/cassandra'; // Importa la función para obtener todos los datos de comida

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const foodData = await getAllFoodData();

        if (foodData.length > 0) {
            return NextResponse.json(foodData, { status: 200 });
        } else {
            return NextResponse.json({ message: "No food data available" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error al obtener los datos de comida:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}