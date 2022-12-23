import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createProject(title) {
  return prisma.project.create({
    data: {
      title
    }
  });
}

export async function deleteProject(projectId) {
  return prisma.project.delete({
    where: {
      id: projectId
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

export async function createTasklist(title, projectId) {
  return prisma.tasklist.create({
    data: {
      title,
      project: {
        connect: { id: projectId }
      }
    }
  });
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
