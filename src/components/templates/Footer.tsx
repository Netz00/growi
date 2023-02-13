import Link from 'next/link';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { SitemapColum } from '../sitemap/SitemapColumn';
import { Logo } from './Logo';

type IFooterProps = {
	sitemapItems: [JSON];
};

const Footer = (props: IFooterProps) => (
	<Background>
		<Section bPadding="pb-6">
			<CenteredFooter
				logo={<Logo />}
				iconList={
					<>
						<Link href="/">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M27.26 27.2331H22.527V19.8164C22.527 18.0479 22.49 15.7751 20.052 15.7751C17.584 15.7751 17.208 17.6934 17.208 19.6856V27.2321H12.469V11.9823H17.021V14.0624H17.082C17.718 12.8611 19.265 11.5979 21.573 11.5979C26.374 11.5979 27.265 14.7545 27.265 18.8588V27.2321L27.26 27.2331ZM7.115 9.89823C5.588 9.89823 4.364 8.66495 4.364 7.14606C4.364 5.63217 5.593 4.40088 7.115 4.40088C8.637 4.40088 9.87 5.63217 9.87 7.14606C9.87 8.66495 8.637 9.89823 7.115 9.89823V9.89823ZM9.489 27.2331H4.74V11.9833H9.489V27.2331ZM29.636 0H2.36C1.057 0 0 1.02957 0 2.3038V29.6528C0 30.927 1.057 31.9566 2.36 31.9566H29.631C30.932 31.9566 32 30.927 32 29.6528V2.3038C32 1.02957 30.932 0 29.631 0L29.636 0Z" />
							</svg>
						</Link>
						<Link href="/">
							<svg
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M16 0C11.6505 0 11.1084 0.0209735 9.40618 0.0928825C7.69696 0.176776 6.54082 0.441441 5.52069 0.836941C4.46856 1.24842 3.57245 1.79473 2.68734 2.6836C1.79622 3.56749 1.24416 4.46235 0.838105 5.51302C0.442055 6.53173 0.177022 7.68627 0.0930116 9.39311C0.016002 11.094 0 11.6343 0 15.9778C0 20.3213 0.0210026 20.8626 0.0930116 22.5624C0.177022 24.2643 0.442055 25.4238 0.838105 26.4425C1.25016 27.4932 1.79722 28.3881 2.68734 29.272C3.57245 30.1618 4.46856 30.7131 5.52069 31.1186C6.54082 31.5091 7.70196 31.7788 9.40618 31.8627C11.1094 31.9396 11.6505 31.9556 16 31.9556C20.3495 31.9556 20.8916 31.9346 22.5938 31.8627C24.298 31.7788 25.4592 31.5081 26.4793 31.1186C27.5314 30.7071 28.4276 30.1608 29.3127 29.272C30.2038 28.3881 30.7558 27.4982 31.1619 26.4425C31.5529 25.4238 31.823 24.2643 31.907 22.5624C31.984 20.8616 32 20.3213 32 15.9778C32 11.6343 31.979 11.093 31.907 9.39311C31.823 7.69127 31.5519 6.52574 31.1619 5.51302C30.7498 4.46235 30.2028 3.56749 29.3127 2.6836C28.4276 1.79373 27.5364 1.24243 26.4793 0.836941C25.4592 0.441441 24.298 0.176776 22.5938 0.0928825C20.8906 0.0159798 20.3495 0 16 0V0ZM16 2.87636C20.2715 2.87636 20.7816 2.89733 22.4698 2.96924C24.027 3.04215 24.8751 3.30182 25.4382 3.52154C26.1893 3.81218 26.7143 4.15574 27.2824 4.71703C27.8395 5.27333 28.1835 5.80365 28.4746 6.55371C28.6946 7.11599 28.9546 7.96292 29.0276 9.51795C29.0996 11.2038 29.1206 11.7142 29.1206 15.9788C29.1206 20.2434 29.0996 20.7537 29.0216 22.4396C28.9376 23.9946 28.6776 24.8416 28.4586 25.4039C28.1555 26.1539 27.8175 26.6782 27.2594 27.2455C26.6963 27.8018 26.1603 28.1454 25.4152 28.436C24.8591 28.6557 23.999 28.9154 22.4358 28.9883C20.7386 29.0602 20.2385 29.0812 15.956 29.0812C11.6735 29.0812 11.1744 29.0602 9.47518 28.9823C7.91799 28.8984 7.05888 28.6388 6.49581 28.42C5.73572 28.1174 5.21465 27.7798 4.65658 27.2225C4.09351 26.6603 3.73547 26.1249 3.45943 25.3809C3.2354 24.8256 2.97937 23.9667 2.89636 22.4056C2.83935 20.7308 2.81235 20.2114 2.81235 15.9548C2.81235 11.7002 2.83935 11.1799 2.89636 9.484C2.97937 7.92297 3.2354 7.06606 3.45943 6.50876C3.73547 5.74872 4.09451 5.22938 4.65658 4.66709C5.21365 4.1108 5.73572 3.75125 6.49581 3.46961C7.05888 3.25089 7.89699 2.99121 9.46018 2.91331C11.1574 2.85239 11.6575 2.83042 15.934 2.83042L16 2.87636ZM16 7.77716C11.4584 7.77716 7.78597 11.4495 7.78597 15.9798C7.78597 20.515 11.4634 24.1824 16 24.1824C20.5416 24.1824 24.214 20.51 24.214 15.9798C24.214 11.4445 20.5366 7.77716 16 7.77716V7.77716ZM16 21.306C13.0516 21.306 10.6663 18.9241 10.6663 15.9798C10.6663 13.0355 13.0516 10.6535 16 10.6535C18.9484 10.6535 21.3337 13.0355 21.3337 15.9798C21.3337 18.9241 18.9484 21.306 16 21.306V21.306ZM26.4653 7.44957C26.4653 8.51123 25.6002 9.36814 24.5421 9.36814C23.4789 9.36814 22.6208 8.51023 22.6208 7.44957C22.6208 6.39391 23.4849 5.53499 24.5421 5.53499C25.5992 5.53499 26.4653 6.39391 26.4653 7.44957V7.44957Z" />
							</svg>
						</Link>
						<Link href="/">
							<svg
								width="32"
								height="24"
								viewBox="0 0 32 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M32 1.99722V21.9694C32 23.1029 31.135 23.9667 30 23.9667H28V5.84088L16 14.4489L4 5.84088V23.9667H2C0.865 23.9667 0 23.1029 0 21.9694V1.99722C0 1.43001 0.214 0.930705 0.573 0.577197C0.932 0.212704 1.432 0 2 0H2.667L16 9.65357L29.333 0H30C30.568 0 31.068 0.213703 31.427 0.577197C31.786 0.930705 32 1.43001 32 1.99722Z" />
							</svg>
						</Link>
					</>
				}
			>
				{props.sitemapItems?.map((column: any, key) => (
					<SitemapColum key={key}>
						{column?.map((row: any, key2: number) => (
							<li key={key2}>
								<Link href={row.url}>{row.value}</Link>
							</li>
						))}
					</SitemapColum>
				))}
			</CenteredFooter>
		</Section>
	</Background>
);

export { Footer };
