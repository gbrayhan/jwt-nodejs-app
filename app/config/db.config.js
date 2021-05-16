const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "qweqwe",
  DB: "app_auth_jwt",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default dbConfig;
