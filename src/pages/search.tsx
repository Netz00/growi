import fs from 'fs';

import Link from 'next/link';

import { Background } from '../components/background/Background';
import { Button } from '../components/button/Button';
import { InfluencerCard } from '../components/card/InfluencerCard';
import { Category } from '../components/filters/Category';
import Autocomplete from '../components/input/Autocomplete';
import { Meta } from '../components/layout/Meta';
import { Section } from '../components/layout/Section';
import { CagaljsNavbarItems } from '../components/navigation/CagaljsNavbarItems';
import { Footer } from '../components/templates/Footer';
import { Logo } from '../components/templates/Logo';
import { AppConfig } from '../utils/AppConfig';

type ISearchProps = any;

const Search = (props: ISearchProps) => (
	<div className="antialiased text-gray-600">
		<Meta
			title={props.siteTitle ?? AppConfig.title}
			description={props.siteDescription ?? AppConfig.description}
		/>

		<Background color="bg-gray-100">
			<Section yPadding="py-6" xPadding="px-0">
				<CagaljsNavbarItems logo={<Logo xl />}>
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
				</CagaljsNavbarItems>
			</Section>

			<Section yPadding="pt-20 pb-32">
				<Autocomplete />
			</Section>
		</Background>
		<Section
			description="Search by category"
			yPadding="pt-6 pb-6"
			textBottomMargin="mb-0"
		>
			<div className="flex flex-row gap-14 max-md:gap-10 flex-nowrap justify-center overflow-auto whitespace-nowrap overflow-y-hidden pt-12">
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
			yPadding="pt-6 pb-6"
			textBottomMargin="mb-10"
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
	</div>
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
