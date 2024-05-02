import { NextRequest, NextResponse } from 'next/server';
import { updatePassword } from '@/lib/cassandra';

export async function POST(req: NextRequest) {
    try {
        // Obtiene los datos de la solicitud
        const { user_id, password } = await req.json();

        // Verifica si el user_id es una cadena válida
        if (typeof user_id === "string") {
            // Actualiza la contraseña del usuario en la base de datos
            await updatePassword(user_id, password);
            
            // Retorna una respuesta exitosa
            return NextResponse.json({ message: "Password updated." }, { status: 200 });
        } else {
            throw new Error("Invalid user_id");
        }
    } catch (error) {
        // Maneja los errores y retorna una respuesta de error
        console.error('An error occurred while updating the password:', error);
        return NextResponse.json(
            { message: "An error occurred while updating the password." },
            { status: 500 }
        );
    }
}
