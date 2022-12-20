import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProject(title) {
  return prisma.project.create({
    data: {
      title
    }
  });
}

export async function getProjectById(projectId) {
  return prisma.project.findFirst({
    where: { id: projectId }
  });
}

export async function getTasklistsByProjectId(projectId) {
  return prisma.tasklist.findMany({
    where: {
      projectId
    },
    include: {
      tasks: true
    }
  });
}

export async function getProjects() {
  return prisma.project.findMany();
}

export async function createTask(title, takslistId) {
  return prisma.task.create({
    data: {
      title,
      tasklist: {
        connect: { id: takslistId }
      }
    }
  });
}
