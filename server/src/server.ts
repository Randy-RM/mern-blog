require("dotenv").config();
import cors from "cors";
import express, { Request, Response } from "express";

/**
 * -------------- GENERAL SETUP ----------------
 */
const app = express();
const PORT = 8001;
const corsOptions = {
  origin: "*", // [ `${process.env.API_HOST}${PORT}`,`${process.env.CLIENT_HOST}${PORT}`]
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));
app.use((req: Request, res: Response, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * -------------- ROUTE ----------------
 */
app.get("/api", (req, res, next) => {
  return res.json({ message: "Welcome to Express MVC Tuto API" });
});

/**
 * -------------- RUN SERVER ----------------
 */
app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});
