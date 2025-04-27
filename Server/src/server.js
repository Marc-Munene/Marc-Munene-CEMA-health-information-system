import express from "express";

// Home route
import { getHome } from "./controllers/home.js";

//cors import
import cors from "cors";

//routes
import { doctorRouter } from "./Routes/doctorsRoute.js";
import { programRouter } from "./Routes/programsRoute.js";
import { clientsRouter } from "./Routes/clientsRoute.js";
import { authRouter } from "./Routes/authRoute.js";

import { connectDB } from "./database/config.js";
import { enrollmentRouter } from "./Routes/enrollmentRoute.js";
import { doctorAuthentication } from "./middleware/AuthMiddleware.js";

//cookie parser
import cookieParser from "cookie-parser";

const app = express();

console.log({ client: process.env.CLIENT_URL });

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;

//cookie parser middleware
app.use(cookieParser());

//middleware
app.use(express.json());

//connecting to database
connectDB();

// Home route
app.get("/", getHome);

app.use(
  "/api",
  authRouter,
  doctorAuthentication,
  clientsRouter,
  programRouter,
  enrollmentRouter,
  doctorRouter
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
