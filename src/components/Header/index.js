import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import { ThemeContext } from '../../context/ThemeContext';

const Title = styled.h1`
	color: #527BF3;
`;

export default function Header({
	title,
	children,
}) {
	const { onToggleTheme } = useContext(ThemeContext);

	return (
		<>
			<Title>{title}</Title>
			<Button
				onClick={onToggleTheme}
			>
				Mudar tema
			</Button>
			{children}
		</>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

Header.defaultProps = {
	title: `JStack's blog`
}
