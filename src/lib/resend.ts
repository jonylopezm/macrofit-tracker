import nodemailer from 'nodemailer';

export const sendPasswordResetEmail = async (email : string) => {

    try {
         // Configura el transporte de correo
         const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Usa el servidor SMTP de tu proveedor
            port: 587, // Puerto estándar para SMTP con STARTTLS
            secure: false, // false para STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    
         // Define los detalles del correo
         const mailOptions = {
            from: '"Macrofit Tracker" <no-reply@macrofit.com>', // Remitente
            to: email, // Destinatario
            subject: 'Recupera Contraseña', // Asunto
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            overflow: hidden;
                        }
                        .header {
                            background-color: #007BFF;
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            padding: 20px;
                            color: #333333;
                            text-align: center;
                        }
                        .content p {
                            margin-bottom: 20px;
                            font-size: 16px;
                        }
                        .button {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #007BFF;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 5px;
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .footer {
                            background-color: #f4f4f4;
                            text-align: center;
                            padding: 10px;
                            font-size: 12px;
                            color: #999999;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Restablece tu Contraseña</h1>
                        </div>
                        <div class="content">
                            <p>Hola,</p>
                            <p>Recibimos una solicitud para restablecer tu contraseña. Haz clic en el botón de abajo para continuar.</p>
                            <a href="http://localhost:3000/reset-password" class="button">Restablecer Contraseña</a>
                            <p>Si no solicitaste este cambio, puedes ignorar este mensaje.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Tu Aplicación. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

       // Envía el correo
       const info = await transporter.sendMail(mailOptions);
       console.log(`Email sent: ${info.messageId}`);
   } catch (error) {
       console.error('An error occurred while sending the email:', error);
       throw error;
   }
};

export const newUserEmail = async (email : string) => {

    try {
        // Configura el transporte de correo
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Usa el servidor SMTP de tu proveedor
            port: 587, // Puerto estándar para SMTP con STARTTLS
            secure: false, // false para STARTTLS
            auth: {
                user: 'jonslopez06@gmail.com', // Tu correo electrónico
                pass: 'lwkf alkw zafl zaur', // Tu contraseña o token de aplicación
            },
        });

        // Define los detalles del correo
        const mailOptions = {
            from: '"Macrofit Tracker" <no-reply@macrofit.com>', // Remitente
            to: email, // Destinatario
            subject: 'Bienvenido a Macrofit Tracker', // Asunto
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            border-radius: 8px;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                            overflow: hidden;
                        }
                        .header {
                            background-color: #4CAF50;
                            color: #ffffff;
                            padding: 20px;
                            text-align: center;
                        }
                        .header h1 {
                            margin: 0;
                        }
                        .content {
                            padding: 20px;
                            color: #333333;
                            text-align: center;
                        }
                        .content p {
                            margin-bottom: 20px;
                            font-size: 16px;
                        }
                        .button {
                            display: inline-block;
                            padding: 10px 20px;
                            background-color: #4CAF50;
                            color: #ffffff;
                            text-decoration: none;
                            border-radius: 5px;
                            font-size: 16px;
                        }
                        .footer {
                            background-color: #f4f4f4;
                            text-align: center;
                            padding: 10px;
                            font-size: 12px;
                            color: #999999;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Bienvenido a Macrofit Tracker</h1>
                        </div>
                        <div class="content">
                            <p>¡Hola!</p>
                            <p>Estamos emocionados de acompañarte en tu viaje hacia un estilo de vida más saludable. Con <strong>Macrofit Tracker</strong>, entender y controlar lo que comes nunca fue tan fácil. Mejora tu figura, tu salud y tu calidad de vida en general.</p>
                            <p>¡Es hora de tomar el control y transformar tu vida!</p>
                            <a href="http://localhost:3000/login" class="button">Comienza Ahora</a>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Macrofit Tracker. Todos los derechos reservados.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Envía el correo
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
    } catch (error) {
        console.error('An error occurred while sending the email:', error);
        throw error;
    }
};