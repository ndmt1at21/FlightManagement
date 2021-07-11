import { ADMIN_PATH } from '@src/constants/path';
import { ListSetting } from '@src/pages/Admin/Settings/ListSetting';
import { Route } from 'react-router-dom';

export const SettingRoutes = () => {
	return (
		<Route exact path={ADMIN_PATH.SETTING.LIST}>
			<ListSetting />
		</Route>
	);
};
