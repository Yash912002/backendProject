// import dotenv from "dotenv";
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// dotenv.config({
//   path: "./.env",
// });

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("\n Server Error :- ", err);
      throw err;
    });

    app.listen(port, () => {
      console.log(`\n Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("\n MongoDB Connection Failed :- ", err);
  });
