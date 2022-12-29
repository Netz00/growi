import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
	<Section>
		<CTABanner
			title="Want to help?"
			subtitle="We are always seeking for experts open open for interview."
			button={
				<Link href="/">
					<a>
						<Button>Get Started</Button>
					</a>
				</Link>
			}
		/>
	</Section>
);

export { Banner };
