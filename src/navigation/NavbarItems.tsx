import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
	logo: ReactNode;
	children: ReactNode;
};

const NavbarItems = (props: INavbarProps) => (
	<div className="flex flex-wrap justify-between items-center mx-auto">
		<div>
			<Link href="/" legacyBehavior>
				<a>{props.logo}</a>
			</Link>
		</div>

		<button
			data-collapse-toggle="navbar-default"
			type="button"
			className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span className="sr-only">Open main menu</span>
			<svg
				className="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clipRule="evenodd"
				></path>
			</svg>
		</button>

		<nav className="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul className="navbar flex items-center font-medium text-xl text-gray-800">
				{props.children}
			</ul>
		</nav>

		<style jsx>
			{`
				.navbar :global(li:not(:first-child)) {
					@apply mt-0;
				}

				.navbar :global(li:not(:last-child)) {
					@apply mr-5;
				}
			`}
		</style>
	</div>
);

export { NavbarItems };
