import type { Actions } from './$types';
import postmarkClient from '$lib/postmark';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';

const contactSchema = z.object({
	name: z.string().max(50).trim(),
	email: z.string().trim().email(),
	phone: z.string().optional(),
	message: z.string().max(250)
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		// validate data
		const contactData = contactSchema.safeParse(formData);

		// if data is invalid return error
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

		// if data is valid send email
		try {
			const parameters = {
				TemplateId: 20861986,
				TemplateModel: contactData.data,
				From: 'logan@firefly.llc',
				To: 'theridgesecretary@outlook.com',
				MessageStream: 'outbound',
				TrackOpens: true
			};

			const res = await postmarkClient.sendEmailWithTemplate(parameters);

			if (res.ErrorCode == 0) return contactData;

			return fail(400, { message: res?.Message });
		} catch (error) {
			await postmarkClient.sendEmail({
				From: 'logan@firefly.llc',
				To: 'logan@firefly.llc',

				Subject: 'FtS Website form error',
				TextBody: JSON.stringify(error)
			});
		}
		return contactData;
	}
};
