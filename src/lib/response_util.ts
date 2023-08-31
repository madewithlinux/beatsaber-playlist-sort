/**
 * similar to sveltekit json() response function, but with extra options passed to JSON.stringify()
 * @param data
 * @param opts
 * @returns
 */
export function json_stringify(
	data: any,
	opts?: {
		init?: ResponseInit;
		replacer?: ((this: any, key: string, value: any) => any) | (number | string)[];
		space?: string | number;
	},
): Response {
	// TODO deprecate this in favour of `Response.json` when it's
	// more widely supported
	const body = JSON.stringify(data, opts?.replacer as any, opts?.space);

	// we can't just do `text(JSON.stringify(data), init)` because
	// it will set a default `content-type` header. duplicated code
	// means less duplicated work
	const headers = new Headers(opts?.init?.headers);
	if (!headers.has('content-length')) {
		headers.set('content-length', encoder.encode(body).byteLength.toString());
	}

	if (!headers.has('content-type')) {
		headers.set('content-type', 'application/json');
	}

	return new Response(body, {
		...opts?.init,
		headers,
	});
}

const encoder = new TextEncoder();
