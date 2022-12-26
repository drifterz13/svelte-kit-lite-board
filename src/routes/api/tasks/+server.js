import { deleteTask } from '$lib/server/db';
import { json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request, locals }) {
  if (!locals.session.data.userId) {
    throw redirect(302, '/users/login');
  }
  const { taskId } = await request.json();
  const task = await deleteTask(+taskId);

  return json({ task });
}
