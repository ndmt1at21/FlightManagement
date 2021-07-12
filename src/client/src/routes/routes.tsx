import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorRoutes } from './ErrorRoutes';
import { HomeRoutes } from './HomeRoutes';

import { AuthenticatedGuard } from '@src/guards/AuthenticatedGuard';
import { AdminRoutes } from './Admin/AdminRoutes';
import { Login } from '@src/pages/Login';
import { Register } from '@src/components/Register';
import { PublicRoutes } from './PublicRoutes';
import { ADMIN_PATH, PATH } from '@src/constants/path';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={ADMIN_PATH.DASHBOARD}>
					<AdminRoutes />
				</Route>
				<Route path={PATH.HOME}>
					<PublicRoutes />
				</Route>
				<ErrorRoutes />
			</Switch>
		</BrowserRouter>
	);
};
