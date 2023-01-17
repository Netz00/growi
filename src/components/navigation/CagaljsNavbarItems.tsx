import { ReactNode, useEffect } from 'react';

import Link from 'next/link';

import useComponentVisible from '../../hooks/useComponentVisible';
import useWindowSize from '../../hooks/useWindowSize';
import { detectWrapItems, getWrapItems } from '../../hooks/wrapItems';

type ICagaljsNavbarItemsProps = {
	logo: ReactNode;
	search?: ReactNode;
	children: ReactNode;
};

const CagaljsNavbarItems = (props: ICagaljsNavbarItemsProps) => {
	const {
		ref,
		refButton,
		isComponentVisible: isDropdownVisible,
		setIsComponentVisible: setDropdown,
	} = useComponentVisible(false);

	const windowSize = useWindowSize();

	useEffect(() => {
		const button = document.getElementById('dropdownMenuButton');
		// are there any?
		if (detectWrapItems('navBar', 'li')) {
			// add navbar button
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
	}, [windowSize]);

	return (
		<>
			<div className="flex justify-between items-center md:gap-8 gap-4 px-6">
				<div>
					<Link href="/" legacyBehavior>
						<a className="flex">{props.logo}</a>
					</Link>
				</div>
				{props.search && <div>{props.search}</div>}

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
                        hover:bg-slate-100 focus:ring-4
                        focus:ring-gray-50
                        duration-200`}
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

			<div className="relative">
				<ul
					ref={ref}
					id="dropdown"
					className={`w-fit ${
						isDropdownVisible ? 'flex' : 'hidden'
					} flex-col items-start gap-5 font-medium text-xl text-gray-800 pl-6 pr-10 py-3 absolute right-0
                    bg-gray-100 outline outline-1 outline-slate-200
                    dropdown_menu z-20
                    `}
				>
					{/** Wrapped items ... */}

					<style jsx>
						{`
							.dropdown_menu {
								animation: growDown 300ms ease-in-out forwards;
								transform-origin: top center;
							}

							@-moz-keyframes growDown {
								0% {
									transform: scaleY(0);
								}
								80% {
									transform: scaleY(1.1);
								}
								100% {
									transform: scaleY(1);
								}
							}
							@-webkit-keyframes growDown {
								0% {
									transform: scaleY(0);
								}
								80% {
									transform: scaleY(1.1);
								}
								100% {
									transform: scaleY(1);
								}
							}
							@-o-keyframes growDown {
								0% {
									transform: scaleY(0);
								}
								80% {
									transform: scaleY(1.1);
								}
								100% {
									transform: scaleY(1);
								}
							}
							@keyframes growDown {
								0% {
									transform: scaleY(0);
								}
								80% {
									transform: scaleY(1.1);
								}
								100% {
									transform: scaleY(1);
								}
							}
						`}
					</style>
				</ul>
			</div>
		</>
	);
};

export { CagaljsNavbarItems };
