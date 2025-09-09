import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import configRoutes from "./routes/config-routes.js";
import { logger } from "./middlewares/logger.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static("public"))
app.use(logger);

configRoutes(app);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
