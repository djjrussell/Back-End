import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { TaskController } from "../controllers/taskController";
import { TaskService } from "../services/taskService";
import {
  validateCreateTask,
  validateUpdateTask,
} from "../middleware/validation";

const router = Router();

const prisma = new PrismaClient();

const taskService = new TaskService(prisma);

const taskController = new TaskController(taskService);

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", validateCreateTask, taskController.createTask);
router.put("/:id", validateUpdateTask, taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

export default router;
