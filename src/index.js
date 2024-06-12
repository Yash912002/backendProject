// import dotenv from "dotenv";
import "dotenv/config";
// require("dotenv").config({path : "./.env"});
import connectDB from "./db/index.js";

// dotenv.config({
//   path: "./.env",
// });

connectDB();
