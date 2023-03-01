import { ReactNode, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import useComponentVisible from '../../hooks/useComponentVisible';
import useWindowSize from '../../hooks/useWindowSize';
import { getFirstWrapItemIndex } from '../../utils/wrapItems';

interface INavBarItem {
	key: number;
	text: string;
	link: string;
	active?: boolean;
}

interface ICagaljsNavbarItemsProps {
	logo: ReactNode;
	search?: ReactNode;
	navBarLinks: INavBarItem[];
}

const CagaljsNavbarItems = (props: ICagaljsNavbarItemsProps) => {
	const {
		ref,
		refButton,
		isComponentVisible: isDropdownVisible,
		setIsComponentVisible: setDropdown,
	} = useComponentVisible(false);

	const windowSize = useWindowSize();
	const prevWidnowWidthRef = useRef<number>(1);

	const [wrapIndex, setWrapIndex] = useState(0);

	useEffect(() => {
		if (prevWidnowWidthRef.current && windowSize.width) {
			if (prevWidnowWidthRef.current < windowSize.width) {
				// spread
			} else if (prevWidnowWidthRef.current > windowSize.width) {
				// shrink
			} else {
				// equal
			}
			prevWidnowWidthRef.current = windowSize.width;
		}
		setWrapIndex(getFirstWrapItemIndex('navBar', 'li'));
		console.log(getFirstWrapItemIndex('navBar', 'li'));
	}, [windowSize]);

	return (
		<>
			<div className="flex justify-between items-center md:px-6 px-2">
				<Link href="/" legacyBehavior>
					<a className="flex">{props.logo}</a>
				</Link>

				{props.search && <div>{props.search}</div>}

				<nav className="max-md:pr-12 relative">
					<ul
						id="navBar"
						className="flex items-center font-medium text-xl text-gray-800 dark:text-gray-400 flex-wrap max-md:justify-between gap-y-4 gap-5"
					>
						{props.navBarLinks?.map((item: any) =>
							item.active ? (
								<li
									key={item.key}
									className={`${
										item.key >= wrapIndex && 'hidden'
									} underline underline-offset-2 decoration-primary-500 text-primary-500 pointer-events-none`}
								>
									{item.text}
								</li>
							) : (
								<li
									key={item.key}
									className={`${
										item.key >= wrapIndex && 'hidden'
									} hover:text-primary-500`}
								>
									<Link href={item.link}>{item.text}</Link>
								</li>
							)
						)}
					</ul>
					<button
						ref={refButton}
						className={`${
							isDropdownVisible ? 'rotate-90' : 'rotate-0'
						} h-fit ${
							wrapIndex === props.navBarLinks.length && 'hidden'
						} absolute right-0 -top-1 items-center 
                        p-2 text-sm font-medium text-center text-gray-900 rounded-lg dark:text-gray-400
                        hover:bg-slate-100 focus:ring-4 dark:hover:bg-gray-800
                        focus:ring-gray-50 dark:focus:ring-gray-700
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
					} flex-col items-start gap-5 font-medium text-xl text-gray-800 dark:text-gray-400 dark:bg-gray-800 dark:outline-slate-600 [&>li]:pl-6 [&>li]:pr-10 [&>li]:w-full py-3 absolute right-0
                    bg-gray-100 outline outline-1 outline-slate-200
                    dropdown_menu z-20
                    `}
				>
					{props.navBarLinks?.map((item: any) =>
						item.active ? (
							<li
								key={item.key}
								className={`${
									item.key < wrapIndex && 'hidden'
								} underline underline-offset-2 decoration-primary-500 text-primary-500 pointer-events-none`}
							>
								{item.text}
							</li>
						) : (
							<li
								key={item.key}
								className={`${
									item.key < wrapIndex && 'hidden'
								} hover:text-primary-500`}
							>
								<Link href={item.link}>{item.text}</Link>
							</li>
						)
					)}

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
