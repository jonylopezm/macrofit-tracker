import { NextRequest, NextResponse } from "next/server";
import { getFoodRecordsForUser } from '@/lib/cassandra'; // Importa la función para obtener los datos de comida

export async function POST(req: NextRequest) {
    try {
        // Obtiene el ID de usuario del cuerpo de la solicitud
        const { user_id } = await req.json();

        console.log(user_id)
        // Verifica si se proporcionó el ID de usuario
        if (!user_id) {
            return NextResponse.json({ message: "User ID is missing" }, { status: 400 });
        }

        // Obtiene los registros de alimentos para el usuario especificado
        const foodRecordData = await getFoodRecordsForUser(user_id);

        // Verifica si se encontraron registros de alimentos
        if (foodRecordData.length > 0) {
            return NextResponse.json(foodRecordData, { status: 200 });
        } else {
            return NextResponse.json({ message: "No food data available" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error al obtener los datos de comida:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
