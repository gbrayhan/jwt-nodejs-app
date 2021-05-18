import dotenv from "dotenv";
dotenv.config();

const authConfig = {
  secret: process.env.SECRET_KEY_JWT,
};
export default authConfig;
