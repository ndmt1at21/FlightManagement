import { Theme } from '@material-ui/core';
import { Link as MLink, LinkProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		transition: theme.transitions.create('color', {
			duration: theme.transitions.duration.shortest
		})
	}
}));

export const Link = (props: LinkProps & { to: string }) => {
	const classes = useStyles();

	return (
		<MLink
			component={NavLink}
			{...props}
			className={classes.root + ' ' + props.className}
		></MLink>
	);
};
