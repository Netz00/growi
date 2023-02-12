import { useCallback, useMemo } from 'react';

import Fuse from 'fuse.js';

export const useFuse = (
	list: ReadonlyArray<unknown>,
	options: Fuse.IFuseOptions<unknown> & {
		limit: number;
		matchAllOnEmptyQuery: boolean;
	}
) => {
	// removing custom options from Fuse options object
	// NOTE: `limit` is actually a `fuse.search` option, but we merge all options for convenience
	const { limit, matchAllOnEmptyQuery, ...fuseOptions } = options;

	// let's memoize the fuse instance for performances
	const fuse = useMemo(() => new Fuse(list, fuseOptions), [list, fuseOptions]);

	const search = useCallback(
		// if query is empty and `matchAllOnEmptyQuery` is `true` then return all list
		// NOTE: we remap the results to match the return structure of `fuse.search()`
		(query: string) =>
			// eslint-disable-next-line no-nested-ternary
			!query ||
			query === undefined ||
			query === '' ||
			!/^[a-z][a-z0-9_]{0,29}$/i.test(query)
				? matchAllOnEmptyQuery
					? fuse
							.getIndex()
							.toJSON()
							.records.slice(0, limit)
							.map((item: any, refIndex: any) => ({ item, refIndex }))
					: []
				: fuse.search(query, { limit }),
		[fuse, limit, matchAllOnEmptyQuery]
	);

	return {
		search,
	};
};
