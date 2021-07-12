import { ADMIN_PATH } from '@src/constants/path';
import { AuthenticatedGuard } from '@src/guards/AuthenticatedGuard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ErrorRoutes } from '../ErrorRoutes';
import { AirportRoutes } from './AirportRoutes';
import { DashBoardRoutes } from './DashBoardRoutes';
import { FlightRoutes } from './FlightRoutes';
import { RevenueRoutes } from './RevenueRoutes';
import { ScheduleRoutes } from './ScheduleRoutes';
import { SettingRoutes } from './SettingRoutes';

export const AdminRoutes = () => {
	return (
		<Switch>
			<Route exact path={ADMIN_PATH.DASHBOARD}>
				<DashBoardRoutes />
			</Route>
			<Route path={ADMIN_PATH.FLIGHT.BASE}>
				<FlightRoutes />
			</Route>
			<Route path={ADMIN_PATH.AIRPORT.BASE}>
				<AirportRoutes />
			</Route>
			<Route path={ADMIN_PATH.SCHEDULE.BASE}>
				<ScheduleRoutes />
			</Route>
			<Route path={ADMIN_PATH.SETTING.BASE}>
				<SettingRoutes />
			</Route>
			<Route path={ADMIN_PATH.REVENUE.BASE}>
				<RevenueRoutes />
			</Route>

			<ErrorRoutes />
		</Switch>
	);
};
