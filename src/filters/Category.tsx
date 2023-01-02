import Image from 'next/image';
import { useRouter } from 'next/router';

type ICategoryProps = {
	name: string;
	description?: string;
	image: string;
	imageAlt: string;
};

const Category = (props: ICategoryProps) => {
	const router = useRouter();
	return (
		<div className="text-center hover:transition-transform hover:scale-125 hover:cursor-pointer">
			<div
				className="w-44 h-44
                max-md:w-28 max-md:h-28
            relative rounded-full overflow-hidden"
			>
				<Image
					src={`${router.basePath}${props.image}`}
					alt={props.imageAlt}
					fill
					style={{ objectFit: 'contain', position: 'absolute' }}
					sizes="(max-width: 226px) 30vw,
                    (max-width: 400px) 16vw,
                    11vw"
				/>
			</div>

			<div className="text-center sm:px-6 mx-auto mt-3">
				<h3 className="text-3xl text-gray-900 font-semibold">
					{props.name}
				</h3>
				<div className="mt-6 text-xl leading-9">{props.description}</div>
			</div>
		</div>
	);
};

export { Category };
