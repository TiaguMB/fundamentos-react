import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';
import { Subtitle, Rate, Container } from './styles';

function Post(props) {
	return (
		<Container removed={props.post.removed}>
			<PostHeader
				post={{
					id: props.post.id,
					title: props.post.title,
					subtitle: props.post.subtitle,
					read: props.post.read,
				}}
				onRemove={props.onRemove}
			/>
			<Subtitle>{props.post.subtitle}</Subtitle>
			<Rate>Média: {props.post.likes / 2}</Rate>
		</Container>
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
		removed: PropTypes.bool.isRequired,
	}).isRequired,
};

export default Post;
