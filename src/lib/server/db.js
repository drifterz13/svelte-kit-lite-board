import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
