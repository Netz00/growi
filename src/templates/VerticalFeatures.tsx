import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
	<Section
		title="Growi"
		description="The best place to learn about your audience, connect with brands and monetize your influence."
	>
		<VerticalFeatureRow
			title="Get a professional media kit for free"
			description="Host your stats, rate card and best work on a public URL. Share the link with brands you want to collaborate with."
			image="/assets/images/mediaKit.jpg"
			imageAlt="First feature alt text"
		/>
		<VerticalFeatureRow
			title="Insights into your influence"
			description="See all the metrics from your channels in one place. Track growth, engagement and performance of your content and use these insights to learn and grow."
			image="/assets/images/InfluencerProfile.png"
			imageAlt="Second feature alt text"
			reverse
		/>
		<VerticalFeatureRow
			title="Get paid on time"
			description="We make sure you get paid and that it’s on time."
			image="/assets/images/earningPerInfluencer.png"
			imageAlt="Third feature alt text"
		/>
	</Section>
);

export { VerticalFeatures };
