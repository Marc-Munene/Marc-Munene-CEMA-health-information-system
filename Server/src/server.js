import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

// Home route
app.get("/", (req, res) => {
  res.send("Home Route");
});

// Doctors route
app.get("/doc", (req, res) => {
  res.send("Getting Doctors");
});

app.post("/doc", (req, res) => {
  res.send("Adding Doctors");
});

app.put("/doc", (req, res) => {
  res.send("Updating Doctors");
});

app.delete("/doc", (req, res) => {
  res.send("Deleting Doctors");
});

//Clients route
app.get("/client", (req, res) => {
  res.send("Getting Clients");
});

app.post("/client", (req, res) => {
  res.send("Adding Clients");
});

app.put("/client", (req, res) => {
  res.send("Updating Clients");
});

app.delete("/client", (req, res) => {
  res.send("Deleting Clients");
});

//Programs route
app.get("/program", (req, res) => {
  res.send("Getting Programs");
});

app.post("/program", (req, res) => {
  res.send("Adding Programs");
});

app.put("/programs", (req, res) => {
  res.send("Updating Programs");
});

app.delete("/program", (req, res) => {
  res.send("Deleting Programs");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
