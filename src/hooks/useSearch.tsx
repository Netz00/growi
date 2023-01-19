import Fuse from 'fuse.js';

const options = {
	includeScore: true,
	includeMatches: true,
	useExtendedSearch: true,
	keys: [
		'firstName',
		'lastName',
		{
			name: 'username',
			weight: 1.5,
		},
		{
			name: 'tags',
			weight: 0.5,
		},
	],
};

export default function useSearch(props: any) {
	const fuse = new Fuse(props, options);
	function search(query: string) {
		if (
			query === undefined ||
			query === '' ||
			!/^[a-z][a-z0-9_]{0,29}$/i.test(query)
		)
			return [];

		const result = fuse.search(`^${query}`, { limit: 8 }); // starts with

		return result;
	}

	return search;
}
