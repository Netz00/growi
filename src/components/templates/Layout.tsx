import { ReactNode } from 'react';

type IBannerProps = {
	children: ReactNode;
};

const Layout = ({ children }: IBannerProps) => (
	<div className="antialiased text-gray-600 dark:bg-dark-secondary">
		{children}
	</div>
);

export { Layout };
