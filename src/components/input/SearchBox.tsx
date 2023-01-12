import { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import useSWR from 'swr';

import useDebounce from '../../hooks/UseDebounce';

type Inputs = {
	query: string;
};

type AutocompletePrediction = {
	prefix?: string;
	match: string;
	suffix?: string;
};

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SearchBox = () => {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		watch,
		setValue,
	} = useForm<Inputs>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<Inputs> = (data) =>
		router.push(`/search?q=${encodeURIComponent(data.query)}`);

	const { data } = useSWR('../assets/autocompleteTerms.json', fetcher);

	const [autocompletePredictions, setAutocompletePredictions] = useState<
		AutocompletePrediction[]
	>([]);

	const updateAutocomplete = () => {
		const value = watch('query');
		if (value === '' || !isValid) return setAutocompletePredictions([]);
		const reg = new RegExp(value, 'i');
		const regSplitter = new RegExp(`(^.*)(${value})(.*\\b)`, 'i');
		return setAutocompletePredictions(
			data?.terms
				?.filter(
					function anonymous(this: any, term: string) {
						if (this.count < 5 && term.match(reg)) {
							this.count += 1;
							return true;
						}
						return false;
					},
					{ count: 0 }
				)
				.map((res: string): AutocompletePrediction => {
					const prediciton = {} as AutocompletePrediction;

					const match = res.match(regSplitter);

					prediciton.prefix = match ? match[1] : undefined;
					prediciton.match = match![2]!;
					prediciton.suffix = match ? match[3] : undefined;
					return prediciton;
				})
		);
	};

	// search as you type
	useDebounce(updateAutocomplete, [watch('query')], 800);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="relative">
			<label
				htmlFor="default-search"
				className="mb-2 text-sm font-medium text-gray-900 sr-only"
			>
				Search
			</label>
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
					id="default-search"
					className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
					placeholder="Search influencers"
					required
					maxLength={40}
					aria-invalid={errors.query ? 'true' : 'false'}
					{...register('query', {
						maxLength: {
							value: 40,
							message: 'The maximum lenght is 30 characters.',
						},
						pattern: {
							value: /^[a-z][a-z0-9_]{0,29}$/i,
							message: 'No special character',
						},
					})}
					onBlur={() =>
						setTimeout(() => setAutocompletePredictions([]), 1)
					}
					onFocus={() => updateAutocomplete()}
				/>

				<button
					type="submit"
					className="text-white absolute right-2.5 bottom-2.5 bg-primary-400 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>
			</div>
			{errors.query && <span>{errors.query?.message ?? 'Invalid input'}</span>}

			<ul
				className="absolute left-0 right-0 w-full mt-2 z-10 bg-opacity-90
                           border bg-white border-gray-100"
			>
				{autocompletePredictions?.map((prediction, key) => (
					<li
						key={key}
						className="pl-10 pr-2 py-1 border-b-2 last:border-b-0 border-gray-300 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
						onClick={() =>
							setValue(
								'query',
								`${prediction.prefix}${prediction.match}${prediction.suffix}`
							)
						}
					>
						<svg
							className="absolute w-4 h-4 left-2 top-2"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
						{prediction.prefix}
						<b>{prediction.match}</b>
						{prediction.suffix}
					</li>
				))}
			</ul>
		</form>
	);
};

export { SearchBox };
