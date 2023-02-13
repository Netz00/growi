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
			className={`inline-block rounded-md text-center 
            ${
				props.xl
					? 'font-extrabold text-xl py-4 px-6'
					: 'text-lg font-semibold py-2 px-4'
			}
                    text-white ${
						(props.style === ButtonStyle.CREATOR_PRIMARY &&
							'bg-creators-primary-100 hover:bg-creators-primary-200 dark:bg-darkMode-cta2-100 dark:hover:bg-darkMode-cta2-200') ||
						(props.style === ButtonStyle.CREATOR_SECONDARY &&
							'bg-primary-500 hover:bg-primary-600 dark:bg-darkMode-cta1-100 dark:hover:bg-darkMode-cta1-200') ||
						(props.style === ButtonStyle.BRAND_PRIMARY &&
							'bg-brands-primary-300 hover:bg-brands-primary-400 dark:bg-darkMode-cta1-100 dark:hover:bg-darkMode-cta1-200') ||
						(props.style === ButtonStyle.BRAND_SECONDARY &&
							'bg-primary-500 hover:bg-primary-600 dark:bg-darkMode-cta1-100 dark:hover:bg-darkMode-cta1-200') ||
						'bg-primary-500 hover:bg-primary-600 dark:bg-darkMode-cta1-100 dark:hover:bg-darkMode-cta1-200'
					}`}
		>
			{props.children}
		</div>
	);
};

export { Button, ButtonStyle };
