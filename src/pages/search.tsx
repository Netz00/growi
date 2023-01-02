import fs from 'fs';

import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { SearchBox } from '../input/SearchBox';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { CagaljsNavbarItems } from '../navigation/CagaljsNavbarItems';
import { Banner } from '../templates/Banner';
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

		<Banner
			{...props.banner}
			button={
				<Link href={props.banner?.button.link}>
					<Button>{props.banner?.button.text}</Button>
				</Link>
			}
		/>
		<Footer />
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

	return {
		props: {
			...content,
		},
	};
}
