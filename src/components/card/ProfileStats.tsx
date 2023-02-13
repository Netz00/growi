import abbreviateNumber from '../../utils/abbreviateNumber';

type IProfileStatsProps = {
	follower: number;
	engagmentRatioRatePercentage: number;
};

const ProfileStats = (props: IProfileStatsProps) => {
	const followersNumber = abbreviateNumber(props.follower);

	return (
		<div className="flex justify-evenly bg-brands-primary-200 p-2 rounded-lg">
			<div className="text-center">
				<p className="text-slate-50 text-2xl font-medium">
					{followersNumber}
				</p>
				<p className="text-slate-100 text-xs">Followers</p>
			</div>

			<div className="text-center">
				<p className="text-slate-100 text-2xl font-medium">
					{props.engagmentRatioRatePercentage}%
				</p>
				<p className="text-slate-200 text-xs">Engagment</p>
			</div>
		</div>
	);
};

export { ProfileStats };
