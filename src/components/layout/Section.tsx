import { ReactNode } from 'react';

type ISectionProps = {
	title?: string;
	description?: string;
	yPadding?: string;
	xPadding?: string;
	bPadding?: string;
	textBottomMargin?: string;
	children: ReactNode;
};

const Section = (props: ISectionProps) => (
	<div
		className={`max-w-screen-lg mx-auto
        ${props.xPadding ?? 'px-3'}
        ${props.yPadding ? props.yPadding : 'py-16'}
        ${props.bPadding ?? ''}`}
	>
		{(props.title || props.description) && (
			<div
				className={`${
					props.textBottomMargin ? props.textBottomMargin : 'mb-12'
				} text-center px-3`}
			>
				{props.title && (
					<h2 className="text-4xl text-gray-900 font-bold">
						{props.title}
					</h2>
				)}
				{props.description && (
					<div className="mt-4 text-xl md:px-20">{props.description}</div>
				)}
			</div>
		)}

		{props.children}
	</div>
);

export { Section };
