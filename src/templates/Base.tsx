import Link from 'next/link';

import { Button } from '../button/Button';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

type IBaseProps = any;

const Base = (props: IBaseProps) => (
	<div className="antialiased text-gray-600">
		<Meta title={AppConfig.title} description={AppConfig.description} />
		<Hero
			navBarItems={
				<>
					{props.hero.navBarLinks?.map((item: any) => (
						<li key={item.key}>
							<Link href={item.link}>{item.text}</Link>
						</li>
					))}
				</>
			}
			title={
				<>
					{props.hero.title.part1}
					<span className="text-primary-500">
						{props.hero.title.part2}
					</span>
				</>
			}
			description={props.hero.description}
			buttons={
				<>
					{props.hero.buttons.map((button: any) => (
						<Link key={button.key} href={button.link}>
							<Button xl>{button.text}</Button>
						</Link>
					))}
				</>
			}
		/>

		{props.sections.map((section: any) => (
			<VerticalFeatures {...section} key={section.key} />
		))}

		<Banner
			{...props.banner}
			button={
				<Link href={props.banner.button.link}>
					<Button>{props.banner.button.text}</Button>
				</Link>
			}
		/>
		<Footer />
	</div>
);

export default Base;
