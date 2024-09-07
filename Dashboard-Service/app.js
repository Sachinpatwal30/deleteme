import express from "express";
 import controller from "./controller.js";

const app = express();
 app.use("/dashboard-api", controller);

 
export default app;
