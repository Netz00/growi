import { ReactNode, useEffect } from 'react';

import Link from 'next/link';

import useComponentVisible from '../../hooks/useComponentVisible';
import { detectWrapItems, getWrapItems } from '../../hooks/wrapItems';

type ICagaljsNavbarItemsProps = {
	logo: ReactNode;
	children: ReactNode;
};

const CagaljsNavbarItems = (props: ICagaljsNavbarItemsProps) => {
	const {
		ref,
		refButton,
		isComponentVisible: isDropdownVisible,
		setIsComponentVisible: setDropdown,
	} = useComponentVisible(false);

	useEffect(() => {
		// are there any?
		if (detectWrapItems('navBar', 'li')) {
			// add navbar button
			const button = document.getElementById('dropdownMenuButton');

			if (button !== null) button.style.display = 'block';

			// recalculate again because button was added
			setTimeout(() => {
				const fragment = getWrapItems('navBar', 'li');
				// Append fragment to desired element:
				document.getElementById('dropdown')!.appendChild(fragment);
			}, 0);

			// recalculate again because button was added
			setTimeout(() => {
				const fragment = getWrapItems('navBar', 'li');
				// Append fragment to desired element:
				document.getElementById('dropdown')!.appendChild(fragment);
			}, 1);
		}
	}, []);

	return (
		<>
			<div className="flex justify-between items-center gap-8">
				<div>
					<Link href="/" legacyBehavior>
						<a>{props.logo}</a>
					</Link>
				</div>
				<nav className="flex gap-4">
					<ul
						id="navBar"
						className="flex items-center font-medium text-xl text-gray-800 flex-wrap max-md:justify-between gap-y-4 gap-5"
					>
						{props.children}
					</ul>
					<button
						ref={refButton}
						id="dropdownMenuButton"
						data-dropdown-toggle="dropdownDotsHorizontal"
						className={`${
							isDropdownVisible ? 'rotate-90' : 'rotate-0'
						} h-fit hidden items-center 
                        p-2 text-sm font-medium text-center text-gray-900 rounded-lg 
                        hover:bg-gray-100 focus:ring-4
                        focus:ring-gray-50
                        hover:rotate-90 duration-200`}
						type="button"
						onClick={() => setDropdown(!isDropdownVisible)}
					>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
						</svg>
					</button>
				</nav>
			</div>

			<div className="ml-auto w-fit">
				<ul
					ref={ref}
					id="dropdown"
					className={`ml-auto w-fit ${
						isDropdownVisible ? 'flex' : 'hidden'
					} flex-col items-end gap-5 font-medium text-xl text-gray-800`}
				></ul>
			</div>
		</>
	);
};

export { CagaljsNavbarItems };
