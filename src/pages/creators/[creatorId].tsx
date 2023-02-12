import fs from 'fs';

import { useState, useEffect } from 'react';

import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	CategoryScale,
	ArcElement,
	Filler,
	BarElement,
	ChartOptions,
	RadialLinearScale,
	ChartData,
} from 'chart.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import { InstagramEmbed } from 'react-social-media-embed';

import { Background } from '../../components/background/Background';
import { Button } from '../../components/button/Button';
import { CardCarousel } from '../../components/card/CardCarousel';
import { Add } from '../../components/icons/Add';
import { Clickable } from '../../components/icons/Clickable';
import { Message } from '../../components/icons/Message';
import { Share } from '../../components/icons/Share';
import AutocompleteImpl from '../../components/input/search/AutocompleteImpl';
import SearchSmall from '../../components/input/search/SearchSmall';
import { Meta } from '../../components/layout/Meta';
import { Section } from '../../components/layout/Section';
import { CagaljsNavbarItems } from '../../components/navigation/CagaljsNavbarItems';
import { Footer } from '../../components/templates/Footer';
import { Logo } from '../../components/templates/Logo';
import ThemeSwitch from '../../components/templates/ThemeSwitch';
import abbreviateNumber from '../../hooks/abbreviateNumber';
import currencyFormatter from '../../hooks/currencyFormatter';
import { AppConfig } from '../../utils/AppConfig';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	BarElement,
	RadialLinearScale
);
ChartJS.defaults.font.family = 'system-ui';
ChartJS.defaults.font.weight = '300';
ChartJS.defaults.plugins.legend.labels.color = '#555';

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

	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true);
		}
	}, []);

	// Bar graph
	const monthlyStats: ChartData = {
		labels: [...props.influencerDetails.monthlyStats.map((el: any) => el.month)],
		datasets: [
			{
				label: 'Followers',
				yAxisID: 'followers',

				borderRadius: 20,
				data: [
					...props.influencerDetails.monthlyStats.map(
						(el: any) => el.followerNumber
					),
				],
				backgroundColor: ['#31C0A9'],
			},
			{
				label: 'Engagment ratio',
				yAxisID: 'engagment',
				borderRadius: 20,
				data: [
					...props.influencerDetails.monthlyStats.map(
						(el: any) => el.engagment
					),
				],
				backgroundColor: ['#CB5150'],
			},
		],
	};

	const optionsBar: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					padding: 12,
					font: { size: 14 },
				},
				title: {
					text: 'Followers and engagment',
					display: true,
					color: '#555',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
		scales: {
			x: {
				ticks: {
					font: {
						size: 14,
					},
				},
			},
			followers: {
				type: 'linear' as any,
				display: true,
				position: 'left',
				// grid line settings
				grid: {
					drawOnChartArea: false, // only want the grid lines for one axis to show up
				},
				ticks: {
					callback(value: number | string): string {
						return abbreviateNumber(
							parseInt(value.toString(), 10)
						).toString();
					},
					backdropPadding: {
						top: 20,
					},
					font: {
						size: 14,
						lineHeight: 2,
					},
				},
			},
			engagment: {
				type: 'linear' as any,
				display: true,
				position: 'right',
				ticks: {
					callback(value: number | string): string {
						return `${value}%`;
					},
					font: {
						size: 14,
					},
				},
			},
		},
	};
	// Radar
	const followerLocation = {
		labels: props.influencerDetails.followerLocationSplit.city,
		datasets: props.influencerDetails.followerLocationSplit.year.map(
			(year: any) => ({
				label: year.year,
				fill: true,
				backgroundColor: year.year % 2 === 0 ? '#CB51503b' : '#31c0a936',
				borderColor: year.year % 2 === 0 ? '#d97684d9' : '#31c0a9ba',
				pointBorderColor: '#fff',
				pointBackgroundColor: year.year % 2 === 0 ? '#CB5150' : '#31C0A9',
				data: year.distribution,
			})
		),
	};

	const optionsRadar: ChartOptions = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					font: { size: 14 },
				},
				title: {
					text: 'Followers cities distribution',
					display: true,
					color: '#555',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
	};

	// Pie
	const followerGenderSplit = {
		backgroundColor: ['#31C0A9', '#cbd5e0', '#CB5150'],
		labels: [
			...Object.getOwnPropertyNames(
				props.influencerDetails.followerGenderSplit
			),
		],
		datasets: [
			{
				label: 'Sex split',
				data: [
					...Object.entries(
						props.influencerDetails.followerGenderSplit
					).map(([, value]) => value),
				],
				backgroundColor: ['#31C0A9', '#cbd5e0', '#CB5150'],
				hoverOffset: 4,
			},
		],
	};

	const optionsPie = {
		responsive: true,
		maintainAspectRatio: false,

		plugins: {
			legend: {
				position: 'left',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					font: { size: 14 },
				},
				title: {
					text: ['Followers'],
					display: true,
					color: '#555',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
		elements: { arc: { borderWidth: 3 } },
		cutout: 30,
	};

	// Pie
	const followerRealSplit = {
		backgroundColor: ['#31C0A9', '#CB5150'],
		labels: [
			...Object.getOwnPropertyNames(props.influencerDetails.followerRealSplit),
		],
		datasets: [
			{
				label: 'Fake followers split',
				data: [
					...Object.entries(props.influencerDetails.followerRealSplit).map(
						([, value]) => value
					),
				],
				backgroundColor: ['#31C0A9', '#CB5150'],
				hoverOffset: 4,
			},
		],
	};

	const optionsPie2 = {
		responsive: true,
		maintainAspectRatio: false,

		plugins: {
			legend: {
				position: 'left',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
					font: { size: 14 },
				},
				title: {
					text: ['Followers'],
					display: true,
					color: '#555',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
		elements: { arc: { borderWidth: 3 } },
		cutout: 30,
	};

	return (
		<div className="antialiased text-gray-600">
			<Meta
				title={props.siteTitle ?? AppConfig.title}
				description={props.siteDescription ?? AppConfig.description}
			/>

			<Background color="bg-gray-100">
				<Section yPadding="py-6" xPadding="px-0">
					<CagaljsNavbarItems
						logo={<Logo xl hideText />}
						search={
							<AutocompleteImpl>
								<SearchSmall />
							</AutocompleteImpl>
						}
						themeSwitch={<ThemeSwitch />}
					>
						{props.navBarLinks?.map((item: any) =>
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

			<Section yPadding="pt-4 pb-6" textBottomMargin="mb-10">
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

			<Section description="" yPadding="pt-6 pb-6" textBottomMargin="mb-10">
				<div className="text-3xl pb-4">Audience</div>
				<div className="bg-slate-50 rounded-lg p-5">
					<div className="w-full h-80">
						<Bar
							data={monthlyStats as any}
							options={optionsBar as any}
						/>
					</div>
					<div className="flex flex-wrap justify-between">
						<div className="relative md:w-1/2 w-full">
							<div className="relative p-5 h-1/2">
								<Doughnut
									data={followerGenderSplit}
									options={optionsPie as any}
								/>
							</div>
							<div className="relative p-5 h-1/2">
								<Doughnut
									data={followerRealSplit}
									options={optionsPie2 as any}
								/>
							</div>
						</div>

						<div className="relative p-5 md:w-1/2 w-full">
							<Radar
								data={followerLocation}
								options={optionsRadar as any}
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section yPadding="pt-6 pb-6" textBottomMargin="mb-10">
				<div className="text-3xl pb-4">Featured posts</div>
				<div className="flex flex-wrap justify-around">
					{hasWindow &&
						props.influencerDetails.postLast.map(
							(postUrl: string, key: number) => (
								<InstagramEmbed
									key={props.influencerDetails.username + key}
									url={postUrl}
									width="fit"
									captioned
								/>
							)
						)}
				</div>
				<Link
					className="m-auto block w-fit my-10"
					href={`https://www.instagram.com/${props.influencerDetails.username}/`}
				>
					<Button>See more</Button>
				</Link>
			</Section>
			<Footer {...props.footer} />
		</div>
	);
};
export default Influencer;
