import { ReactNode } from 'react';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IBannerProps = {
	title: string;
	subtitle: string;
	button: ReactNode;
};

const Banner = (props: IBannerProps) => (
	<Section yPadding="mt-0 mb-10">
		<CTABanner {...props} />
	</Section>
);

export { Banner };
