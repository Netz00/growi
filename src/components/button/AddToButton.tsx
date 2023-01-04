type IAddToButtonProps = {
	onClick: Function;
};

const AddToButton = (props: IAddToButtonProps) => (
	<span
		className="text-black px-5 py-2.5
                                    hover:text-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-300 
                                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
                                   transition ease-in-out delay-150 hover:transition-transform hover:scale-125 hover:cursor-pointer"
		onClick={() => props.onClick()}
	>
		<svg
			width="41"
			height="25"
			viewBox="0 0 41 25"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				x1="4"
				y1="6"
				x2="23"
				y2="6"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<line
				x1="20"
				y1="12.5"
				x2="37"
				y2="12.5"
				stroke="currentColor"
				strokeWidth="3"
			/>
			<line
				x1="28.5"
				y1="5"
				x2="28.5"
				y2="21"
				stroke="currentColor"
				strokeWidth="3"
			/>
			<line
				x1="4"
				y1="12"
				x2="16"
				y2="12"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<line
				x1="4"
				y1="18"
				x2="16"
				y2="18"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</svg>
	</span>
);

export { AddToButton };
