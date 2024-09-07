import express from "express";
 import controller from "./controller.js";

const app = express();
 app.use("/admin-api", controller);

export default app;
