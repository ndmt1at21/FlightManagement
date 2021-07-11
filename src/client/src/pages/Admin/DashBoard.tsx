import { ADMIN_PATH } from '@src/constants/path';
import { Redirect } from 'react-router';

export const DashBoard = (): JSX.Element => {
	return <Redirect to={ADMIN_PATH.AIRPORT.LIST} />;
};
