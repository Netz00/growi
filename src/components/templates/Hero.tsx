import { ReactNode } from 'react';

import { Background } from '../background/Background';
import { HeroContent } from '../hero/HeroContent';
import { Section } from '../layout/Section';
import { CagaljsNavbarItems } from '../navigation/CagaljsNavbarItems';
import { Logo } from './Logo';

type IHeroProps = {
	navBarItems: ReactNode;
	title: ReactNode;
	description: string;
	buttons: ReactNode;
};

const Hero = (props: IHeroProps) => (
	<Background color="bg-gray-100">
		<Section yPadding="py-6" xPadding="px-0">
			<CagaljsNavbarItems logo={<Logo xl />}>
				{props.navBarItems}
			</CagaljsNavbarItems>
		</Section>

		<Section yPadding="md:pt-20 md:pb-32 pb-10">
			<HeroContent {...props} />
		</Section>
	</Background>
);

export { Hero };
