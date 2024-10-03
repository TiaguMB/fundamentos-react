import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';

export default function Header() {
	const { selectedTheme, onToggleTheme } = useContext(ThemeContext);

	const history = useHistory();

	function handleNavigate() {
		history.push('/');
	}

	return (
		<Container>
			<h1>JStack's Blog</h1>
			<button
				type="button"
				onClick={onToggleTheme}
			>
				{selectedTheme === 'dark' ? '🌞' : '🌚'}
			</button>
			<button
				onClick={handleNavigate}
				style={{ color: '#fff' }}
			>
				Navegar
			</button>
		</Container>
	);
}
