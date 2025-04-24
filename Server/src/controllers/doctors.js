// getting all doctors
export const getDoctors = (req, res) => {
  res.send("Getting Doctors");
};

//getting a single doctor
export const getOneDoctor = (req, res) => {
  res.send("Getting a single doctor");
};

//adding a doctor
export const addDoctor = (req, res) => {
  res.send("Adding a doctor");
};

//edit a doctos
export const editDoctor = (req, res) => {
  res.send("Editing a doctor");
};

//deleting a doctor
export const deleteDoctor = (req, res) => {
  res.send("Deleting a doctor");
};
