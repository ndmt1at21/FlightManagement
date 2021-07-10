import { PATH } from '@src/constants/path';
import { Login } from '@src/pages/Login';
import { Register } from '@src/pages/Register';
import { Route, Switch } from 'react-router-dom';

export const AuthRoutes = () => {
	return (
		<Switch>
			<Route exact path={PATH.LOGIN}>
				<Login />
			</Route>
			<Route exact path={PATH.REGISTER}>
				<Register />
			</Route>
		</Switch>
	);
};
