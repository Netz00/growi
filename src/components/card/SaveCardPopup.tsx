import { useRef, useState } from 'react';

import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import { Clickable } from '../icons/Clickable';
import { Exit } from '../icons/Exit';
import { Plus } from '../icons/Plus';

type ISaveCardPopupProps = {
	id: string;
	savePopup: boolean;
	setSavePopup: Function;
};

// TODO pressing + button while settingas are active, mousedown and onClick event conflict, select card div child elements and stop propagation for each

const SaveCardPopup = (props: ISaveCardPopupProps) => {
	const [lists, setLists] = useState<string[]>(['Cosmetics', 'Sport', 'Nike']);

	const settingsRef = useRef(null);
	const newListInput = useRef<HTMLInputElement>(null);

	const [addNew, setAddNew] = useState(false);

	const addList = () => {
		if (newListInput?.current?.value !== '')
			setLists([...lists, newListInput?.current?.value ?? '']);
	};

	useOutsideAlerter(
		() => props.setSavePopup(false) || setAddNew(false),
		props.savePopup,
		settingsRef
	);

	return (
		<div
			ref={settingsRef}
			className={`${
				!props.savePopup && 'hidden'
			} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                            h-fit w-auto bg-white z-10
                            border-solid border border-black rounded-lg`}
		>
			<div className="flex flex-col gap-3 p-5">
				<div className="flex flex-row justify-between align-middle">
					<span className="h-fit">Save to ...</span>{' '}
					<Clickable
						onClick={() => {
							if (props.savePopup) props.setSavePopup(false);
						}}
					>
						<Exit />
					</Clickable>
				</div>
				<div className="flex flex-col gap-3 my-2 overflow-y-auto max-h-40">
					{lists.map((list, key) => (
						<div
							key={key}
							className="flex items-center py-2 gap-6 hover:cursor-pointer"
						>
							<input
								id={`checkbox-${key}-${props.id}`}
								type="checkbox"
								value=""
								className="w-5 h-5 hover:cursor-pointer accent-slate-700 bg-gray-100 border-gray-300 rounded focus:ring-black dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor={`checkbox-${key}-${props.id}`}
								className="text-sm hover:cursor-pointer dark:text-gray-300 flex-grow"
							>
								{list}
							</label>
						</div>
					))}
				</div>

				{addNew && (
					<div>
						<label
							htmlFor="first_name"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						>
							Name
						</label>
						<input
							ref={newListInput}
							type="text"
							id="first_name"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="John"
							required
						/>
					</div>
				)}
				<Clickable
					onClick={() => {
						if (!addNew) setAddNew(true);
						else addList();
					}}
				>
					<div className="flex flex-row justify-center align-middle gap-4">
						<Plus />

						<p>{addNew ? 'Create' : 'Create new list'}</p>
					</div>{' '}
				</Clickable>
			</div>
		</div>
	);
};

export { SaveCardPopup };
