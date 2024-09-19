import styled from "styled-components";

export const Container = styled.article`
	margin-bottom: 24px;
	opacity: ${({ removed }) => removed ? 0.5 : 1};
	color: ${({ removed }) => removed ? '#f00' : '#fff'};
`;

export const Subtitle = styled.small`
	display: block;
`;

export const Rate = styled.span`
	font-size: 10px;
	opacity: 0.7;
`;
