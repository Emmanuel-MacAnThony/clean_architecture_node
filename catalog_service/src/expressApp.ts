import express from "express";
import catalogrouter from "./api/rest/catalog.routes";

const app = express();

app.use(express.json());
app.use("/", catalogrouter);

export default app;
