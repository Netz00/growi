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
			className={`mt-20 flex flex-wrap items-center
            ${props.reverse && 'flex-row-reverse'}
            odd:bg-gray-100
            `}
		>
			<div className="w-full sm:w-1/2 sm:px-6">
				<h3 className="text-3xl text-gray-900 text-center font-semibold">
					{props.title}
				</h3>
				<div className="mt-6 text-xl leading-9">{props.description}</div>
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
