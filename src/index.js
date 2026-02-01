//require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
dotenv.config();
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

//console.log(process.env.MONGO_URI);

// dotenv.config({
//   path:'.env'
// });

console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI EXISTS:", !!process.env.MONGODB_URI);

connectDB();


// import express from "express";
// const app = express();

// ;(async () => {
//   try{
//     await mongoose.connect(`${process.env.MONGODB_URI}/$
//       {DB_NAME}`)
//       app.on("error",(error)=>{
//         console.log("ERROR:",error);
//         throw error;
//       })
//       app.listen(process.env.PORT, () => {
//         console.log(`Server is running on port ${process.env.PORT}`);
//       })
//   } catch (error) {
//     console.error("Failed to connect to the database", error)
//     throw error
//   }
// })()