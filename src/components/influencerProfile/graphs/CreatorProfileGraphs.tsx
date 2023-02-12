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
import { Bar, Doughnut, Radar } from 'react-chartjs-2';

import abbreviateNumber from '../../../hooks/abbreviateNumber';

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

const CreatorProfileGraphs = (props: any) => {
	// Bar graph
	const monthlyStats: ChartData = {
		labels: [...props.monthlyStats.map((el: any) => el.month)],
		datasets: [
			{
				label: 'Followers',
				yAxisID: 'followers',

				borderRadius: 20,
				data: [...props.monthlyStats.map((el: any) => el.followerNumber)],
				backgroundColor: ['#31C0A9'],
			},
			{
				label: 'Engagment ratio',
				yAxisID: 'engagment',
				borderRadius: 20,
				data: [...props.monthlyStats.map((el: any) => el.engagment)],
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
		labels: props.followerLocationSplit.city,
		datasets: props.followerLocationSplit.year.map((year: any) => ({
			label: year.year,
			fill: true,
			backgroundColor: year.year % 2 === 0 ? '#CB51503b' : '#31c0a936',
			borderColor: year.year % 2 === 0 ? '#d97684d9' : '#31c0a9ba',
			pointBorderColor: '#fff',
			pointBackgroundColor: year.year % 2 === 0 ? '#CB5150' : '#31C0A9',
			data: year.distribution,
		})),
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
		labels: [...Object.getOwnPropertyNames(props.followerGenderSplit)],
		datasets: [
			{
				label: 'Sex split',
				data: [
					...Object.entries(props.followerGenderSplit).map(
						([, value]) => value
					),
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
		labels: [...Object.getOwnPropertyNames(props.followerRealSplit)],
		datasets: [
			{
				label: 'Fake followers split',
				data: [
					...Object.entries(props.followerRealSplit).map(
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
		<>
			<div className="text-3xl pb-4">Audience</div>
			<div className="bg-slate-50 rounded-lg p-5">
				<div className="w-full h-80">
					<Bar data={monthlyStats as any} options={optionsBar as any} />
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
		</>
	);
};
export default CreatorProfileGraphs;
