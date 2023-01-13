import fs from 'fs';

import Base from '../components/templates/Base';

const Index = (content: any) => <Base {...content} />;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/main.json');
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

export default Index;
