import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
	const theme = props.theme;

	return (
		<button
			onClick={props.onClick}
			style={{
				color: theme === "dark" ? "#fff" : "#000",
				background: theme === "dark" ? "#000" : "#fff",
			}}
		>
			{props.children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
	theme: PropTypes.string.isRequired,
}

export default Button
