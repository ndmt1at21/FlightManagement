import { ADMIN_PATH } from '@src/constants/path';
import { ListSchedule } from '@src/pages/Admin/Schedules/ListSchedule';
import { Router, Route, Switch } from 'react-router-dom';

export const ScheduleRoutes = () => {
	return (
		<Route path={ADMIN_PATH.SCHEDULE.LIST}>
			<ListSchedule />
		</Route>
	);
};
