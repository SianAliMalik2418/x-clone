import mongoose from "mongoose";

export const connectDB = async () => {
  const connection = {};

  try {
    // CHECKING IF THE CONNECTION PRE EXISTS USE THAT
    if (connection.isConnected) {
      console.log("Using existing mongo connection!");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;

    const mongooseConnection = mongoose.connection;

    mongooseConnection.on("success", () => {
      console.log("Mongoose Connected!");
    });

    mongooseConnection.on("error", () => {
      console.log("Error while connecting Mongoose!");
    });
  } catch (error) {
    console.log(error, "Error while trying to connect to DB");
  }
};
