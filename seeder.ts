import { seedData } from "./lib/data";
import { Recipe } from "./models";
import mongoose from "mongoose";

import dotenv from "dotenv";

// MongoDB connection options
const connectionOptions: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

dotenv.config({ path: __dirname + "/.env" });

const DB_URL = process.env.NEXT_PUBLIC_DB_LOCAL_URL

// Connect to MongoDB
mongoose
  .connect(DB_URL as string, connectionOptions)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Failed to connect to MongoDB:", error.message));

// Import data from seedData
const importData = async () => {
  try {
    // Delete previous data to avoid duplication
    await Recipe.deleteMany();
    // Insert new data from seedData
    await Recipe.insertMany(seedData);

    console.log("Data imported successfully");

    process.exit();
  } catch (error) {
    console.error("Failed to import data:", error);
    process.exit(1);
  }
};

// Destroy all data in Recipe collection
const destroyData = async () => {
  try {
    await Recipe.deleteMany();

    console.log("All data destroyed successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to destroy data:", error);
    process.exit(1);
  }
};

// Check command-line argument to determine import or destroy operation
if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
