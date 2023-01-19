import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import currencyFormatter from '../../hooks/currencyFormatter';
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
	follower: number;
	engagmentRatioRatePercentage: number;
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
				} w-96 max-md:w-72 bg-white rounded-lg shadow-md flex flex-col`}
			>
				<div className="h-56 md:h-72">
					<CardCarousel media={[...props.media]} />
				</div>

				<Link
					href={`${router.basePath}/creators/${props.username}`}
					className="hover:bg-slate-100"
				>
					<div className="flex flex-col gap-4 p-5">
						<div className="flex flex-row justify-between">
							<div className="flex flex-row gap-2 items-center">
								<div
									className="w-16 h-16 max-md:w-10 max-md:h-10 relative rounded-full
				                            overflow-hidden"
								>
									<Image
										src={`${router.basePath}${props.profileImage}`}
										alt={props.username}
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
								<span>
									<p className="text-slate-600 font-semibold">
										@{props.username}{' '}
									</p>
									<p>
										{props.firstName} {props.lastName}
									</p>
								</span>
							</div>
							<Location {...props.location} />
						</div>
						<ProfileStats {...props} />
						<p
							className="font-semibold tracking-tight
                                   overflow-hidden text-ellipsis h-6 whitespace-pre-line"
						>
							{props.tags.map((tag) => `#${tag} `)}
						</p>
						<Rating {...props} />
					</div>
				</Link>

				<div className="px-5 py-1 border-solid border-t border-gray-400 flex items-center justify-between">
					<div className="text-left">
						<p className="text-xs leading-3">Starting at</p>
						<p className="text-2xl font-bold text-gray-900">
							{`${currencyFormatter(Math.round(props.startingPrice))}`}
						</p>
					</div>

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
