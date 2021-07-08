import '@src/styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
