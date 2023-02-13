import { ReactNode } from 'react';

interface SectionProps {
	title?: string;
	description?: string;
	className?: string;
	margin?: string;
	children: ReactNode;
}

const Section = ({
	title,
	description,
	className = 'py-16 px-3',
	margin = 'mb-12',
	children,
}: SectionProps) => {
	return (
		<div className={`max-w-screen-lg mx-auto ${className}`}>
			{(title || description) && (
				<div className={`${margin} text-center px-3`}>
					{title && (
						<h2 className="text-4xl text-gray-900 font-bold dark:text-gray-400">
							{title}
						</h2>
					)}
					{description && (
						<div className="mt-4 text-xl md:px-20 dark:text-gray-500">
							{description}
						</div>
					)}
				</div>
			)}
			{children}
		</div>
	);
};

export { Section };
