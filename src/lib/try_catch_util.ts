export function try_catch<R>(func: () => R): [R | undefined, Error | undefined] {
	try {
		return [func(), undefined];
	} catch (e) {
		if (e instanceof Error) {
			return [undefined, e];
		} else {
			console.error(e);
			return [undefined, new Error(`unknown error ${e}`)];
		}
	}
}
