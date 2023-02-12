import { useState, useEffect } from 'react';

import Link from 'next/link';
import { InstagramEmbed } from 'react-social-media-embed';

import { Button } from '../button/Button';

const InstagramEmbeds = (props: any) => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true);
		}
	}, []);

	return (
		<>
			<div className="text-3xl pb-4">Featured posts</div>
			<div className="flex flex-wrap justify-around">
				{hasWindow &&
					props.postLast.map((postUrl: string, key: number) => (
						<InstagramEmbed
							key={props.username + key}
							url={postUrl}
							width="fit"
							captioned
						/>
					))}
			</div>
			<Link
				className="m-auto block w-fit my-10"
				href={`https://www.instagram.com/${props.username}/`}
			>
				<Button>See more</Button>
			</Link>
		</>
	);
};
export default InstagramEmbeds;
