import useComponentVisible from '../../hooks/useComponentVisible';

type IDropdownProps = {
	items: String[];
};

const Dropdown = (props: IDropdownProps) => {
	const {
		ref,
		refButton,
		isComponentVisible: isDropdownVisible,
		setIsComponentVisible: setDropdown,
	} = useComponentVisible(false);

	return (
		<>
			<button
				ref={refButton}
				onClick={() => setDropdown(!isDropdownVisible)}
				id="dropdownNavbarButton"
				className="flex items-center justify-between
                w-full py-2 pl-3 pr-4
                
                md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-primary-500
                dark:border-gray-700 hover:text-primary-500"
			>
				English
				<svg
					className="w-4 h-4 ml-1"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
			<div
				ref={ref}
				id="dropdownNavbar"
				className={`z-10 ${
					!isDropdownVisible && 'hidden'
				} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700 dark:divide-gray-600 dropdown_menu`}
			>
				<ul className="py-2 text-gray-700 dark:text-gray-400">
					{props.items?.map((item, index) => (
						<li key={index}>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								{item}
							</a>
						</li>
					))}
				</ul>

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
			</div>
		</>
	);
};

export { Dropdown };
