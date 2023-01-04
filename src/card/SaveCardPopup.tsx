import { useRef } from 'react';

import useOutsideAlerter from '../hooks/useOutsideAlerter';

type ISaveCardPopupProps = {
	id: string;
	savePopup: boolean;
	setSavePopup: Function;
};

// TODO pressing + button while settingas are active, mousedown and onClick event conflict, select card div child elements and stop propagation for each

const SaveCardPopup = (props: ISaveCardPopupProps) => {
	const lists = ['Cosmetics', 'Sport', 'Nike'];

	const settingsRef = useRef(null);
	useOutsideAlerter(() => props.setSavePopup(false), props.savePopup, settingsRef);
	return (
		<div
			ref={settingsRef}
			className={`${
				!props.savePopup && 'hidden'
			} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            h-fit w-fit bg-white z-10
                            border-solid border border-black rounded-lg`}
		>
			<div className="flex flex-col gap-3 p-5">
				<div className="flex flex-row justify-between align-middle">
					<p>Save to ...</p>{' '}
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						className="w-6 h-6"
					>
						<g>
							<path d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"></path>
						</g>
					</svg>
				</div>
				<div className="flex flex-col gap-5 my-2">
					{lists.map((list, key) => (
						<div key={key} className="flex items-center gap-6">
							<input
								id={`checkbox-${key}-${props.id}`}
								type="checkbox"
								value=""
								className="w-5 h-5 accent-slate-700 bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor={`checkbox-${key}-${props.id}`}
								className="text-sm dark:text-gray-300 flex-grow"
							>
								{list}
							</label>
						</div>
					))}
				</div>
				<div className="flex flex-row justify-between align-middle gap-4">
					<svg
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						className="w-6 h-6"
					>
						<g>
							<path d="M20,12h-8v8h-1v-8H3v-1h8V3h1v8h8V12z"></path>
						</g>
					</svg>
					<p>Create new list</p>
				</div>
			</div>
		</div>
	);
};

export { SaveCardPopup };
