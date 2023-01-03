import Image from 'next/image';
import { useRouter } from 'next/router';

import { AddToButton } from '../button/AddToButton';
import { CardCarousel, IMediaProps } from './CardCarousel';
import { ILocationProps, Location } from './Location';
import { ProfileStats } from './ProfileStats';
import { Rating } from './Rating';

type IInfluencerCardProps = {
	username: string;
	firstName: string;
	lastName: string;
	profileImage: string;
	profileImageAlt: string;
	media: [IMediaProps];
	location: ILocationProps;
	followersNumber: number;
	engagmentRatioPercentage: number;
	rating: number;
	reviewsNumber: number;
	tags: [string];
	startingPrice: number;
};

const InfluencerCard = (props: IInfluencerCardProps) => {
	const router = useRouter();

	return (
		<div className="w-96 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-4">
			<CardCarousel media={[...props.media]} />
			<div className="flex flex-col gap-2 px-8">
				<a className="flex flex-row gap-6 items-center">
					<div
						className="w-16 h-16 max-md:w-10 max-md:h-10 relative rounded-full
				overflow-hidden"
					>
						<Image
							src={`${router.basePath}${props.profileImage}`}
							alt={props.profileImageAlt}
							fill
							style={{ objectFit: 'cover', position: 'absolute' }}
							sizes="(max-width: 113px) 15vw,
                    (max-width: 200px) 8vw,
                    5vw"
						/>
					</div>
					<span>
						<p>@{props.username} </p>
						<p>
							{props.firstName} {props.lastName}
						</p>
					</span>
				</a>
				<div className="flex flex-row justify-between">
					<Location {...props.location} />
					<ProfileStats {...props} />
				</div>

				<h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
					{props.tags.map((tag) => `#${tag} `)}
				</h5>
				<Rating {...props} />
			</div>
			<div className="px-5 pb-5 border-solid border-t border-black">
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">
						{`$${(Math.round(props.startingPrice * 100) / 100).toFixed(
							2
						)}`}
					</span>
					<AddToButton onClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export { InfluencerCard };
