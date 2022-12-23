import { deleteProject } from '$lib/server/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  const { projectId } = await request.json();
  await deleteProject(+projectId);

  return json({ success: true });
}
