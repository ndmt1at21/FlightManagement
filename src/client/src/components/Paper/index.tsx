import { makeStyles } from '@material-ui/styles';
import { Box, BoxProps, Theme } from '@material-ui/core';

type Paper = BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: '#fff',
		boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
		padding: theme.spacing(2),
		borderRadius: '10px'
	}
}));

export const Paper = (props: Paper): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.root + ' ' + props.className}>
			{props.children}
		</Box>
	);
};
