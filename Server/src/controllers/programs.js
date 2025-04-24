import { Program } from "../database/models/Program.js";
//get all programs
export const getPrograms = async (req, res) => {
  try {
    const programs = await Program.find().populate("clients");

    res.status(200).json({
      success: true,
      message: "Programs fetched successfully",
      data: programs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch programs",
    });
  }
};

//get one program
export const getOneProgram = async (req, res) => {
  try {
    const programId = req.params.id;

    const program = await Program.findById(programId).populate("clients");

    if (!program) {
      return res.status(404).json({
        success: false,
        message: "Program not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Program fetched successfully",
      data: program,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot fetch program",
    });
  }
};

//adding a program
export const addingPrograms = async (req, res) => {
  try {
    const { programName, status, createdBy, doctorId } = req.body;

    const programeData = { programName, status, createdBy, doctorId };

    const newProgram = await Program.create(programeData);

    res.status(201).json({
      success: true,
      message: "Program added successfully",
      data: newProgram,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot add program",
    });
  }
};

//editing a program
export const editProgram = async (req, res) => {
  try {
    const programId = req.query.id;

    const program = await Program.findOneAndUpdate(
      { _id: programId },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Program updated successfully",
      data: program,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cannot edit program",
    });
  }
};

//deleting a program
export const deleteProgram = async (req, res) => {
  try {
    const programId = req.query.id;

    const deletedProgram = await Program.deleteOne({ _id: programId });

    res.status(200).json({
      success: true,
      deletedCount: deletedProgram.deletedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Cannot delete program",
    });
  }
};
