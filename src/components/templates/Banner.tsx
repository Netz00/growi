import { ReactNode } from 'react';

import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

type IBannerProps = {
	title: string;
	subtitle: string;
	button: ReactNode;
};

const Banner = (props: IBannerProps) => (
	<Section>
		<CTABanner {...props} />
	</Section>
);

export { Banner };
