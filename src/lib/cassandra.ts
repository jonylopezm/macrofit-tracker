import  {Client, auth} from 'cassandra-driver';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

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
            return user;
        } else {
            return null;
        }

        

    } catch (error) {
        console.log(error)
    } 
    return null;
}

export const updateProfile = async (age: number, weight: number, height: number, user_id: string) => {
    try {
        await client.connect();

        const query = 'UPDATE macrofit_tracker.users SET age=?, weight=?, height=? WHERE user_id=?';
        const params = [age, weight, height, user_id];

        await client.execute(query, params, { prepare: true });

        console.log("Información del usuario actualizada correctamente.");
        return true;

    } catch (error) {
        console.log("Error al actualizar la información del usuario:", error);
        return false;
    }
    
};

export const getAllFoodData = async () => {
    try {
        await client.connect();

        const query = "SELECT * FROM macrofit_tracker.food";
        const result = await client.execute(query);

        if (result.rowLength > 0) {
            return result.rows;
        } else {
            return [];
        }
    } catch (error) {
        console.error("Error al obtener los datos de comida:", error);
        throw error;
    }
};

export const registerFoodRecord = async (
    user_id: string,
    food_Id: string,
    date: Date,
    meal_type: string,
    quantity: number
  ) => {
    try {
      await client.connect();
        const record_id = uuidv4();
        const query =
          'INSERT INTO macrofit_tracker.food_record (record_id, user_id, food_id, date, meal_type, quantity) VALUES (?, ?, ?, ?, ?, ?)';
        const params = [record_id, user_id, food_Id, date, meal_type, quantity];
        await client.execute(query, params, { prepare: true });
  
        console.log('Registro de comida creado correctamente:', params);
      
    } catch (error) {
      console.error('Error al conectar con Cassandra:', error);
      throw error;
    }
  };

  export const getFoodRecordsForUser = async (user_id: string) => {
    try {
        const query = 'SELECT * FROM macrofit_tracker.food_record WHERE user_id = ? ALLOW FILTERING';
        const params = [user_id];
        const foodRecords = await client.execute(query, params, { prepare: true });
        return foodRecords.rows;
    } catch (error) {
        console.error('Error retrieving food records:', error);
        throw error;
    }
}

export const getFoodDetails = async (food_id: string) => {
    try {
      const query = 'SELECT * FROM macrofit_tracker.food WHERE food_id = ?';
      const params = [food_id];
      const foodDetails = await client.execute(query, params, { prepare: true });
      return foodDetails.rows[0];
    } catch (error) {
      console.error('Error retrieving food details:', error);
      throw error;
    }
};

export const updatePassword = async ( user_id: string, newPassword: string) => {
    try {
        await client.connect();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const query = 'UPDATE macrofit_tracker.users SET password=? WHERE user_id=?';
        const params = [hashedPassword, user_id];

        await client.execute(query, params, { prepare: true });

        console.log("Contraseña del usuario actualizada correctamente.", newPassword, hashedPassword);
        return true;

    } catch (error) {
        console.error("Error al actualizar la contraseña del usuario:", error);
        return false;
    }
};


