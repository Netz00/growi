import { AppProps } from 'next/app';

import '../styles/global.css';
import { ThemeContextProvider } from '../components/templates/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeContextProvider>
		<Component {...pageProps} />
	</ThemeContextProvider>
);

export default MyApp;
