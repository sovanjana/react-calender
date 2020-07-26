import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../widgets/Logo';
import { NavLink } from 'react-router-dom';
import { Theme } from '@material-ui/core';

export default function TopNav() {
	return (
		<AppHeader>
			<AppLogo />
			<AppNav>
				<AppNavLink to='/' label='Fields' />
				<AppNavLink to='/calender' label='Calender' />
			</AppNav>
		</AppHeader>
	);
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const AppLogo = styled(Logo)`
	height: 60px;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${spin} infinite 20s linear;
	}
`;
const AppNavLink = styled(({ label, ...rest }) => (
	<NavLink exact activeClassName='active' {...rest}>
		{label}
	</NavLink>
))`
	position: relative;
	color: ${(props: { theme: Theme }) => props?.theme?.palette?.secondary?.main};
	display: flex;
	align-items: center;
	padding: 0 12px;
	text-decoration: unset;
	border-bottom: 0px solid;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 0px;
		background: ${(props: { theme: Theme }) => props?.theme?.palette?.secondary?.main};
		transition: height 240ms ease-in-out 0ms;
	}

	&.active::after {
		height: 4px;
	}
`;
const AppNav = styled.nav`
	height: 100%;
	display: grid;
	gap: 12px;
	grid-template-columns: auto auto;
`;
const AppHeader = styled.header`
	padding: 0 12px;
	display: grid;
	gap: 16px;
	grid-template-columns: auto auto;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props: { theme: Theme }) => props?.theme?.palette?.primary?.main};
`;