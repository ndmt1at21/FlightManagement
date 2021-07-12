import { ADMIN_PATH } from '@src/constants/path';
import { ListSetting } from '@src/pages/Admin/Settings/ListSetting';
import { Route, Switch } from 'react-router-dom';
import { ErrorRoutes } from '../ErrorRoutes';

export const SettingRoutes = () => {
	return (
		<Switch>
			<Route exact path={ADMIN_PATH.SETTING.LIST}>
				<ListSetting />
			</Route>

			<ErrorRoutes />
		</Switch>
	);
};
