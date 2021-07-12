import { Box, BoxProps, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as Logo } from '@public/Logo.svg';
import { TextField } from '@components/TextField';
import { Theme } from '@material-ui/core';
import { Button } from '@components/Button';
import { useState } from 'react';
import { FormEventHandler } from 'react';
import { RegisterFormValues } from '@src/forms/RegisterFormValues';
import { useQuery } from '@src/hooks/useQuery';
import { postLogin, postRegister } from '@src/apis/userApi';
import { CircleProgress } from '../CircleProgress';
import { Snackbar } from '@components/Snackbar';
import { Redirect } from 'react-router-dom';
import { PATH } from '@src/constants/path';

type RegisterProps = {} & BoxProps;

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
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: theme.spacing(2)
	}
}));

export const Register = ({
	className,
	...rest
}: RegisterProps): JSX.Element => {
	const classes = useStyles();

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [response, loading, hasError, msgError, setData] =
		useQuery<RegisterFormValues>(postRegister);

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();

		if (confirmPassword !== password) return;
		setData({ email, lastName: name, password, username });
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
				Đăng ký
			</Box>
			<FormControl
				component="form"
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<TextField
					label="Họ tên"
					name="lastname"
					required
					autoFocus
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<TextField
					label="Tên tài khoản"
					name="username"
					required
					value={name}
					onChange={e => setUsername(e.target.value)}
				/>
				<TextField
					label="Email hoặc tên tài khoản"
					name="email"
					required
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
				<TextField
					label="Mật khẩu"
					required
					type="password"
					name="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<TextField
					label="Nhập lại mật khẩu"
					required
					type="password"
					name="confirm_password"
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					error={password !== confirmPassword}
					helperText={
						password !== confirmPassword &&
						'Mật khẩu xác nhận chưa chính xác'
					}
				/>
			</FormControl>

			<Box component="div" className={classes.actions}>
				<Button color="primary" variant="contained" fullWidth>
					Đăng ký
				</Button>
			</Box>
		</Box>
	);
};
