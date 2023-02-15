import Image from 'next/image';
import { useRouter } from 'next/router';

import { ISearchLargeProps } from './SearchProps';

const SearchLarge = (props: ISearchLargeProps) => {
	const router = useRouter();

	return (
		<div className="relative">
			<form
				className="relative"
				onSubmit={(e: any) =>
					e.preventDefault() ||
					props.onSubmit(props.autocomplete?.userInput)
				}
			>
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-gray-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</div>
				<input
					type="search"
					className="block w-full p-4 pl-10 pr-28 rounded-lg
                    text-gray-900 bg-gray-50 dark:text-gray-500 dark:bg-gray-900
                    border border-gray-300 dark:border-gray-800
                    focus:outline outline-2 -outline-offset-4 focus:outline-blue-500 dark:focus:outline-blue-900
                    placeholder-slate-400 placeholder-shown:text-ellipsis"
					placeholder="Search influencers by username, fist name, last name, tags"
					required
					maxLength={40}
					onChange={props.onChange}
					onKeyDown={props.onKeyDown}
					onBlur={() => props.setOpen(false)}
					onFocus={() => props.setOpen(true)}
					value={props.autocomplete?.userInput}
				/>
				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 top-2.5
					bg-primary-500 hover:bg-primary-600 focus:ring-4 
					focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
				>
					Search
				</button>
			</form>

			{props.autocomplete?.showSuggestions &&
				props.autocomplete.userInput &&
				(props.autocomplete.filteredSuggestions.length ? (
					<ul
						className="absolute left-0 right-0 w-full z-10 bg-opacity-90 rounded-lg
                    border-solid border border-slate-300 border-t-0 bg-white
                    list-none max-h-48 overflow-y-auto custom_scrollbar pl-0 cursor-pointer"
						onMouseDown={(e) => e.preventDefault()}
						id="suggestion-list"
					>
						{props.autocomplete.filteredSuggestions.map(
							(suggestion, index) => (
								<li
									className={`${
										index ===
											props.autocomplete?.activeSuggestion &&
										'border-2 border-blue-500'
									}
                                    p-1 px-4 hover:bg-slate-200 flex gap-2 items-center first:rounded-tl-lg last:rounded-bl-lg`}
									key={suggestion.username}
									onClick={props.onClick}
									id={`suggestion-${index}`}
									data-username={suggestion.username}
								>
									<span className="text-slate-600 font-semibold px-1 w-28">
										@{props.getMatchParts(suggestion.username)}
									</span>
									<span className="text-slate-600 font-semibold px-1">
										&nbsp;&#12539;&nbsp;
									</span>
									<span className="px-1 w-40">
										{props.getMatchParts(suggestion.firstName)}{' '}
										{props.getMatchParts(suggestion.lastName)}
									</span>
									<span className="px-1">
										<div
											className="w-10 h-10 relative rounded-full
				                            overflow-hidden"
										>
											<Image
												src={`${router.basePath}${suggestion.profileImage}`}
												alt={suggestion.username}
												fill
												style={{
													objectFit: 'cover',
													position: 'absolute',
												}}
												sizes="(max-width: 113px) 15vw,
                                            (max-width: 200px) 8vw,
                                            5vw"
											/>
										</div>
									</span>
								</li>
							)
						)}
					</ul>
				) : (
					<div className="absolute text-slate-400 text-sm p-2">
						<em>No suggestions, you&apos;re on your own!</em>
					</div>
				))}
		</div>
	);
};

export default SearchLarge;
