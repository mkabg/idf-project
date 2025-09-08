import express from "express";
import dotenv from "dotenv";

import { configRoutes } from "./routes/config-routes.js";
import { logger } from "./middlewares/logger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

configRoutes(app);



app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
