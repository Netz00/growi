import { ReactNode } from 'react';

type IClickableProps = {
	children: ReactNode;
	onClick?: Function;
	scale?: boolean;
	hover?: boolean;
	disabled?: boolean;
};

const Clickable = (props: IClickableProps) => (
	<span
		className={`text-black dark:text-gray-400
                                    focus:ring-4 focus:outline-none focus:ring-primary-300 
                                   ${
										props.hover &&
										!props.disabled &&
										'hover:text-primary-500'
									}
                                   ${
										props.scale &&
										!props.disabled &&
										'transition ease-in-out delay-150 hover:transition-transform hover:scale-125'
									} ${!props.disabled && 'hover:cursor-pointer'}`}
		onClick={() => props.onClick && props.onClick()}
	>
		{props.children}
	</span>
);

export { Clickable };
