import { PrismaClient } from "@prisma/client";
import { CreateTaskDto, UpdateTaskDto } from "../types";
import { TaskNotFoundError, ValidationError } from "../errors/customErrors";

export class TaskService {
  constructor(private prisma: PrismaClient) {}

  async getAllTasks() {
    return await this.prisma.task.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async getTaskById(id: number) {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new TaskNotFoundError(`Task with ID ${id} not found`);
    }

    return task;
  }

  async createTask(data: CreateTaskDto) {
    const { title, color = "blue" } = data;

    if (!title || title.trim().length === 0) {
      throw new ValidationError("Title is required");
    }

    return await this.prisma.task.create({
      data: {
        title: title.trim(),
        color,
      },
    });
  }

  async updateTask(id: number, data: UpdateTaskDto) {
    if (data.title !== undefined && data.title.trim().length === 0) {
      throw new ValidationError("Title cannot be empty");
    }

    try {
      return await this.prisma.task.update({
        where: { id },
        data,
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new TaskNotFoundError(`Task with ID ${id} not found`);
      }
      throw error;
    }
  }

  async deleteTask(id: number) {
    try {
      await this.prisma.task.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === "P2025") {
        throw new TaskNotFoundError(`Task with ID ${id} not found`);
      }
      throw error;
    }
  }
}
