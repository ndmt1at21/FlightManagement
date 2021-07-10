import {
	Box,
	FilledTextFieldProps,
	TextField as MTF,
	Theme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import { useState } from 'react';

type TextFieldProps = {} & Omit<FilledTextFieldProps, 'variant' | 'InputProps'>;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		borderRadius: '5px',
		overflow: 'hidden'
	},
	border: {
		borderRadius: '5px',
		border: `1px solid`,
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: '100%',
		height: '100%',
		pointerEvents: 'none'
	},
	borderNormal: {
		borderColor: `${theme.palette.grey[100]}`
	},
	borderFocus: {
		borderWidth: '2px'
	},
	borderFocusNormal: {
		borderColor: `${theme.palette.primary.main}`
	},
	borderError: {
		borderColor: theme.palette.error.main
	},
	borderSuccess: {
		borderColor: theme.palette.success.main
	}
}));

export const TextField = ({
	className,
	children,
	error,
	...rest
}: TextFieldProps): JSX.Element => {
	const classes = useStyles();

	const [isFocused, setFocus] = useState(false);
	return (
		<MTF
			className={classes.root + ' ' + className}
			fullWidth
			variant="filled"
			InputProps={{
				disableUnderline: true,
				endAdornment: (
					<Box
						component="div"
						className={cx(
							classes.border,
							{ [classes.borderFocus]: isFocused },
							{ [classes.borderNormal]: !error && !isFocused },
							{ [classes.borderError]: error },
							{ [classes.borderFocusNormal]: !error && isFocused }
						)}
					></Box>
				)
			}}
			{...rest}
			error={error}
			onBlur={() => setFocus(false)}
			onFocus={() => setFocus(true)}
		>
			{children}
		</MTF>
	);
};
