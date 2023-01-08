import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';
import ReactPlayer from 'react-player';

type IMediaProps = {
	key: number;
	url: string;
	alt: string;
	type: string;
};

type ICardCarouselProps = {
	media: [IMediaProps];
};
//  TODO video doesn't work, router.basePath and element.url aren't AVAIBLE at client side: url={`${router.basePath}${element.url}`}

const CardCarousel = (props: ICardCarouselProps) => {
	const [activeMedia, setActiveMedia] = useState(0);
	const router = useRouter();
	const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setHasWindow(true);
		}
	}, []);

	return (
		<div id="default-carousel" className="relative" data-carousel="static">
			{/* <!-- Carousel wrapper --> */}
			<div className="overflow-hidden rounded-lg rounded-b-none">
				{props.media?.map((element, index) => (
					<div
						key={element.key}
						className={`{ ${
							activeMedia !== index && 'hidden'
						} duration-700 ease-in-out z-0 relative h-56 md:h-72`}
						data-carousel-item
					>
						{validImageTypes.includes(element.type) ? (
							<Image
								key={element.key}
								src={`${router.basePath}${element.url}`}
								alt={element.alt}
								fill
								style={{ objectFit: 'cover', position: 'absolute' }}
								sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
								priority={activeMedia === index}
							/>
						) : (
							hasWindow && (
								<ReactPlayer
									controls={false}
									playing={activeMedia === index}
									width="100%"
									height="100%"
									url={`../${element.url}`}
									config={{
										file: {
											attributes: {
												crossOrigin: 'true',
											},
										},
									}}
								/>
							)
						)}
					</div>
				))}
			</div>
			{/*  <!-- Slider indicators --> */}
			<div className="absolute z-1 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
				{props.media?.map((element, index) => (
					<button
						key={element.key}
						type="button"
						className={`w-3 h-3 rounded-full
                        ${
							activeMedia === index ? 'bg-white' : 'bg-white/30'
						}  dark:bg-gray-800/30
                        hover:bg-white/50 dark:hover:bg-gray-800/60
                        focus:ring-1 focus:ring-white dark:focus:ring-gray-800/70 focus:outline-none
                        sm:w-4 sm:h-4 
                        border-solid border-white dark:border-gray-800 border-2`}
						aria-current={activeMedia === index ? 'true' : 'false'}
						aria-label={`Slide ${index + 1}`}
						data-carousel-slide-to={index}
						onClick={() => setActiveMedia(index)}
					></button>
				))}
			</div>
			{/*   <!-- Slider controls --> */}

			{activeMedia !== 0 && (
				<button
					type="button"
					className="absolute top-0 left-0 z-1 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev
					onClick={() => setActiveMedia(activeMedia - 1)}
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
			)}
			{activeMedia !== props.media.length - 1 && (
				<button
					type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next
					onClick={() => setActiveMedia(activeMedia + 1)}
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			)}
		</div>
	);
};

export { CardCarousel };
export type { IMediaProps };
