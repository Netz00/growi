import Image from 'next/image';
import { useRouter } from 'next/router';

import useComponentVisible from '../../hooks/useComponentVisible';
import { Add } from '../icons/Add';
import { Clickable } from '../icons/Clickable';
import { CardCarousel, IMediaProps } from './CardCarousel';
import { ILocationProps, Location } from './Location';
import { ProfileStats } from './ProfileStats';
import { Rating } from './Rating';
import { SaveCardPopup } from './SaveCardPopup';

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

	const {
		ref,
		refButton,
		isComponentVisible: isSavePopupVisible,
		setIsComponentVisible: setSavePopup,
	} = useComponentVisible(false);

	return (
		<div className="relative">
			<div
				className={`${
					isSavePopupVisible && 'brightness-50'
				} w-96 max-md:w-72 bg-white rounded-lg shadow-md flex flex-col gap-4`}
			>
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

					<h5 className="text-base font-semibold tracking-tight text-gray-900">
						{props.tags.map((tag) => `#${tag} `)}
					</h5>
					<Rating {...props} />
				</div>
				<div className="px-5 pt-2 pb-3 border-solid border-t border-black flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900">
						{`$${(Math.round(props.startingPrice * 100) / 100).toFixed(
							2
						)}`}
					</span>

					<div ref={refButton}>
						<Clickable
							onClick={() => setSavePopup(!isSavePopupVisible)}
							scale
							hover
						>
							<Add />
						</Clickable>
					</div>
				</div>
			</div>
			<div ref={ref}>
				<SaveCardPopup
					id={props.username}
					savePopup={isSavePopupVisible}
					setSavePopup={setSavePopup}
				/>
			</div>
		</div>
	);
};

export { InfluencerCard };
