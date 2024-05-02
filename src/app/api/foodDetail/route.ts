import { NextRequest, NextResponse } from "next/server";
import { getFoodDetails } from '@/lib/cassandra'; // Importa la función para obtener los detalles de un alimento

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { food_id } = await req.json();

        // Verifica si se proporcionó el food_id
        if (!food_id) {
            return NextResponse.json({ message: "Food ID is missing" }, { status: 400 });
        }

        // Obtiene los detalles del alimento
        const foodDetails = await getFoodDetails(food_id);

        // Verifica si se encontraron detalles del alimento
        if (foodDetails) {
            return NextResponse.json(foodDetails, { status: 200 });
        } else {
            return NextResponse.json({ message: "No food details available" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error fetching food details:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
