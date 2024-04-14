const cassandra = require('cassandra-driver');
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const cloud = { secureConnectBundle: process.env['SECURE_BUNDLE_PATH'] };
const authProvider = new cassandra.auth.PlainTextAuthProvider('token', process.env['ASTRA_DB_APPLICATION_TOKEN']);
export const client = new cassandra.Client({ cloud, authProvider });


export const registerUser = async (first_name: string, last_name: string, email: string, password: string) => {
    
    try {
        await client.connect();

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
    } catch (error) {
        console.log("Error connecting to Cassandra: ", error);
    }

}
