import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.project.deleteMany();

	const project =
		await prisma.project.create({
			data: {
				title: 'Project 1',
				tasklists: {
					create: [
						{ title: 'Tasklist 1' }
					]
				}
			},
			include: {
				tasklists: true
			}
		});

	const [tasklist] = project.tasklists;

	await prisma.tasklist.update({
		where: {
			id: tasklist.id
		},
		data: {
			tasks: {
				create: [{ title: 'Task 1' }]
			}
		}
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})

	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
