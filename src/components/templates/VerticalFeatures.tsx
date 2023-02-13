import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

type IVerticalFeaturesProps = {
	title: string;
	description: string;
	features: any;
};

const VerticalFeatures = (props: IVerticalFeaturesProps) => (
	<Section title={props.title} description={props.description} className="py-16">
		{props.features.map((feature: any) => (
			<VerticalFeatureRow {...feature} key={feature.key} />
		))}
	</Section>
);

export { VerticalFeatures };
