import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
	xl?: boolean;
};

const Logo = (props: ILogoProps) => {
	const size = props.xl ? '44' : '32';
	const fontStyle = props.xl ? 'font-semibold text-3xl' : 'font-semibold text-xl';

	return (
		<span
			className={`inline-flex items-center gap-2 ${fontStyle} font-bellota text-primary-400`}
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 52 52"
				xmlns="http://www.w3.org/2000/svg"
				className="fill-primary-400"
			>
				<path d="M46.1804 17.0045C45.0304 15.6238 43.3883 14.8942 41.4304 14.8942C40.7531 14.8942 40.0273 14.9858 39.2608 15.1614C39.2161 15.1463 39.1787 15.1199 39.1316 15.1085C39.016 15.0807 37.9604 14.8335 36.4211 14.8335C36.364 14.8335 36.2977 14.8367 36.2392 14.8376C36.5617 13.5413 36.6054 12.1414 35.931 10.9426C35.006 9.29692 33.0596 8.46155 30.1441 8.46155C26.9324 8.46155 25.3168 10.1633 23.8921 11.6644C22.9619 12.6452 22.083 13.5709 20.7327 14.1614C20.0007 14.4811 19.1972 14.679 18.9308 14.7405C18.9174 14.7036 18.9092 14.6612 18.8948 14.6265C18.6375 13.9886 17.5436 11.9065 14.2691 11.9065C12.9279 11.9065 11.3699 12.2645 9.63898 12.9699C8.65354 13.3703 7.68298 13.5741 6.75418 13.5741C3.39225 13.5741 1.44441 10.8879 1.42617 10.8623C1.24713 10.6056 0.912571 10.4912 0.60393 10.581C0.29481 10.6699 0.0831299 10.9408 0.0831299 11.2476C0.0831299 11.3366 0.18441 20.1864 8.95498 21.8526C9.97018 22.045 10.9355 22.143 11.8259 22.143C15.3347 22.143 17.1399 20.6679 18.0356 19.4299C18.4883 18.8043 18.7825 18.1426 18.9548 17.4983C19.118 17.5193 19.2865 17.5193 19.4569 17.4856C19.5097 17.4742 20.7735 17.2106 21.9587 16.6931C23.8571 15.8632 25.0335 14.6238 26.0703 13.5308C27.375 12.156 28.2371 11.2481 30.1441 11.2481C31.3441 11.2481 32.8744 11.4227 33.3433 12.254C33.7504 12.9758 33.4816 14.1669 33.027 15.2722C32.0387 15.5321 31.0019 15.9279 29.9867 16.5453C21.5099 21.7035 21.6116 31.8264 21.6203 32.2541C21.6203 32.2569 21.6212 32.2596 21.6212 32.2628C21.3707 33.38 21.2079 34.524 21.1609 35.7C21.0419 38.6539 21.6409 40.7378 22.9931 42.0725C23.9646 43.0319 25.31 43.5385 26.8835 43.5385C29.3075 43.5385 31.7411 42.3406 32.4126 41.9836C34.0532 41.5121 45.0832 37.9927 47.5585 28.0207C48.2233 25.3409 48.6822 20.0063 46.1804 17.0045ZM8.36938 17.3173C8.8561 17.7692 9.82282 18.3022 11.0262 18.3022C11.8417 18.3022 12.7657 18.0574 13.7209 17.3766C15.5262 16.0912 16.9311 16.6616 17.5575 17.0606C17.4342 17.5708 17.2076 18.1157 16.8275 18.6406C15.4796 20.5024 12.7964 21.1613 9.24346 20.4869C4.03113 19.4965 2.34969 15.6498 1.80729 13.2394C2.91369 14.093 4.57785 14.9662 6.75418 14.9662C7.88266 14.9662 9.04762 14.725 10.2164 14.2494C11.7644 13.6192 13.1281 13.2996 14.2691 13.2996C16.5438 13.2996 17.3041 14.5764 17.5254 15.1245C17.5686 15.2321 17.6017 15.3721 17.6286 15.5253C16.4252 15.0478 14.6963 14.9416 12.8401 16.2631C10.9383 17.6187 9.54202 16.4555 9.39322 16.3223C9.10426 16.0538 8.63962 16.0583 8.35642 16.3333C8.07418 16.6082 8.07946 17.0492 8.36938 17.3173ZM44.7035 27.3805C42.4868 36.3092 31.5491 39.3215 31.4416 39.3502C31.3124 39.3835 31.1905 39.4341 31.0763 39.4993C31.0547 39.5112 28.8337 40.7515 26.8835 40.7515C26.1044 40.7515 25.5231 40.5517 25.1065 40.14C25.0551 40.0898 25.0105 40.0264 24.963 39.969C24.3073 39.1022 24.6371 38.6968 25.3494 37.8614C25.6806 37.472 26.056 37.0324 26.283 36.5062C26.4366 36.1505 26.2576 35.7438 25.8832 35.5974C25.5073 35.4501 25.0806 35.6216 24.927 35.9773C24.7811 36.3138 24.5036 36.6394 24.2103 36.9845C24.1753 37.0251 24.1388 37.0675 24.1023 37.1099C24.0788 36.7046 24.0726 36.2723 24.0913 35.8058C24.3639 29.0412 28.4243 23.5142 36.1614 19.3779C38.2681 18.2512 40.0408 17.6803 41.4299 17.6803C42.5032 17.6803 43.2817 18.015 43.8808 18.7336C45.3832 20.5361 45.4321 24.4481 44.7035 27.3805Z" />
				<path d="M50.8088 20.0008C50.4094 20.0642 50.1387 20.4226 50.2059 20.8024C50.2179 20.874 51.4328 28.0535 48.3171 30.8031C48.0204 31.0649 48.0036 31.5058 48.2796 31.7872C48.4236 31.9349 48.62 32.0097 48.8168 32.0097C48.9948 32.0097 49.1748 31.9477 49.315 31.8232C53.0014 28.5697 51.7083 20.8986 51.6521 20.5735C51.5859 20.1941 51.21 19.9342 50.8088 20.0008Z" />
			</svg>

			{AppConfig.site_name}
		</span>
	);
};

export { Logo };
