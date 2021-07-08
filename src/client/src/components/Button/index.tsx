import { Button as MButton, ButtonProps, Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		containedPri: {
			'&:active': {
				backgroundColor: theme.palette.primary.darker
			}
		},
		containedSec: {
			'&:active': {
				backgroundColor: theme.palette.secondary.darker
			}
		},
		textOutlinePri: {
			'&:active': {
				backgroundColor: theme.palette.primary.lighter
			}
		},
		textOutlineSec: {
			'&:active': {
				backgroundColor: theme.palette.secondary.lighter
			}
		}
	})
);

export const Button = (props: ButtonProps): JSX.Element => {
	const classes = useStyles();
	return (
		<MButton
			classes={{
				containedPrimary: classes.containedPri,
				containedSecondary: classes.containedSec,
				textPrimary: classes.textOutlinePri,
				textSecondary: classes.textOutlineSec,
				outlinedPrimary: classes.textOutlinePri,
				outlinedSecondary: classes.textOutlineSec
			}}
			{...props}
		>
			{props.children}
		</MButton>
	);
};
