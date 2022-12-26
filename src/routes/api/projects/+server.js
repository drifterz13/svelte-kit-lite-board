import { deleteProject } from '$lib/server/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  if (!locals.session.data.userId) {
    throw redirect(302, '/users/login');
  }
  const { projectId } = await request.json();
  await deleteProject(+projectId);

  return json({ success: true });
}
