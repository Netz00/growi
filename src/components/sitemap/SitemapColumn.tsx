import { ReactNode } from 'react';

type ISitemapColumProps = {
	children: ReactNode;
};

const SitemapColum = (props: ISitemapColumProps) => (
	<ul className="mt-5 flex flex-col justify-start align-start gap-2 md:gap-4">
		{props.children}
	</ul>
);

export { SitemapColum };
