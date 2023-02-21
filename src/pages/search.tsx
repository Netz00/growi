import fs from 'fs';

import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { InfluencerCard } from '../components/card/InfluencerCard';
import { Category } from '../components/filters/Category';
import AutocompleteImpl from '../components/input/search/AutocompleteImpl';
import SearchLarge from '../components/input/search/SearchLarge';
import { Meta } from '../components/layout/Meta';
import { Section } from '../components/layout/Section';
import { CagaljsNavbarItems } from '../components/navigation/CagaljsNavbarItems';
import { Footer } from '../components/templates/Footer';
import { Layout } from '../components/templates/Layout';
import { Logo } from '../components/templates/Logo';
import { AppConfig } from '../utils/AppConfig';

type ISearchProps = any;

const Search = (props: ISearchProps) => (
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

			<Section className="pt-20 pb-32 md:px-6 px-2">
				<AutocompleteImpl>
					<SearchLarge />
				</AutocompleteImpl>
			</Section>
		</Background>
		<Section description="Search by category" className="py-6 px-3" margin="">
			<div className="custom_scrollbar flex flex-row gap-14 max-md:gap-10 flex-nowrap justify-center overflow-auto whitespace-nowrap overflow-y-hidden pt-12">
				{props.categories?.map((item: any) => (
					<Category {...item} key={item.key} />
				))}
			</div>
			<Link className="m-auto block w-fit mt-4" href="/">
				<Button>See all categories</Button>
			</Link>
		</Section>
		<Section
			description="Today's best picks"
			className="py-6 px-3"
			margin="mb-10"
		>
			<div className="flex flex-row gap-16 max-md:gap-10 flex-wrap justify-center">
				{props.influencers?.map((item: any) => (
					<InfluencerCard {...item} key={item.id} />
				))}
			</div>
			<Link className="m-auto block w-fit my-10" href="/">
				<Button>See more</Button>
			</Link>
		</Section>
		<Footer {...props.footer} />
	</Layout>
);

export default Search;

export async function getStaticProps() {
	/**
	 * TODO
	 * replace with headless CMS
	 */
	const res = fs.readFileSync('public/assets/i18n/search.json');
	const content = JSON.parse(res.toString());

	const footer = fs.readFileSync('public/assets/i18n/footer.json');
	const footerContent = JSON.parse(footer.toString());

	const data = fs.readFileSync('public/assets/data/creatorProfiles.json');
	const influencerProfiles = JSON.parse(data.toString());

	const nums = new Set();
	while (nums.size !== 4) {
		nums.add(Math.floor(Math.random() * 68));
	}

	const influencers = influencerProfiles.filter((el: any) => nums.has(el.id));

	return {
		props: {
			...content,
			footer: footerContent,
			influencers,
		},
		revalidate: 30,
	};
}
