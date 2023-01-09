import { Star } from './Star';

type IStarsProps = {
	rating: number;
	reviewsNumber: number;
};

const Rating = (props: IStarsProps) => {
	let { rating } = props;

	const stars = [];
	do {
		const fillPercentage =
			rating < 1 ? Math.round((Math.abs(rating) + Number.EPSILON) * 100) : 100;
		const key = Math.floor(rating + 0.5);
		stars.push({
			key,
			fillPercentage,
			index: key,
		});
		rating -= 1;
	} while (rating > 0);

	return (
		<div className="flex items-center">
			{stars.map((el) => (
				<Star {...el} key={el.key} />
			))}

			<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
				{props.rating}
			</span>
			<span className="text-xs font-semibold py-0.5 rounded ml-3">
				{`(${props.reviewsNumber})`}
			</span>
		</div>
	);
};

export { Rating };
