//getting all clients
export const getClients = (req, res) => {
  res.send("Getting Clients");
};

//Getting a single client
export const getOneClient = (req, res) => {
  res.send("Getting a single client");
};

//adding a client
export const addingClients = (req, res) => {
  res.send("Adding a client");
};

//editing a client
export const editClient = (req, res) => {
  res.send("Editing a client");
};

//deleting a client
export const deleteClient = (req, res) => {
  res.send("Deleting a client");
};
