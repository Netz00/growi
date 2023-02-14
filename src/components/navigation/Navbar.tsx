import { ReactNode } from 'react';

import Link from 'next/link';

type ICagaljsNavbarItemsProps = {
	logo: ReactNode;
	children?: ReactNode;
};

const Navbar = (props: ICagaljsNavbarItemsProps) => {
	return (
		<>
			<div className="flex justify-between items-center md:px-6 px-2">
				<Link href="/" legacyBehavior>
					<a>{props.logo}</a>
				</Link>
				{props.children && (
					<ul className="flex items-center flex-nowrap max-md:justify-between gap-16 font-medium text-xl text-gray-800">
						{props.children}
					</ul>
				)}
			</div>
		</>
	);
};

export { Navbar };
