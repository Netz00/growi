import fs from 'fs';

import Link from 'next/link';

import { Button } from '../components/button/Button';
import { Meta } from '../components/layout/Meta';
import { Banner } from '../components/templates/Banner';
import { Footer } from '../components/templates/Footer';
import { Hero } from '../components/templates/Hero';
import { VerticalFeatures } from '../components/templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const Brands = (props: any) => (
	<div className="antialiased text-gray-600">
		<Meta
			title={props.siteTitle ?? AppConfig.title}
			description={props.siteDescription ?? AppConfig.description}
		/>
		<Hero
			navBarItems={
				<>
					{props.hero.navBarLinks?.map((item: any) =>
						item.active ? (
							<li
								key={item.key}
								className="underline underline-offset-2 decoration-primary-500 text-primary-500 pointer-events-none"
							>
								{item.text}
							</li>
						) : (
							<li key={item.key}>
								<Link href={item.link}>{item.text}</Link>
							</li>
						)
					)}
				</>
			}
			title={
				<>
					{props.hero.title.part1}
					<span className="text-primary-500">
						{props.hero.title.part2}
					</span>
				</>
			}
			description={props.hero.description}
			buttons={
				<Link href={props.hero.button_1.link}>
					<Button
						xl
						color="bg-brands-primary-300 hover:bg-brands-primary-400"
					>
						{props.hero.button_1.text}
					</Button>
				</Link>
			}
		/>

		{props.sections.map((section: any) => (
			<VerticalFeatures {...section} key={section.key} />
		))}

		<Banner
			{...props.banner}
			button={
				<Link href={props.banner.button.link}>
					<Button>{props.banner.button.text}</Button>
				</Link>
			}
		/>
		<Footer {...props.footer} />
	</div>
);

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/text/brands.json');
	const content = JSON.parse(res.toString());

	const footer = fs.readFileSync('public/assets/text/footer.json');
	const footerContent = JSON.parse(footer.toString());

	return {
		props: {
			...content,
			footer: footerContent,
		},
	};
}

export default Brands;
