import { ReactNode } from 'react';

enum ButtonStyle {
	CREATOR_PRIMARY,
	CREATOR_SECONDARY,
	BRAND_PRIMARY,
	BRAND_SECONDARY,
}

type IButtonProps = {
	xl?: boolean;
	children: ReactNode;
	style?: ButtonStyle;
};

const Button = (props: IButtonProps) => {
	return (
		<div
			className={`inline-block rounded-md text-center hover:opacity-60
            ${
				props.xl
					? 'font-extrabold text-xl py-4 px-6'
					: 'text-lg font-semibold py-2 px-4'
			}
                    text-white ${
						(props.style === ButtonStyle.CREATOR_PRIMARY &&
							'bg-creators-primary-100 dark:bg-gradient-instagram') ||
						(props.style === ButtonStyle.CREATOR_SECONDARY &&
							'bg-primary-500 dark:bg-dark-green') ||
						(props.style === ButtonStyle.BRAND_PRIMARY &&
							'bg-brands-primary-300 dark:bg-dark-green') ||
						(props.style === ButtonStyle.BRAND_SECONDARY &&
							'bg-primary-500 dark:bg-dark-green') ||
						'bg-primary-500 dark:bg-dark-green'
					}`}
		>
			{props.children}
		</div>
	);
};

export { Button, ButtonStyle };
