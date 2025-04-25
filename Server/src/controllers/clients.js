import { Client } from "../database/models/Client.js";

//getting all clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find()

    res.status(200).json({
      success: true,
      message: "Clients fetched successfully",
      data: clients,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch clients",
    });
  }
};

//Getting a single client
export const getOneClient = async (req, res) => {
  try {
    const clientId = req.params.id;

    const client = await Client.findById(clientId)

    if (!client) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }
    // If client is found, return the client data n
    res.status(200).json({
      success: true,
      message: "Client fetched successfully",
      data: client,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch client",
    });
  }
};

//adding a client
export const addingClients = async (req, res) => {
  try {
    const { firstName, lastName, DOB, gender, phoneNumber, email, programs } =
      req.body;

    const clientData = {
      firstName,
      lastName,
      DOB,
      gender,
      phoneNumber,
      email,
      programs,
    };

    const newClient = await Client.create(clientData);

    res.status(201).json({
      success: true,
      message: "Client added successfully",
      data: newClient,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot add client",
    });
  }
};

//editing a client
export const editClient = async (req, res) => {
  try {
    const clientId = req.query.id;

    const client = await Client.findOneAndUpdate({ _id: clientId }, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Client updated successfully",
      data: client,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot edit client",
    });
  }
};

//deleting a client
export const deleteClient = async (req, res) => {
  try {
    const ClientId = req.query.id;

    const deletedClient = await Client.deleteOne({ _id: ClientId });

    if (deletedClient.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Client not found",
      });
    }

    res.status(200).json({
      success: true,
      deletedCount: deletedClient.deletedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot delete client",
    });
  }
};
