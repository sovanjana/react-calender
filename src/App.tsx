import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Calender from './components/Calender';
import Fields from './components/Fields';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { AppThemeProvider } from './components/widgets/AppThemeProvider';
import TopNav from './components/layout/TopNav';
import AppProvider from './context/AppProvider';

const theme: Theme = createMuiTheme({
	palette: {
		primary: {
			main: '#282c34'
		},
		secondary: {
			main: '#61dafb'
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
