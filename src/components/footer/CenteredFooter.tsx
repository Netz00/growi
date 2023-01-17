import { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';

type ICenteredFooterProps = {
	logo: ReactNode;
	iconList: ReactNode;
	children: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
	<div className="text-center">
		{props.logo}

		<nav className="text-start navbar mt-5 flex md:gap-16 flex-row justify-center text-xl text-gray-800">
			{props.children}
		</nav>

		<div className="mt-8 flex justify-center">
			<FooterIconList>{props.iconList}</FooterIconList>
		</div>

		<div className="mt-8 text-sm">
			<FooterCopyright />
		</div>

		<style jsx>
			{`
				.navbar :global(li) {
					@apply mx-4;
				}
				.navbar :global(li:first-child) {
					@apply font-medium;
				}
			`}
		</style>
	</div>
);

export { CenteredFooter };
