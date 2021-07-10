import { PATH } from '@src/constants/path';
import { Home } from '@src/pages/Home';
import { Route, Switch } from 'react-router-dom';

export const HomeRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.HOME}>
				<Home />
			</Route>
		</Switch>
	);
};
