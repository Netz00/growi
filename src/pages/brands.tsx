import fs from 'fs';

import Base from '../templates/Base';

const Brands = ({ content }: any) => <Base {...content} />;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/brands.json');
	const content = JSON.parse(res.toString());

	return {
		props: {
			content,
		},
	};
}

export default Brands;
