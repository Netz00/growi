import fs from 'fs';

import Link from 'next/link';

import { Background } from '../components/background/Background';
import { InfluencerCard } from '../components/card/InfluencerCard';
import { Category } from '../components/filters/Category';
import { SearchBox } from '../components/input/SearchBox';
import { Meta } from '../components/layout/Meta';
import { Section } from '../components/layout/Section';
import { CagaljsNavbarItems } from '../components/navigation/CagaljsNavbarItems';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

type ISearchProps = any;

const Search = (props: ISearchProps) => (
	<div className="antialiased text-gray-600">
		<Meta title={AppConfig.title} description={AppConfig.description} />

		<Background color="bg-gray-100">
			<Section yPadding="py-6">
				<CagaljsNavbarItems logo={<Logo xl />}>
					{props.hero?.navBarLinks?.map((item: any) => (
						<li key={item.key}>
							<Link href={item.link}>{item.text}</Link>
						</li>
					))}
				</CagaljsNavbarItems>
			</Section>

			<Section yPadding="pt-20 pb-32">
				<SearchBox />
			</Section>
		</Background>
		<Section
			description="Search by category"
			yPadding="pt-6 pb-6"
			textBottomMargin="mb-0"
		>
			<div className="flex flex-row gap-10 flex-nowrap justify-center overflow-auto whitespace-nowrap overflow-y-hidden pt-12">
				{props.categories?.map((item: any) => (
					<Category {...item} key={item.key} />
				))}
			</div>
		</Section>
		<Section
			description="Todays' best picks"
			yPadding="pt-6 pb-6"
			textBottomMargin="mb-10"
		>
			<div className="flex flex-row gap-10 flex-wrap justify-center">
				{props.influencers?.map((item: any) => (
					<InfluencerCard {...item} key={item.key} />
				))}
			</div>
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
	const res = fs.readFileSync('public/assets/search.json');
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
