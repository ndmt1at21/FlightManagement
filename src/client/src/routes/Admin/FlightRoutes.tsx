import { ADMIN_PATH } from '@src/constants/path';
import { AddFlight } from '@src/pages/Admin/Flight/AddFlight';
import { ListFlight } from '@src/pages/Admin/Flight/ListFlight';
import { Route, Switch } from 'react-router-dom';

export const FlightRoutes = () => {
	return (
		<Switch>
			<Route path={ADMIN_PATH.FLIGHT.ADD}>
				<AddFlight />
			</Route>

			<Route path={ADMIN_PATH.FLIGHT.LIST}>
				<ListFlight />
			</Route>
		</Switch>
	);
};
