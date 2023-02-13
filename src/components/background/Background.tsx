import { ReactNode } from 'react';

type IBackgroundProps = {
	children: ReactNode;
};

const Background = (props: IBackgroundProps) => (
	<div className="bg-gray-100 dark:bg-darkMode-primary-dark">{props.children}</div>
);

export { Background };
