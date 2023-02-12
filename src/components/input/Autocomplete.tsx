import { useState } from 'react';

import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { scrollTo } from '../../hooks/scrollTo';
import { useDebouncedCallback } from '../../hooks/useDebounceCallback';
import useSearch from '../../hooks/useSearch';

type Suggestion = {
	id: number;
	firstName: string;
	lastName: string;
	username: string;
	profileImage: string;
	profileImageAlt: string;
	tags: Array<string>;
};

type AutocompleteState = {
	// The active selection's index
	activeSuggestion: number;
	// The suggestions that match the user's input
	filteredSuggestions: Array<Suggestion>;
	// Whether or not the suggestion list is shown
	showSuggestions: boolean;
	// What the user has entered
	userInput: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Autocomplete = () => {
	const router = useRouter();
	const [autocomplete, setAutocomplete] = useState<AutocompleteState>({
		activeSuggestion: 0,
		filteredSuggestions: [],
		showSuggestions: false,
		userInput: '',
	});

	const { data } = useSWR(
		`${router.basePath}/assets/data/creatorProfiles.json`,
		fetcher
	);

	const search = useSearch(
		data?.map(
			(el: Suggestion): Suggestion => ({
				id: el.id,
				firstName: el.firstName,
				lastName: el.lastName,
				username: el.username,
				tags: el.tags,
				profileImage: el.profileImage,
				profileImageAlt: el.profileImageAlt,
			})
		)
	);

	const handleClick = useDebouncedCallback((userInput: string) => {
		const result = search(userInput);
		const filteredSuggestions = result.map((el: any) => el.item as Suggestion);
		setAutocomplete({
			userInput,
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
		});
	}, 500);

	// Event listener called on every change
	const onChange = (e: any) => {
		const userInput = e.currentTarget.value;

		handleClick(userInput);
		setAutocomplete({
			...autocomplete,
			userInput,
			activeSuggestion: 0,
			showSuggestions: true,
		});
	};

	const getMatchParts = (term: string) => {
		const regSplitter = new RegExp(
			`(^.*)(${autocomplete.userInput})(.*\\b)`,
			'i'
		);

		if (!regSplitter.test(term)) return <span>{term}</span>;

		const match = term.match(regSplitter);

		return (
			<>
				<span>{match ? match[1] : undefined}</span>
				<span className="text-primary-500">
					{match ? match[2] : undefined}
				</span>
				<span>{match ? match[3] : undefined}</span>
			</>
		);
	};

	const onSubmit = (term: string) =>
		router.push(`/creators/${encodeURIComponent(term)}`);

	const onClick = (e: any) => {
		setAutocomplete({
			...autocomplete,
			activeSuggestion: 0,
			showSuggestions: false,
			userInput: e.currentTarget.getAttribute('data-username'),
		});
		onSubmit(e.currentTarget.getAttribute('data-username'));
	};

	const setOpen = (open: boolean) => {
		setAutocomplete({
			...autocomplete,
			showSuggestions: open,
		});
	};

	const onKeyDown = (e: any) => {
		const { activeSuggestion, filteredSuggestions } = autocomplete;

		// User pressed the enter key
		if (e.keyCode === 13) {
			setAutocomplete({
				...autocomplete,
				activeSuggestion: 0,
				showSuggestions: false,
				userInput: filteredSuggestions[activeSuggestion]?.username ?? '',
			});
			if (filteredSuggestions[activeSuggestion]?.username !== '')
				onSubmit(filteredSuggestions[activeSuggestion]?.username ?? '');
		}
		// User pressed the up arrow
		else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}
			setAutocomplete({
				...autocomplete,
				activeSuggestion: autocomplete.activeSuggestion - 1,
			});

			const elem = document.getElementById(
				`suggestion-${autocomplete.activeSuggestion - 1}`
			);

			const topPos = elem?.offsetTop;

			if (topPos)
				scrollTo(
					document.getElementById('suggestion-list')!,
					topPos - 60,
					300
				);
		}
		// User pressed the down arrow
		else if (e.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}

			setAutocomplete({
				...autocomplete,
				activeSuggestion: autocomplete.activeSuggestion + 1,
			});

			const elem = document.getElementById(
				`suggestion-${autocomplete.activeSuggestion + 1}`
			);

			const topPos = elem?.offsetTop;

			if (topPos)
				scrollTo(
					document.getElementById('suggestion-list')!,
					topPos - 30,
					300
				);
		}
	};

	return (
		<div className="relative">
			<div className="relative">
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
					className="block w-full p-4 pl-10 pr-28 text-gray-900 
                    border border-gray-300 rounded-lg bg-gray-50 focus:outline-blue-500
                    placeholder-slate-400 placeholder-shown:text-ellipsis"
					placeholder="Search influencers by username, fist name, last name, tags"
					required
					maxLength={40}
					onChange={onChange}
					onKeyDown={onKeyDown}
					onBlur={() => setOpen(false)}
					onFocus={() => setOpen(true)}
					value={autocomplete.userInput}
				/>
				<button
					className="text-white absolute right-2.5 bottom-2.5 top-2.5
					bg-primary-500 hover:bg-primary-600 focus:ring-4 
					focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2"
					onClick={() => onSubmit(autocomplete.userInput)}
				>
					Search
				</button>
			</div>
			{autocomplete.showSuggestions &&
				autocomplete.userInput &&
				(autocomplete.filteredSuggestions.length ? (
					<ul
						className="absolute left-0 right-0 w-full z-10 bg-opacity-90 rounded-lg
                    border-solid border border-slate-300 border-t-0 bg-white
                    list-none max-h-48 overflow-y-auto custom_scrollbar pl-0 cursor-pointer"
						onMouseDown={(e) => e.preventDefault()}
						id="suggestion-list"
					>
						{autocomplete.filteredSuggestions.map(
							(suggestion, index) => (
								<li
									className={`${
										index === autocomplete.activeSuggestion &&
										'border-2 border-blue-500'
									}
                                    p-1 px-4 hover:bg-slate-200 flex gap-2 items-center first:rounded-tl-lg last:rounded-bl-lg`}
									key={suggestion.username}
									onClick={onClick}
									id={`suggestion-${index}`}
									data-username={suggestion.username}
								>
									<span className="text-slate-600 font-semibold px-1 w-28">
										@{getMatchParts(suggestion.username)}
									</span>
									<span className="text-slate-600 font-semibold px-1">
										&nbsp;&#12539;&nbsp;
									</span>
									<span className="px-1 w-40">
										{getMatchParts(suggestion.firstName)}{' '}
										{getMatchParts(suggestion.lastName)}
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
					<div className="absolute text-slate-300 p-2">
						<em>No suggestions, you&apos;re on your own!</em>
					</div>
				))}
		</div>
	);
};

export default Autocomplete;
