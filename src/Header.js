import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

export default function Header({
	title,
	children,
	onToggleTheme,
	theme
}) {
	return (
		<>
			<h1>{title}</h1>
			<Button
				onClick={() => onToggleTheme()}
				theme={theme}
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
	onToggleTheme: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired,
};

Header.defaultProps = {
	title: "JStack's blog"
}
