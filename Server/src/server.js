import express from "express";
import { getHome } from "./controllers/home.js";
import {
  addDoctor,
  deleteDoctor,
  editDoctor,
  getDoctors,
  getOneDoctor,
} from "./controllers/doctors.js";
import {
  addingClients,
  deleteClient,
  editClient,
  getClients,
  getOneClient,
} from "./controllers/clients.js";
import {
  addingPrograms,
  deleteProgram,
  editProgram,
  getOneProgram,
  getPrograms,
} from "./controllers/programs.js";

const app = express();

const PORT = process.env.PORT || 8080;

// Home route
app.get("/", getHome);

// Doctors route
app.get("/doctors", getDoctors);

app.get("/doctors", getOneDoctor);

app.post("/doctors", addDoctor);

app.put("/doctors", editDoctor);

app.delete("/doctors", deleteDoctor);

//Clients route
app.get("/client", getClients);

app.get("/client", getOneClient);

app.post("/client", addingClients);

app.put("/client", editClient);

app.delete("/client", deleteClient);

//Programs route
app.get("/programs", getPrograms);

app.get("/programs", getOneProgram);

app.post("/programs", addingPrograms);

app.put("/programs", editProgram);

app.delete("/programs", deleteProgram);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
