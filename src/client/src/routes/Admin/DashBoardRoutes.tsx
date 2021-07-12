import { ADMIN_PATH } from '@src/constants/path';
import { DashBoard } from '@src/pages/Admin/DashBoard';
import { Route, Switch } from 'react-router-dom';
import { ErrorRoutes } from '../ErrorRoutes';

export const DashBoardRoutes = () => {
	return (
		<Switch>
			<Route exact path={ADMIN_PATH.DASHBOARD}>
				<DashBoard />
			</Route>
		</Switch>
	);
};
