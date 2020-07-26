import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Calender from './components/Calender';
import Fields from './components/Fields';
import Logo from './components/widgets/Logo';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { AppThemeProvider } from './components/widgets/AppThemeProvider';
import TopNav from './components/layout/TopNav';
import AppProvider from './context/AppProvider';

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			50: '#e5e6e7',
			100: '#bfc0c2',
			200: '#94969a',
			300: '#696b71',
			400: '#484c52',
			500: '#282c34',
			600: '#24272f',
			700: '#1e2127',
			800: '#181b21',
			900: '#0f1015',
			A100: '#5a83ff',
			A200: '#275dff',
			A400: '#003df3',
			A700: '#0036da'
		},
		secondary: {
			50: '#ecfbff',
			100: '#d0f4fe',
			200: '#b0edfd',
			300: '#90e5fc',
			400: '#79e0fc',
			500: '#61dafb',
			600: '#59d6fa',
			700: '#4fd0fa',
			800: '#45cbf9',
			900: '#33c2f8',
			A100: '#ffffff',
			A200: '#ffffff',
			A400: '#d7f3ff',
			A700: '#beecff'
		},
		error: {
			50: '#f9e5e0',
			100: '#f0bdb3',
			200: '#e69280',
			300: '#db664d',
			400: '#d44526',
			500: '#cc2400',
			600: '#c72000',
			700: '#c01b00',
			800: '#b91600',
			900: '#ad0d00',
			A100: '#ffd8d7',
			A200: '#ffa7a4',
			A400: '#ff7571',
			A700: '#ff5d58'
		}
	}
});

export default function App() {
	return (
		<AppThemeProvider theme={theme}>
			<AppProvider>
				<Router>
					<AppContainer>
						<TopNav />
						<MainContainer>
							<Switch>
								<Route exact path='/' component={Fields} />
								<Route exact path='/calender' component={Calender} />
								<Route render={() => <h1>Oh man! You've lost your path...</h1>} />
							</Switch>
						</MainContainer>
					</AppContainer>
				</Router>
			</AppProvider>
		</AppThemeProvider>
	);
}

const MainContainer = styled.main`
	padding: 16px;
`;
const AppContainer = styled.div`
	display: grid;
	grid-template-rows: 64px calc(100vh - 64px);
`;
