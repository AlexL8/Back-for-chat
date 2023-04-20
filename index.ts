import express from "express";
import cors from "cors";
import * as core from "express-serve-static-core";

import { CorsOptions } from "./types/cors";
import { chatRoute } from "./routers";

const app: core.Express = express();
const port: number = 9000;

const corsOption = {
  origin: ["http://localhost:3000"],
  credentials: true,
} as CorsOptions;

app.use(express.json());
app.use(cors(corsOption));
app.use("", chatRoute);

app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
