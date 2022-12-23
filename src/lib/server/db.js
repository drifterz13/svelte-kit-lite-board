import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/** Project data */
export async function createProject(title) {
  return prisma.project.create({
    data: {
      title
    }
  });
}

export async function getProjects() {
  return prisma.project.findMany();
}

export async function getProjectById(projectId) {
  return prisma.project.findFirst({
    where: { id: projectId }
  });
}

export async function deleteProject(projectId) {
  return prisma.project.delete({
    where: {
      id: projectId
    }
  });
}

/** Tasklist data */
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

/** Task data */
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

export async function deleteTask(taskId) {
  return prisma.task.delete({
    where: {
      id: taskId
    },
    include: {
      tasklist: true
    }
  });
}
