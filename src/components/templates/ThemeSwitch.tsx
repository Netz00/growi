import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';

export default function ThemeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<>
			<button
				type="button"
				className="p-2 sm:p-2.5 rounded-full border text-base
                        bg-slate-600 text-slate-50 border-slate-800 hover:bg-slate-700
                         dark:border-slate-50 dark:text-zinc-800 dark:bg-slate-100"
				onClick={() =>
					currentTheme === 'dark' ? setTheme('light') : setTheme('dark')
				}
			>
				{currentTheme === 'dark' ? <Sun /> : <Moon />}
			</button>
		</>
	);
}
