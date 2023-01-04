import { ReactNode } from 'react';

type IClickableProps = {
	children: ReactNode;
	onClick?: Function;
	scale?: boolean;
	hover?: boolean;
};

const Clickable = (props: IClickableProps) => (
	<span
		className={`text-black 
                                    focus:ring-4 focus:outline-none focus:ring-primary-300 
                                   dark:bg-blue-600  dark:focus:ring-blue-800
                                   ${
										props.hover &&
										'hover:text-primary-400 dark:hover:bg-blue-700'
									}
                                   ${
										props.scale &&
										'transition ease-in-out delay-150 hover:transition-transform hover:scale-125'
									} hover:cursor-pointer`}
		onClick={() => props.onClick && props.onClick()}
	>
		{props.children}
	</span>
);

export { Clickable };