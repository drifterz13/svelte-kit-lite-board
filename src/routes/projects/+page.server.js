import * as db from '$lib/server/db.js';

/** @type {import('./$types').Actions} */
export const actions = {
  createProject: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');
    const project = await db.createProject(title);

    return { success: true, project };
  }
};

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  return {
    projects: await db.getProjects()
  };
}
