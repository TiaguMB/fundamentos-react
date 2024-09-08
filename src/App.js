import React from "react";

import Post from "./Post";
import Header from "./Header";

export default function App() {
	return (
		<>
			<Header title="JStack's Blog">
				<h2>Posts da semana</h2>
			</Header>

			<hr />

			<Post
				title="Título da notícia 01"
				subtitle="Subtítulo da notícia 01"
			/>
			<Post
				title="Título da notícia 02"
				subtitle="Subtítulo da notícia 02"
			/>
			<Post
				title="Título da notícia 03"
				subtitle="Subtítulo da notícia 03"
			/>
		</>
	);
}
