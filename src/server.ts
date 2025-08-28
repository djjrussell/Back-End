// backend/src/app.ts (or server.ts)
import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

// Error handler MUST be last
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
