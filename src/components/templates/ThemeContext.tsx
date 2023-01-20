import { createContext, ReactElement, useEffect, useState } from 'react';

const ThemeContext = createContext({
	isDarkTheme: true,
	toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
	children?: JSX.Element | Array<JSX.Element>;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
	const [isDarkTheme, setIsDarkTheme] = useState(true);

	function isLocalStorageEmpty(): boolean {
		return !localStorage.getItem('isDarkTheme');
	}
	function setValueToLocalStorage(): void {
		localStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
	}

	function toggleDarkClassToBody(): void {
		document!.querySelector('body')!.classList.toggle('dark');
	}

	function toggleThemeHandler(): void {
		const isDarkTheme2: boolean = JSON.parse(
			localStorage.getItem('isDarkTheme')!
		);
		setIsDarkTheme(!isDarkTheme2);
		toggleDarkClassToBody();
		setValueToLocalStorage();
	}

	function initialThemeHandler(): void {
		if (isLocalStorageEmpty()) {
			localStorage.setItem('isDarkTheme', `true`);
			document!.querySelector('body')!.classList.add('dark');
			setIsDarkTheme(true);
		} else {
			const isDarkTheme2: boolean = JSON.parse(
				localStorage.getItem('isDarkTheme')!
			);
			if (isDarkTheme2) document!.querySelector('body')!.classList.add('dark');
			setIsDarkTheme(() => {
				return isDarkTheme2;
			});
		}
	}

	useEffect(() => initialThemeHandler());

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContext;
