import { RevenueFlight } from '@src/pages/Admin/Revenue/RevenueFlight';
import { PageNotFound } from '@src/pages/PageNotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AirportRoutes } from './Admin/AirportRoutes';
import { DashBoardRoutes } from './Admin/DashBoardRoutes';
import { FlightRoutes } from './Admin/FlightRoutes';
import { RevenueRoutes } from './Admin/RevenueRoutes';
import { ScheduleRoutes } from './Admin/ScheduleRoutes';
import { SettingRoutes } from './Admin/SettingRoutes';
import { AuthRoutes } from './AuthRoutes';
import { ErrorRoutes } from './ErrorRoutes';
import { HomeRoutes } from './HomeRoutes';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Route exact path="/">
				<DashBoardRoutes />
			</Route>
			<Route path="/">
				<AirportRoutes />
				<FlightRoutes />
				<ScheduleRoutes />
				<SettingRoutes />
				<RevenueRoutes />
			</Route>
			<Route path="*">
				<ErrorRoutes />
			</Route>
		</BrowserRouter>
	);
};
