import fs from 'fs';

import Base from '../templates/Base';

const Creators = (content: any) => <Base {...content} />;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/creators.json');
	const content = JSON.parse(res.toString());

	const footer = fs.readFileSync('public/assets/footer.json');
	const footerContent = JSON.parse(footer.toString());

	return {
		props: {
			...content,
			footer: footerContent,
		},
	};
}

export default Creators;
