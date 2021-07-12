import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { theme } from '@src/lib/theme';

type ThemeContextProvider = {
	children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
