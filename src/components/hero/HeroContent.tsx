import { ReactNode } from 'react';

type IHeroOneButtonProps = {
	title: ReactNode;
	description: string;
	buttons: ReactNode;
};

const HeroContent = (props: IHeroOneButtonProps) => (
	<header className="text-center">
		<h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero dark:text-darkMode-secondary-dark">
			{props.title}
		</h1>
		<div className="text-2xl m-8 md:mb-16">{props.description}</div>
		<div className="inline-flex flex-wrap justify-center gap-6">
			{props.buttons}
		</div>
	</header>
);

export { HeroContent };
