import express from "express";

import bodyParser from "body-parser";
import cors from "cors";

import db from "./app/models";
import authRoutes from "./app/routes/auth.routes";
import userRoutes from "./app/routes/user.routes";

const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Role = db.role;

db.sequelize.sync().then((r) => {
});

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to auth application."});
});

// routes
authRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
