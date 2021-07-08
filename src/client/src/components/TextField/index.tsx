import {
	OutlinedTextFieldProps,
	TextField as MTF,
	TextFieldProps
} from '@material-ui/core';
import { MuiTextFieldProps } from '@material-ui/lab/internal/pickers/PureDateInput';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	root: {
		'background-color': 'var(--ifm-textfield-background)'
	}
});

export const TextField = (props: MuiTextFieldProps): JSX.Element => {
	const classes = useStyles();

	return (
		<MTF className={classes.root} {...props} variant="outlined">
			{props.children}
		</MTF>
	);
};
