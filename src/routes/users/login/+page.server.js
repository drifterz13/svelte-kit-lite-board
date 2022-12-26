import { getUserByEmail } from '$lib/server/db';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import bcrypt from 'bcrypt';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, locals }) => {
    const form = Object.fromEntries(await request.formData());

    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(4)
    });

    const { data, error } = loginSchema.safeParse(form);
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

    const user = await getUserByEmail(data.email);
    if (!user) {
      return fail(404, { message: 'User not found.' });
    }

    const match = await bcrypt.compare(data.password, user.passwordHash);
    if (!match) {
      return fail(404, { errors: { password: 'Invalid password.' } });
    }

    await locals.session.set({ userId: user.id });

    throw redirect(302, '/');
  }
};
