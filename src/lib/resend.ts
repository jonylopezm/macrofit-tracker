import { Resend } from 'resend';

export const sendPasswordResetEmail = async (email : string) => {

    try {
        const resend = new Resend('re_QGT34LrS_Hu5ayfT6R83zXRw67NcJ9SQ6');
    
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Reestablecer Contraseña',
            html: '<p>Haz clic en el siguiente enlace para restablecer tu contraseña: [http://localhost:3000/reset-password]</p>'
        });

        console.log('Password reset email sent.');
    } catch (error) {
        console.error('An error occurred while sending password reset email:', error);
        throw error;
    }
};