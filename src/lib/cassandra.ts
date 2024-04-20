import  {Client, auth} from 'cassandra-driver';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import {User} from '@/dashboard/interfaces/user-info';

const cloud = { secureConnectBundle: `${process.env.SECURE_BUNDLE_PATH}` };
const authProvider = new auth.PlainTextAuthProvider('token', `${process.env.ASTRA_DB_APPLICATION_TOKEN}`);
export const client = new Client({ cloud, authProvider });


export const registerUser = async (first_name: string, last_name: string, email: string, password: string) => {
    
    try {
        await client.connect();

        const emailExists = await userExists(email);
        if(emailExists){
            console.log('El email ya esta registrado')
        }else{
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            const query = 'INSERT INTO macrofit_tracker.users (user_id, activity_level, age, first_name,daily_caloric_intake, last_name, email, height, weight, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
            const user_id = uuidv4();
            const activity_level="medio";
            const age = 0;
            const daily_caloric_intake = 0;
            const height = 0;
            const weight = 0;
            const params = [user_id, activity_level, age, first_name, daily_caloric_intake, last_name, email, height, weight, hashedPassword];
            await client.execute(query,params, {prepare: true})
    
            console.log("Registrado correctamente: ", params)
        }   
    } catch (error) {
        console.log("Error connecting to Cassandra: ", error);
    }

}

export const userExists = async(email:string)=>{
    try {
        await client.connect();
    
        const query = `SELECT email FROM macrofit_tracker.users WHERE email=? ALLOW FILTERING;`
        const params = [email];
        const exists = await client.execute(query, params, {prepare: true})
    
        return exists.rows.length > 0;
    } catch (error) {
        console.error('Error checking email:', error);
        throw error;
    }

    
}

export const authUser = async(email: string, password:string)=>{
    try {
        await client.connect();
        const query = "SELECT * FROM macrofit_tracker.users WHERE email=? ALLOW FILTERING;"
        const params = [email]

        const result = await client.execute(query, params, {prepare: true});

        if (result.rowLength > 0) {
            const user = result.first();
        
            const valid = await bcrypt.compare(password, user.password);
            
            if (valid) {
                console.log("Autenticación exitosa.");
                return {success: true, user}
               
            } else {
                console.log("Correo o contrasena incorrectos");
                return {success: false}
            }
        } else {
            console.log("Correo o contrasena incorrectos");
            return {success: false}

        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getInfoUser = async(email: string) => {
    try {
        await client.connect();

        const query = "SELECT * FROM macrofit_tracker.users WHERE email=? ALLOW FILTERING";
        const params = [email];

        const result = await client.execute(query, params, {prepare: true});

        if (result.rowLength > 0) {
            const user = result.first();
            console.log(user)

            return user;
        } else {
            return null;
        }

        

    } catch (error) {
        console.log(error)
    }
    return null;
}
