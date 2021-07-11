import { ADMIN_PATH } from '@src/constants/path';
import { AddAirport } from '@src/pages/Admin/Airport/AddAirport';
import { AddInterAirport } from '@src/pages/Admin/Airport/AddInterAirport';
import { ListAirport } from '@src/pages/Admin/Airport/ListAirport';
import { ListInterAirport } from '@src/pages/Admin/Airport/ListInterAirport';
import { Route, Switch } from 'react-router-dom';

export const AirportRoutes = () => {
	const components = [
		<ListAirport />,
		<AddAirport />,
		<ListInterAirport />,
		<AddInterAirport />
	];

	return (
		<Switch>
			<Route exact path={ADMIN_PATH.AIRPORT.LIST}>
				<ListAirport />
			</Route>

			<Route exact path={ADMIN_PATH.AIRPORT.ADD}>
				<AddAirport />
			</Route>

			<Route exact path={ADMIN_PATH.AIRPORT.LIST_INTER}>
				<ListInterAirport />
			</Route>

			<Route exact path={ADMIN_PATH.AIRPORT.ADD_INTER}>
				<AddInterAirport />
			</Route>
		</Switch>
	);
};
