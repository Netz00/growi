import fs from 'fs';

import Base from '../templates/Base';

const Creators = ({ content }: any) => <Base {...content} />;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/creators.json');
	const content = JSON.parse(res.toString());

	return {
		props: {
			content,
		},
	};
}

export default Creators;
