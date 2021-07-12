import { ADMIN_PATH } from '@src/constants/path';
import { RevenueFlight } from '@src/pages/Admin/Revenue/RevenueFlight';
import { RevenueYear } from '@src/pages/Admin/Revenue/RevenueYear';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ErrorRoutes } from '../ErrorRoutes';

export const RevenueRoutes = () => {
	return (
		<Switch>
			<Route exact path={ADMIN_PATH.REVENUE.FLIGHT}>
				<RevenueFlight />
			</Route>

			<Route exact path={ADMIN_PATH.REVENUE.YEAR}>
				<RevenueYear />
			</Route>

			<ErrorRoutes />
		</Switch>
	);
};
