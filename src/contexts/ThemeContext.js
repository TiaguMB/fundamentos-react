import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext(null);

export function CustomThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	const currentTheme = useMemo(() => {
		return themes[theme] || themes.dark;
	}, [theme]);

	function handleToggleTheme() {
		setTheme(prevState => {
			const newTheme = prevState === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	}

	return (
		<ThemeContext.Provider value={{
			selectedTheme: currentTheme,
			onToggleTheme: handleToggleTheme,
		}}>
			<ThemeProvider theme={currentTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
