import {
  createTask,
  createTasklist,
  getProjectById,
  getTasklistsByProjectId
} from '$lib/server/db';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const projectId = parseInt(params.projectId);
  const [project, tasklists] = await Promise.all([
    getProjectById(projectId),
    getTasklistsByProjectId(projectId)
  ]);

  const tasks = new Map();
  for (const tasklist of tasklists) {
    for (const task of tasklist.tasks) {
      tasks.set(task.id, task);
    }
  }

  return { project, tasklists, tasks };
}

/** @type {import('./$types').Actions} */
export const actions = {
  createTask: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const tasklistId = parseInt(data.get('tasklistId'));
    const task = await createTask(title, tasklistId);

    return { task };
  },
  createTasklist: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const projectId = parseInt(data.get('projectId'));
    const tasklist = await createTasklist(title, projectId);

    return { tasklist };
  }
};
