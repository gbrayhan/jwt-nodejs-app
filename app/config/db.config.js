import dotenv from "dotenv";
dotenv.config();

const dbConfig = {
  HOST: process.env.DB_SQL_HOST,
  USER: process.env.DB_SQL_USER,
  PASSWORD: process.env.DB_SQL_PASSWORD,
  DB: process.env.DB_SQL_NAME,
  dialect: process.env.DB_SQL_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
