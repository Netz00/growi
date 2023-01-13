type IStarProps = {
	index: number;
	fillPercentage: number;
};

const Star = (props: IStarProps) => (
	<svg
		aria-hidden="true"
		className="w-5 h-5 text-brands-orange"
		fill="currentColor"
		viewBox="0 0 20 19"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{`Star ${props.index}`}</title>

		{props.fillPercentage !== 100 ? (
			<>
				<defs>
					<linearGradient id={`grad${props.fillPercentage}`}>
						<stop
							offset={`${props.fillPercentage}%`}
							stopColor="currentColor"
						/>
						<stop
							offset={`${props.fillPercentage}%`}
							stopColor="transparent"
						/>
					</linearGradient>
				</defs>

				<path
					fill={`url(#grad${props.fillPercentage})`}
					className="stroke-current"
					d="M9.6001 0L11.8452 6.90983H19.1107L13.2328 11.1803L15.478 18.0902L9.6001 13.8197L3.72225 18.0902L5.96738 11.1803L0.0895329 6.90983H7.35496L9.6001 0Z"
				></path>
			</>
		) : (
			<path
				className="stroke-current"
				d="M9.6001 0L11.8452 6.90983H19.1107L13.2328 11.1803L15.478 18.0902L9.6001 13.8197L3.72225 18.0902L5.96738 11.1803L0.0895329 6.90983H7.35496L9.6001 0Z"
			></path>
		)}
	</svg>
);

export { Star };
