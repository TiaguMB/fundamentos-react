import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext(null);

export function CustomThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	const currentTheme = useMemo(() => {
		return themes[theme] || themes.dark;
	}, [theme]);

	function handleToggleTheme() {
		setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
	}

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{
			selectedTheme: theme,
			onToggleTheme: handleToggleTheme,
		}}>
			<ThemeProvider theme={currentTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
