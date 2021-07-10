import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { ErrorRoutes } from './ErrorRoutes';
import { HomeRoutes } from './HomeRoutes';

export const Routes = () => {
	return (
		<BrowserRouter>
			<HomeRoutes />
			<AuthRoutes />
			<ErrorRoutes />
		</BrowserRouter>
	);
};
