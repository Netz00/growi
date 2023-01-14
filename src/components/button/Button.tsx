type IButtonProps = {
	xl?: boolean;
	children: string;
	color?: string;
};

const Button = (props: IButtonProps) => {
	return (
		<div
			className={`inline-block rounded-md text-center 
            ${
				props.xl
					? 'font-extrabold text-xl py-4 px-6'
					: 'text-lg font-semibold py-2 px-4'
			}
                    text-white ${
						props.color ?? 'bg-primary-500 hover:bg-primary-600'
					}`}
		>
			{props.children}
		</div>
	);
};

export { Button };
