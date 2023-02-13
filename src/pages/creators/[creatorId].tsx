import fs from 'fs';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Background } from '../../components/background/Background';
import { Button } from '../../components/button/Button';
import { CardCarousel } from '../../components/card/CardCarousel';
import { Add } from '../../components/icons/Add';
import { Clickable } from '../../components/icons/Clickable';
import { Message } from '../../components/icons/Message';
import { Share } from '../../components/icons/Share';
import CreatorProfileGraphs from '../../components/influencerProfile/graphs/CreatorProfileGraphs';
import AutocompleteImpl from '../../components/input/search/AutocompleteImpl';
import SearchSmall from '../../components/input/search/SearchSmall';
import { Meta } from '../../components/layout/Meta';
import { Section } from '../../components/layout/Section';
import { CagaljsNavbarItems } from '../../components/navigation/CagaljsNavbarItems';
import { Footer } from '../../components/templates/Footer';
import { Logo } from '../../components/templates/Logo';
import ThemeSwitch from '../../components/templates/ThemeSwitch';
import abbreviateNumber from '../../utils/abbreviateNumber';
import { AppConfig } from '../../utils/AppConfig';
import currencyFormatter from '../../utils/currencyFormatter';

const InstagramEmbeds = dynamic(
	() => import('../../components/influencerProfile/InstagramEmbed'),
	{
		ssr: false,
	}
);

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
	const data = fs.readFileSync('public/assets/data/creatorProfiles.json');
	const content = JSON.parse(data.toString());
	const paths = content.map((el: any) => ({ params: { creatorId: el.username } }));
	return {
		paths,
		fallback: false,
	};
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any) {
	/**
	 * TODO
	 * replace with headless CMS
	 */

	const { params } = context;
	const { creatorId } = params;
	const data = fs.readFileSync('public/assets/data/creatorProfiles.json');
	const content = JSON.parse(data.toString());
	const influencer = content.find((el: any) => el.username === creatorId);

	const footer = fs.readFileSync('public/assets/i18n/footer.json');
	const footerContent = JSON.parse(footer.toString());

	const navBarData = fs.readFileSync('public/assets/i18n/brandNavBar.json');
	const navBarLinks = JSON.parse(navBarData.toString());
	return {
		props: {
			influencerDetails: influencer,
			footer: footerContent,
			navBarLinks,
		},
	};
}
const Influencer = (props: any) => {
	const router = useRouter();

	return (
		<div className="antialiased text-gray-600">
			<Meta
				title={props.siteTitle ?? AppConfig.title}
				description={props.siteDescription ?? AppConfig.description}
			/>

			<Background>
				<Section className="py-6">
					<CagaljsNavbarItems
						logo={<Logo xl hideText />}
						search={
							<AutocompleteImpl>
								<SearchSmall />
							</AutocompleteImpl>
						}
						themeSwitch={<ThemeSwitch />}
						navBarLinks={props.navBarLinks}
					/>
				</Section>
			</Background>

			<div className="max-w-screen-lg mx-auto">
				<div className="mb-4 flex justify-end gap-4 m-2">
					<span className="bg-slate-50 p-2 rounded-lg">
						<Clickable scale hover>
							<Add />
							<span className="pl-2">Save</span>
						</Clickable>
					</span>

					<span className="bg-slate-50 p-2 rounded-lg">
						<Clickable scale hover>
							<Share />

							<span className="pl-2">Share</span>
						</Clickable>
					</span>
				</div>
				<div className="w-full h-64 md:h-96">
					<CardCarousel {...props.influencerDetails} />
				</div>
			</div>

			<Section className="pt-4 pb-6 px-3" margin="mb-10">
				<div className="flex flex-wrap md:gap-10 gap-6 justify-between">
					<div className="flex md:gap-10 gap-8 max-md:items-center">
						<div
							className="w-52 h-52 max-md:w-36 max-md:h-36 relative rounded-full
				                            overflow-hidden"
						>
							<Image
								src={`${router.basePath}${props.influencerDetails.profileImage}`}
								alt={props.influencerDetails.username}
								fill
								style={{
									objectFit: 'cover',
									position: 'absolute',
								}}
								sizes="(max-width: 208px) 40vw,
                                        (max-width: 144px) 30vw"
							/>
						</div>

						<span>
							<p className="text-slate-600 font-semibold text-2xl">
								@{props.influencerDetails.username}{' '}
							</p>
							<p>
								{props.influencerDetails.firstName}{' '}
								{props.influencerDetails.lastName}
							</p>

							<div className="pb-4">
								MARCH 😍 <br></br>Born in 🇻🇪🇻🇪🇻🇪 <br></br>{' '}
								youtu.be/sQ0uu8jYceQ
							</div>
							<Button>
								<Message />
								<span className="pl-2">Message</span>
							</Button>
						</span>
					</div>
					<div className="max-md:flex-1 flex flex-col gap-4 justify-between">
						<div className="text-center md:text-right">
							<p className="text-xs leading-3">Starting at</p>
							<p className="text-5xl font-bold text-gray-900">
								{`${currencyFormatter(
									Math.round(props.influencerDetails.startingPrice)
								)}`}
							</p>
						</div>
						<div className="flex gap-5 flex-1 justify-evenly items-center bg-brands-primary-200 p-2 px-8 rounded-lg">
							<div className="text-center">
								<p className="text-slate-50 text-2xl font-medium">
									{abbreviateNumber(
										props.influencerDetails.follower
									)}
								</p>
								<p className="text-slate-100 text-xs">Followers</p>
							</div>

							<div className="text-center">
								<p className="text-slate-100 text-3xl font-medium">
									{
										props.influencerDetails
											.engagmentRatioRatePercentage
									}
									%
								</p>
								<p className="text-slate-200 text-xs">
									Engagment ratio
								</p>
							</div>

							<div className="text-center">
								<p className="text-slate-50 text-2xl font-medium">
									{abbreviateNumber(
										props.influencerDetails.postNumber
									)}
								</p>
								<p className="text-slate-100 text-xs">Posts</p>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<Section description="" className="py-6 px-3" margin="mb-10">
				<CreatorProfileGraphs {...props.influencerDetails} />
			</Section>

			<Section className="py-6 px-3" margin="mb-10">
				<InstagramEmbeds {...props.influencerDetails} />
			</Section>
			<Footer {...props.footer} />
		</div>
	);
};
export default Influencer;
