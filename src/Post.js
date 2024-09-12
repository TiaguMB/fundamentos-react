import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

function Post(props) {
	return (
		<>
			<article>
				<PostHeader
					post={{
						id: props.post.id,
						title: props.post.title,
						subtitle: props.post.subtitle,
						read: props.post.read,
					}}
					onRemove={props.onRemove}
				/>
				<br />
				<small>{props.post.subtitle}</small>
				<br />
				Média: {props.post.likes / 2}
			</article>
			<br />
		</>
	);
}

Post.propTypes = {
	onRemove: PropTypes.func.isRequired,
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		likes: PropTypes.number.isRequired,
		read: PropTypes.bool.isRequired,
	}).isRequired,
};

export default Post;
