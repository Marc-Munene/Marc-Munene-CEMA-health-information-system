import express from "express";

import { getHome } from "./controllers/home.js";

//routes
import { doctorRouter } from "./Routes/doctorsRoute.js";
import { programRouter } from "./Routes/programsRoute.js";
import { clientsRouter } from "./Routes/clientsRoute.js";

//connecting to database
import { connectDB } from "./database/config.js";
import { authRouter } from "./Routes/authRoute.js";

const app = express();

const PORT = process.env.PORT || 8080;

//connecting to database
connectDB();

// Home route
app.get("/", getHome);

app.use("/api", authRouter,doctorRouter, programRouter, clientsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
