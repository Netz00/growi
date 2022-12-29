import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
	<Background color="bg-gray-100">
		<Section yPadding="py-6">
			<NavbarTwoColumns logo={<Logo xl />}>
				<li>
					<Link href="/">Influencer?</Link>
				</li>
				<li>
					<Link href="/">Client?</Link>
				</li>
			</NavbarTwoColumns>
		</Section>

		<Section yPadding="pt-20 pb-32">
			<HeroOneButton
				title={
					<>
						{'The modern solutions for\n'}
						<span className="text-primary-500">
							Influencer marketing
						</span>
					</>
				}
				description="The easiest way to grow your business."
				button={
					<Link href="">
						<Button xl>Sign up for demo</Button>
					</Link>
				}
			/>
		</Section>
	</Background>
);

export { Hero };
