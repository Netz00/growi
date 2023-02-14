import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '../button/Button';

type IVerticalFeatureRowProps = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	reverse?: boolean;
	CTA?: any;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
	const router = useRouter();

	return (
		<div
			className={`mt-10 md:mt-5 flex flex-wrap items-center
            ${props.reverse && 'flex-row-reverse'}
            odd:bg-gray-100 p-3 dark:odd:bg-dark-primary
            `}
		>
			<div className="w-full sm:w-1/2">
				<h3 className="text-3xl text-gray-900 px-8 text-center font-semibold dark:text-gray-400">
					{props.title}
				</h3>
				<div className="mt-2 text-xl px-8 leading-9 dark:text-gray-500">
					{props.description}
				</div>
				{props.CTA && (
					<Link className="mt-4 block text-center" href={props.CTA.link}>
						<Button>{props.CTA.text}</Button>
					</Link>
				)}
			</div>

			<div className="w-full sm:w-1/2 p-6 relative">
				<Image
					src={`${router.basePath}${props.image}`}
					alt={props.imageAlt}
					width={538}
					height={639}
				/>
			</div>
		</div>
	);
};

export { VerticalFeatureRow };
