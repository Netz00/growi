import fs from 'fs';

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
} from 'chart.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import { InstagramEmbed } from 'react-social-media-embed';

import { Background } from '../../components/background/Background';
import { Button } from '../../components/button/Button';
import { Add } from '../../components/icons/Add';
import { Clickable } from '../../components/icons/Clickable';
import { Export } from '../../components/icons/Export';
import { Message } from '../../components/icons/Message';
import AutocompleteSmall from '../../components/input/AutocompleteSmall';
import { Meta } from '../../components/layout/Meta';
import { Section } from '../../components/layout/Section';
import { CagaljsNavbarItems } from '../../components/navigation/CagaljsNavbarItems';
import { Footer } from '../../components/templates/Footer';
import { Logo } from '../../components/templates/Logo';
import abbreviateNumber from '../../hooks/abbreviateNumber';
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
	// Pie
	const followerGenderSplit = {
		backgroundColor: ['#3333', '#1633', '#3193'],
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
				backgroundColor: ['#3333', '#1633', '#3193'],
				hoverOffset: 4,
			},
		],
	};

	const optionsPie = {
		responsive: true,
		maintainAspectRatio: false,

		plugins: {
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				},
				title: {
					text: 'Distribution in % of audience by sex',
					display: true,
					color: '#000',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
		elements: { arc: { borderWidth: 3 } },
		cutout: 30,
	};
	// Bar graph
	const monthlyStats = {
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
				backgroundColor: ['#3333'],
				barThickeness: 10,
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
				backgroundColor: ['#3193'],
				barThickeness: 10,
			},
		],
	};

	const optionsBar: ChartOptions = {
		responsive: true,
		maintainAspectRatio: false,

		layout: {
			padding: 20,
		},
		plugins: {
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				},
				title: {
					text: 'Followers and engagment ratio report',
					display: true,
					color: '#000',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
		scales: {
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
				backgroundColor:
					year.year % 2 === 0
						? 'rgba(179,181,198,0.2)'
						: 'rgba(255,99,132,0.2)',
				borderColor:
					year.year % 2 === 0
						? 'rgba(179,181,198,1)'
						: 'rgba(255,99,132,1)',
				pointBorderColor: '#fff',
				pointBackgroundColor:
					year.year % 2 === 0
						? 'rgba(179,181,198,1)'
						: 'rgba(255, 99, 132, 1)',
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
				},
				title: {
					text: 'Distribution in % of influencer audience',
					display: true,
					color: '#000',
					font: { size: 16 },
					position: 'start',
				},
			},
		},
	};
	// Pie
	const followerRealSplit = {
		backgroundColor: ['#1633', '#3193'],
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
				backgroundColor: ['#1633', '#3193'],
				hoverOffset: 4,
			},
		],
	};

	const optionsPie2 = {
		responsive: true,
		maintainAspectRatio: false,

		plugins: {
			legend: {
				position: 'top',
				align: 'start',
				labels: {
					usePointStyle: true,
					pointStyle: 'circle',
				},
				title: {
					text: 'Distribution of audience by fake followers',
					display: true,
					color: '#000',
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
						search={<AutocompleteSmall />}
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

			<Section yPadding="pt-10 pb-6" textBottomMargin="mb-10">
				<div className="flex flex-wrap justify-between">
					<a className="m-2">
						<div
							className="w-56 h-56 max-md:w-36 max-md:h-36 relative rounded-full
				                            overflow-hidden"
						>
							<Image
								src={`${router.basePath}${props.influencerDetails.profileImage}`}
								alt={props.influencerDetails.profileImageAlt}
								fill
								style={{
									objectFit: 'cover',
									position: 'absolute',
								}}
								sizes="(max-width: 113px) 30vw,
                                            (max-width: 200px) 16vw,
                                            10vw"
							/>
						</div>
					</a>
					<span className="my-2">
						<p className="text-slate-600 font-semibold text-2xl">
							@{props.influencerDetails.username}{' '}
						</p>
						<p>
							{props.influencerDetails.firstName}{' '}
							{props.influencerDetails.lastName}
						</p>
						<div className="text-left py-6">
							<p className="text-xs leading-3">Starting at</p>
							<p className="text-2xl font-bold text-gray-900">
								{`$${Math.round(
									props.influencerDetails.startingPrice
								)}`}
							</p>
						</div>
						<Button>
							<Message />
							<span className="pl-2">Message</span>
						</Button>
					</span>

					<div className="flex flex-col justify-evenly bg-brands-primary-200 p-2 px-8 rounded-lg my-2">
						<div className="text-center">
							<p className="text-slate-50 text-2xl font-medium">
								{abbreviateNumber(props.influencerDetails.follower)}
							</p>
							<p className="text-slate-100 text-xs">Followers</p>
						</div>

						<div className="text-center">
							<p className="text-slate-100 text-2xl font-medium">
								{
									props.influencerDetails
										.engagmentRatioRatePercentage
								}
								%
							</p>
							<p className="text-slate-200 text-xs">Engagment ratio</p>
						</div>

						<div className="text-center">
							<p className="text-slate-50 text-2xl font-medium">
								{abbreviateNumber(
									props.influencerDetails.postNumber
								)}
							</p>
							<p className="text-slate-100 text-xs">Followers</p>
						</div>
					</div>

					<span className="rounded-lg my-2">
						<div className="bg-slate-50 p-2 rounded-lg mb-5">
							<Clickable scale hover>
								<Add />
								<span className="pl-2">Save</span>
							</Clickable>
						</div>

						<div className="bg-slate-50 p-2 rounded-lg">
							<Clickable scale hover>
								<Export />

								<span>Export PDF</span>
							</Clickable>
						</div>
					</span>
				</div>
			</Section>

			<Section description="Bio" yPadding="pt-6 pb-6" textBottomMargin="mb-10">
				{props.influencerDetails.description}
			</Section>

			<Section
				description="Audience"
				yPadding="pt-6 pb-6"
				textBottomMargin="mb-10"
			>
				<div className="bg-slate-50 rounded-lg">
					<div className="w-full h-72">
						<Bar data={monthlyStats} options={optionsBar as any} />
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

			<Section
				description="Featured posts"
				yPadding="pt-6 pb-6"
				textBottomMargin="mb-10"
			>
				<div className="flex flex-wrap justify-around">
					{props.influencerDetails.postLast.map(
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
