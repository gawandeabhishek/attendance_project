import express from "express";
import mongoose from "mongoose";
import { MONGODBURL, PORT, WEBURL } from "./config.js";
import studentsRoute from "./routes/studentsRoute.js";
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS(cross-origin Resource Sharing) POLICY
app.use(cors());
// app.use(
//   cors(
//     {
//       origin: WEBURL,
//       methods: ["GET", "POST", "PUT", "DELETE"],
//       allowedHeaders: ["Content-Type"]
//     }
//   )
// )

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to web world");
});

app.use("/students", studentsRoute);

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
