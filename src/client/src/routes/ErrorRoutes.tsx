import { ADMIN_PATH, PATH } from '@src/constants/path';
import { PageNotFound } from '@src/pages/PageNotFound';
import { Route, Switch } from 'react-router-dom';

export const ErrorRoutes = () => {
	return (
		<Switch>
			<Route exact path="*">
				<PageNotFound />
			</Route>
		</Switch>
	);
};
