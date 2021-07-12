import { Box, BoxProps, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	header: {
		paddingBottom: '2rem'
	}
}));

type AdminMainSpaceProps = {
	header?: string;
} & BoxProps;

export const AdminMainSpace = (props: AdminMainSpaceProps): JSX.Element => {
	const { header, children, ...rest } = props;
	const classes = useStyles();

	return (
		<Box component="main" className={classes.root} {...rest}>
			<Box component="h1" className={classes.header}>
				{header}
			</Box>
			{children}
		</Box>
	);
};
