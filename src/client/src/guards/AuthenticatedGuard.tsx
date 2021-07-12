import { PATH } from '@src/constants/path';
import { useAuth } from '@src/hooks/useAuth';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type AuthenticatedGuardProps = {} & RouteProps;

export const AuthenticatedGuard = ({
	children,
	...rest
}: AuthenticatedGuardProps): JSX.Element => {
	const { isAuthenticated } = useAuth();

	return (
		<Route {...rest}>
			{isAuthenticated ? (
				children
			) : (
				<Redirect to={{ pathname: PATH.LOGIN }} />
			)}
		</Route>
	);
};
