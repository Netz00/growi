import { useContext } from 'react';

import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';
import ThemeContext from './ThemeContext';

export default function ThemeSwitch() {
	const themeCtx: { isDarkTheme?: boolean; toggleThemeHandler: () => void } =
		useContext(ThemeContext);

	function toggleThemeHandler(): void {
		themeCtx.toggleThemeHandler();
	}

	return (
		<>
			<button
				type="button"
				className="p-2 sm:p-2.5 rounded-full border text-base
                        bg-slate-600 text-slate-50 border-slate-800 hover:bg-slate-700
                         dark:border-slate-50 dark:text-zinc-800 dark:bg-slate-100"
				onClick={toggleThemeHandler}
			>
				{themeCtx.isDarkTheme ? <Sun /> : <Moon />}
			</button>
		</>
	);
}
