type IProfileStatsProps = {
	followersNumber: number;
	engagmentRatioPercentage: number;
};

const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

function abbreviateNumber(number: number) {
	// what tier? (determines SI symbol)
	// eslint-disable-next-line no-bitwise
	const tier = (Math.log10(Math.abs(number)) / 3) | 0;

	// if zero, we don't need a suffix
	if (tier === 0) return number;

	// get suffix and determine scale
	const suffix = SI_SYMBOL[tier];
	const scale = 10 ** (tier * 3);

	// scale the number
	const scaled = number / scale;

	// format number and add suffix
	return scaled.toFixed(1) + suffix;
}

const ProfileStats = (props: IProfileStatsProps) => {
	const followersNumber = abbreviateNumber(props.followersNumber);

	return (
		<div className="flex justify-evenly bg-brands-olive p-2 rounded-lg">
			<div className="text-center">
				<p className="text-slate-50 text-2xl font-medium">
					{followersNumber}
				</p>
				<p className="text-slate-100 text-xs">Followers</p>
			</div>

			<div className="text-center">
				<p className="text-slate-100 text-2xl font-medium">
					{props.engagmentRatioPercentage}%
				</p>
				<p className="text-slate-200 text-xs">Engagment</p>
			</div>
		</div>
	);
};

export { ProfileStats };
