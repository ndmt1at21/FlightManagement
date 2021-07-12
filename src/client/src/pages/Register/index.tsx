import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Register as CRegister } from '@src/components/Register';
import { MainLayout } from '@src/layouts/MainLayout';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	registerForm: {
		width: 'clamp(25rem, 30vw, 30rem)',

		backgroundColor: theme.palette.background.paper,
		border: `1px solid ${theme.palette.primary.main}`,
		margin: theme.spacing(5, 0, 10),

		[theme.breakpoints.down('sm')]: {
			border: 0,
			width: '100%',
			height: '100%'
		}
	}
}));

export const Register = (): JSX.Element => {
	const classes = useStyles();

	return (
		<MainLayout>
			<Box component="div" className={classes.root}>
				<CRegister className={classes.registerForm} />
			</Box>
		</MainLayout>
	);
};
