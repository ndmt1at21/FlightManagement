import * as React from 'react';
import { TextField } from '@src/components/TextField';
import { Header } from '@src/components/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@src/lib/theme';
import { MainLayout } from '@src/layouts/MainLayout';
import { Home } from '@src/pages/Home';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
};
