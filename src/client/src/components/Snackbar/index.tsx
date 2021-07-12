import {
	Alert,
	SnackbarProps as MSnackbarProps,
	Snackbar as MSnackbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type SnackbarProps = {
	type?: 'success' | 'error';
	message?: string;
} & MSnackbarProps;

const useStyles = makeStyles({
	root: {
		left: '50%',
		bottom: '10px',
		transform: 'translateX(-50%)'
	}
});

export const Snackbar = ({
	message,
	type,
	...rest
}: SnackbarProps): JSX.Element => {
	const classes = useStyles();

	return (
		<MSnackbar
			open
			autoHideDuration={2000}
			className={classes.root}
			{...rest}
		>
			<Alert severity={type}>{message}</Alert>
		</MSnackbar>
	);
};
