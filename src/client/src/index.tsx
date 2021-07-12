import '@src/styles/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider, ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
