import * as db from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

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
export async function load({ depends, locals }) {
  const { userId } = locals.session.data;
  if (!userId) {
    throw redirect(302, '/users/login');
  }

  depends('api:projects');

  return {
    projects: await db.getProjects()
  };
}
