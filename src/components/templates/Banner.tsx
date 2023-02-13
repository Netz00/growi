import { ReactNode } from 'react';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IBannerProps = {
	title: string;
	subtitle: string;
	button: ReactNode;
};

const Banner = (props: IBannerProps) => (
	<Section className="mt-0 mb-10 py-16 px-3">
		<CTABanner {...props} />
	</Section>
);

export { Banner };
