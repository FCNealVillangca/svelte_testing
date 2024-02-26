import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = 'test user';
	console.log(`coming from page: ${event.url.pathname}`);
	const response = await resolve(event);
	return response;
};
