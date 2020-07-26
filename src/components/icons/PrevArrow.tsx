import React from 'react';
import styled from 'styled-components';

export default function PrevArrow(props: { onClick: () => void }) {
	return (
		<SVGButton
			version='1.1'
			id='prev'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			height='16px'
			viewBox='0 0 477.175 477.175'
			enableBackground='new 0 0 477.175 477.175'
			preserveAspectRatio='none'
			onClick={props.onClick}
		>
			<g>
				<path
					d='M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z'
					fill='#fff'
				/>
			</g>
		</SVGButton>
	);
}

const SVGButton = styled.svg`
	padding: 8px;
	border-radius: 30px;
	cursor: pointer;
	background: #282c34;
	transition: opacity 200ms ease-in-out;

	&:hover {
		opacity: 0.85;
	}
`;
