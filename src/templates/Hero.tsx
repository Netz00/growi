import { ReactNode } from 'react';

import { Background } from '../background/Background';
import { HeroContent } from '../hero/HeroContent';
import { Section } from '../layout/Section';
import { NavbarItems } from '../navigation/NavbarItems';
import { Logo } from './Logo';

type IHeroProps = {
	navBarItems: ReactNode;
	title: ReactNode;
	description: string;
	buttons: ReactNode;
};

const Hero = (props: IHeroProps) => (
	<Background color="bg-gray-100">
		<Section yPadding="py-6">
			<NavbarItems logo={<Logo xl />}>{props.navBarItems}</NavbarItems>
		</Section>

		<Section yPadding="pt-20 pb-32">
			<HeroContent {...props} />
		</Section>
	</Background>
);

export { Hero };
