import React from 'react';
import styled from 'styled-components';

export default function NextArrow(props: { onClick: () => void }) {

	return (
		<SVGButton
			version='1.1'
			id='next'
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
					d='M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		' fill='#fff'
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