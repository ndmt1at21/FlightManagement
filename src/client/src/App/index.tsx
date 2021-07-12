import { ThemeContextProvider } from '@src/context/ThemeProvider';
import { AuthContextProvider } from '@src/context/AuthContextProvider';
import { Routes } from '@src/routes/routes';

export const App = () => {
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<Routes />
			</AuthContextProvider>
		</ThemeContextProvider>
	);
};
