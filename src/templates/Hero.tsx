import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroContent } from '../hero/HeroContent';
import { Section } from '../layout/Section';
import { NavbarItems } from '../navigation/NavbarItems';
import { Logo } from './Logo';

const Hero = () => (
	<Background color="bg-gray-100">
		<Section yPadding="py-6">
			<NavbarItems logo={<Logo xl />}>
				{/* <li>
					<Link href="/">Influencer?</Link>
				</li>
				<li>
					<Link href="/">Client?</Link>
				</li> */}
			</NavbarItems>
		</Section>

		<Section yPadding="pt-20 pb-32">
			<HeroContent
				title={
					<>
						{'The modern solutions for\n'}
						<span className="text-primary-500">
							Influencer marketing
						</span>
					</>
				}
				description="The easiest way to grow your business."
				buttons={
					<>
						<Link href="/brands">
							<Button xl>I&apos;m a brand</Button>
						</Link>
						<Link href="/creators">
							<Button xl>I&apos;m a creator</Button>
						</Link>
					</>
				}
			/>
		</Section>
	</Background>
);

export { Hero };
