import fs from 'fs';

import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button, ButtonStyle } from '../components/button/Button';
import { HeroContent } from '../components/hero/HeroContent';
import { Meta } from '../components/layout/Meta';
import { Section } from '../components/layout/Section';
import { CagaljsNavbarItems } from '../components/navigation/CagaljsNavbarItems';
import { Banner } from '../components/templates/Banner';
import { Footer } from '../components/templates/Footer';
import { Layout } from '../components/templates/Layout';
import { Logo } from '../components/templates/Logo';
import { VerticalFeatures } from '../components/templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const Creators = (props: any) => (
	<Layout>
		<Meta
			title={props.siteTitle ?? AppConfig.title}
			description={props.siteDescription ?? AppConfig.description}
		/>

		<Background>
			<Section className="py-6">
				<CagaljsNavbarItems
					logo={<Logo xl />}
					navBarLinks={props.hero.navBarLinks}
				/>
			</Section>
			<Section className="md:pt-20 md:pb-32 pb-10 pt-16 px-3">
				<HeroContent
					title={props.hero.title}
					description={props.hero.description}
					buttons={
						<Link href={props.hero.button_1.link}>
							<Button xl style={ButtonStyle.CREATOR_PRIMARY}>
								{props.hero.button_1.text}
							</Button>
						</Link>
					}
				/>
			</Section>
		</Background>

		{props.sections.map((section: any) => (
			<VerticalFeatures {...section} key={section.key} />
		))}

		<Banner
			{...props.banner}
			button={
				<Link href={props.banner.button.link}>
					<Button style={ButtonStyle.SECONDARY}>
						{props.banner.button.text}
					</Button>
				</Link>
			}
		/>
		<Footer {...props.footer} />
	</Layout>
);

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/i18n/creators.json');
	const content = JSON.parse(res.toString());

	const footer = fs.readFileSync('public/assets/i18n/footer.json');
	const footerContent = JSON.parse(footer.toString());

	return {
		props: {
			...content,
			footer: footerContent,
		},
	};
}

export default Creators;
