import { Box, BoxProps, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as Logo } from '@public/Logo.svg';
import { TextField } from '@components/TextField';
import { Theme } from '@material-ui/core';
import { Button } from '@components/Button';
import { Link } from '@components/Link';
import { PATH } from '@src/constants/path';
import { useState } from 'react';
import { FormEventHandler } from 'react';
import { LoginFormValues } from '@src/forms/LoginFormValue';
import { useQuery } from '@src/hooks/useQuery';
import { postLogin } from '@src/apis/userApi';
import { CircleProgress } from '../CircleProgress';
import { Redirect } from 'react-router-dom';
import { Snackbar } from '@components/Snackbar';
import { useAuth } from '@src/hooks/useAuth';

type LoginProps = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: 'inherit',
		borderRadius: '5px',
		padding: theme.spacing(5),
		margin: '0 auto',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2)
		}
	},
	logo: {
		width: '7rem'
	},
	form: {
		width: '100%',
		margin: theme.spacing(5, 0),
		'& > *': {
			'&:not(:last-child)': {
				marginBottom: theme.spacing(2)
			}
		}
	},
	title: {
		marginTop: theme.spacing(2),
		fontWeight: theme.typography.fontWeightLight
	},
	actions: {
		marginTop: theme.spacing(5),
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

export const Login = ({ className, ...rest }: LoginProps): JSX.Element => {
	const { isAuthenticated } = useAuth();
	if (isAuthenticated) return <Redirect to={PATH.HOME}></Redirect>;

	const classes = useStyles();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [response, loading, hasError, msgError, setData] =
		useQuery<LoginFormValues>(postLogin);

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		setData({ username, password });
	};

	return (
		<Box component="div" className={classes.root + ' ' + className} {...rest}>
			{loading ? (
				<CircleProgress />
			) : hasError ? (
				<Snackbar message={msgError} type="error" />
			) : (
				response && <Redirect to={PATH.HOME} />
			)}

			<Logo className={classes.logo} />
			<Box component="h1" className={classes.title}>
				Đăng nhập
			</Box>
			<FormControl
				component="form"
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<TextField
					label="Email hoặc tên tài khoản"
					required
					name="username"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<TextField
					label="Mật khẩu"
					type="password"
					required
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<Box component="div" className={classes.actions}>
					<Link to={PATH.REGISTER}>
						<Button color="primary">Tạo tài khoản</Button>
					</Link>

					<Button color="primary" variant="contained" type="submit">
						Đăng nhập
					</Button>
				</Box>
			</FormControl>
		</Box>
	);
};
