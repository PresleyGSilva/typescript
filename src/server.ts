import express from "express";
import { createCouse } from "./routes";

const app = express();

app.get("/", createCouse);

app.listen(3333);