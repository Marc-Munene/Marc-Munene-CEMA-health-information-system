import express from "express";

// Home route
import { getHome } from "./controllers/home.js";

//routes
import { doctorRouter } from "./Routes/doctorsRoute.js";
import { programRouter } from "./Routes/programsRoute.js";
import { clientsRouter } from "./Routes/clientsRoute.js";
import { authRouter } from "./Routes/authRoute.js";


import { connectDB } from "./database/config.js";

const app = express();

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());

//connecting to database
connectDB();

// Home route
app.get("/", getHome);

app.use("/api", authRouter, doctorRouter, programRouter, clientsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
