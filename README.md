## Configuracion de la Base de Datos
### Creada en Datastax by Astra DB

https://www.datastax.com/products/datastax-astra

Crea una cuenta para poder hacer una base de datos

• Una vez creada la cuenta, en la barra de opciones selecciona Databases, y busca el boton Create Database.

• Crean la base de datos con el nombre macrofit_trackerDB, el provider seleccionan Google Cloud, y la region us-esast que es la unica que aparece

• Una vez creada encienden la base de datos

• En la pestaña de Data Exploreren el dashboard de la BD, crear un nuevo keyspace con el nombre macrofit_tracker y click en create keyspace

• Creado el nuevo keyspace, se van al boton CQL Console e ingresan los siguientes comandos y scripts para crear la base de datos.


### Script de la base de datos:

1. Usar el keyspace creado con el comando:
   USE macrofit_tracker;

2.Agregar las tablas a la base de datos:
CREATE TABLE IF NOT EXISTS users (
  user_id TEXT,
  email TEXT,
  password TEXT,
  first_name TEXT,
  last_name TEXT,
  age INT,
  weight DOUBLE,
  height DOUBLE,
  activity_level TEXT,
  daily_caloric_intake DOUBLE,
  gender TEXT,
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS food (
  food_id TEXT,
  name TEXT,
  serving_size DOUBLE,
  serving_size_units TEXT,
  serving_type TEXT,
  calories DOUBLE,
  proteins DOUBLE,
  carbohydrates DOUBLE,
  fats DOUBLE,
  PRIMARY KEY (food_id)
);

CREATE TABLE IF NOT EXISTS food_record (
  record_id TEXT,
  user_id TEXT,
  food_id TEXT,
  date TEXT,
  meal_type TEXT,
  quantity DOUBLE,
  PRIMARY KEY (record_id)
);

## Archivo .ENV

Este archivo contiene lo siguiente:

ASTRA_DB_ID=(Coloque el ID de google Cloud que aparece en la pestaña overview de la base de datos)

ASTRA_DB_REGION=us-east1 (la region de su base de datos)

ASTRA_DB_KEYSPACE=macrofit_tracker (este es el nombre del keyspace creado anteriormente)

ASTRA_DB_APPLICATION_TOKEN=AstraCS:nJdHmDHPPGZqPwEuWHAMPYOh:936a1254fb6c58f29328498cdd4cca6b15aec4dd1f8d2077c023b029b63ae103 (arriba del id de google cloud presiona el boton generate token, lo copian aqui)

SECURE_BUNDLE_PATH=secure-connect-macrofit-trackerdb.zip (Este archivo lo descargan al darle click a los 3 puntitos en donde esta el GoogleCloud ID, y hacen click en Download CSB, el archivo lo descargan y lo colocan dentro de la carpeta del proyecto, copian el nombre y lo pegan aqui)


JWT:
JWT_SECRET="mi_clave_secreta_123"(su propia clave secreta)

### Ejecutar el proyecto:

• Ejecutan npm install en vs code, para intalar las dependencias

• Ejecutan el comando npm fix --force para solucionar los errores

• Ejecutan npm run dev

• Disfrute el programa


