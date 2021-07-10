import { Box, BoxProps, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as Logo } from '@public/Logo.svg';
import { TextField } from '@components/TextField';
import { Theme } from '@material-ui/core';
import { Button } from '@components/Button';

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
				marginBottom: theme.spacing(1)
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
		justifyContent: 'space-between'
	}
}));

export const Register = ({
	className,
	...rest
}: RegisterProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.root + ' ' + className} {...rest}>
			<Logo className={classes.logo} />
			<Box component="h1" className={classes.title}>
				Đăng nhập
			</Box>
			<FormControl component="form" className={classes.form}>
				<TextField label="Email hoặc tên tài khoản" required />
				<TextField label="Mật khẩu" required />
				<TextField label="Mật khẩu" required />
			</FormControl>

			<Box component="div" className={classes.actions}>
				<Button color="primary" variant="contained">
					Đăng ký
				</Button>
			</Box>
		</Box>
	);
};
