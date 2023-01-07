import type { Actions } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

const contactSchema = z.object({
	name: z.string().trim().min(1),
	email: z.string().trim().email().min(1),
	phone: z.string().optional(),
	message: z.string().min(1).max(250)
});

export const actions: Actions = {
	default: async (event) => {
		const formDataa = Object.fromEntries(await event.request.formData());
		const contactData = contactSchema.safeParse(formDataa);
		if (!contactData.success) {
			// Loop through the errors array and create a custom errors array
			const errors = contactData.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});

			return fail(400, { error: true, errors });
		}
		return contactData;
	}
};
