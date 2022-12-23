import { deleteTask } from '$lib/server/db';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function DELETE({ request }) {
  const { taskId } = await request.json();
  const task = await deleteTask(+taskId);
  
  return json({ task });
}
