import React, { ReactElement, useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';

import { scrollTo } from '../../../hooks/scrollTo';
import { useDebouncedCallback } from '../../../hooks/useDebounceCallback';
import { useFuse } from '../../../hooks/useFuse';

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

type IAutocompleteProps = {
	children: ReactElement;
};

const AutocompleteImpl = (props: IAutocompleteProps) => {
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

	const { search } = useFuse(
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
		),
		{
			includeScore: true,
			includeMatches: true,
			useExtendedSearch: true,
			keys: [
				'firstName',
				'lastName',
				{
					name: 'username',
					weight: 1.5,
				},
				{
					name: 'tags',
					weight: 0.5,
				},
			],
			matchAllOnEmptyQuery: false,
			limit: 8,
			distance: 20,
			location: 0,
			threshold: 0.3,
		}
	);

	const onSearch = useDebouncedCallback((userInput: string) => {
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
		onSearch(userInput);
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

	return React.cloneElement(props.children, {
		onKeyDown,
		setOpen,
		onClick,
		onSubmit,
		getMatchParts,
		onChange,
		autocomplete,
	});
};

export default AutocompleteImpl;

export type { AutocompleteState };
