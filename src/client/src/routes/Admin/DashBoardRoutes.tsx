import { DashBoard } from '@src/pages/Admin/DashBoard';
import { Route, Switch } from 'react-router-dom';

export const DashBoardRoutes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<DashBoard />
			</Route>
		</Switch>
	);
};
