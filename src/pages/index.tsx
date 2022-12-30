import fs from 'fs';

import Base from '../templates/Base';

const Index = ({ content }: any) => <Base {...content} />;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/main.json');
	const content = JSON.parse(res.toString());

	return {
		props: {
			content,
		},
	};
}

export default Index;
