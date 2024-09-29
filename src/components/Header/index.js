import React, { useContext } from 'react';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
	const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

	return (
		<Container>
			<h1>JStack's Blog</h1>
			<button
				type="button"
				onClick={onToggleTheme}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
		</Container>
	);
}
