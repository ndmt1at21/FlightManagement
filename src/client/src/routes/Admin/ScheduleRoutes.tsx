import { ADMIN_PATH } from '@src/constants/path';
import { ListSchedule } from '@src/pages/Admin/Schedules/ListSchedule';
import { Router, Route, Switch } from 'react-router-dom';
import { ErrorRoutes } from '../ErrorRoutes';

export const ScheduleRoutes = () => {
	return (
		<Switch>
			<Route exact path={ADMIN_PATH.SCHEDULE.LIST}>
				<ListSchedule />
			</Route>

			<ErrorRoutes />
		</Switch>
	);
};
