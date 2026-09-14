import mongoose from "mongoose";

const dbConnection = async () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
    })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });
};

export default dbConnection;