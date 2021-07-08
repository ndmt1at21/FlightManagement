import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from '../Link';
import { ReactComponent as Copyright } from '@public/Copyright.svg';

const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		backgroundColor: theme.palette.background.footer,
		height: '10rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	links: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight: theme.typography.fontWeightBold,
		marginBottom: theme.spacing(1)
	},
	link: {
		color: theme.palette.text.contrast,
		textDecoration: 'none',
		'&:not(:last-child)': {
			marginRight: theme.spacing(10)
		},
		'&:hover': {
			color: theme.palette.text.secondary
		}
	},
	copyright: {
		color: theme.palette.text.secondary,
		fontSize: '0.75rem',
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		stroke: theme.palette.text.secondary,
		height: '1rem',
		marginRight: theme.spacing(1)
	}
}));

export const Footer = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="footer" className={classes.footer}>
			<Box component="div">
				<Box component="div" className={classes.links}>
					<Link to="/about" className={classes.link}>
						About
					</Link>
					<a
						href="https://github.com/ndmt1at21/FlightManagement"
						className={classes.link}
					>
						Github
					</a>
					<Link to="https://facebook.com" className={classes.link}>
						Liên hệ
					</Link>
				</Box>
				<Box component="div" className={classes.copyright}>
					<Copyright className={classes.icon}></Copyright>
					<Box component="span">All right reserved</Box>
				</Box>
			</Box>
		</Box>
	);
};
