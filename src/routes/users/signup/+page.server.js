import { createUser } from '$lib/server/db';
import { fail, json, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import bcrypt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = Object.fromEntries(await request.formData());

    const userSchema = z.object({
      username: z.string().min(4),
      email: z.string().email(),
      password: z.string().min(4)
    });

    const { data, error } = userSchema.safeParse(form);
    if (error) {
      const errors = error.errors.reduce((result, err) => {
        const [prop] = err.path;
        if (!result[prop]) {
          result[prop] = err.message;
        }

        return result;
      }, {});

      return fail(400, { errors });
    }

    const passwordHash = await bcrypt.hash(data.password, 10);

    await createUser(data.username, data.email, passwordHash);

    throw redirect(302, '/users/login');
  }
};
