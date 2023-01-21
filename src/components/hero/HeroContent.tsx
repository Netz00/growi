import { ReactNode } from 'react';

type IHeroOneButtonProps = {
	title: ReactNode;
	description: string;
	buttons: ReactNode;
};

const HeroContent = (props: IHeroOneButtonProps) => (
	<header className="max-md:text-center md:pl-5">
		<h1 className="text-5xl max-md:text-4xl text-gray-900 font-bold whitespace-pre-line leading-hero dark:text-darkMode-secondary-dark">
			{props.title}
		</h1>
		<div className="text-2xl m-8 md:ml-0 md:mb-16">{props.description}</div>
		<div className="inline-flex flex-wrap justify-center gap-6">
			{props.buttons}
		</div>
	</header>
);

export { HeroContent };
