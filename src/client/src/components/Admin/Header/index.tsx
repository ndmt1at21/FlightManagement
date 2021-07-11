import { Box, BoxProps, useTheme, useMediaQuery } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Link } from '@components/Link';
import { Button } from '@components/Button';

type HeaderProps = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'flex-end'
		},
		logoLink: {
			height: '100%',
			display: 'flex',
			alignItems: 'center',

			[theme.breakpoints.down('sm')]: {
				height: '2rem'
			}
		},
		nav: {
			display: 'flex',
			alignItems: 'center'
		},
		navLink: {
			display: 'flex',
			alignItems: 'center',
			color: theme.palette.text.primary,
			fontWeight: theme.typography.fontWeightBold,
			'&:not(:last-child)': {
				marginRight: theme.spacing(4)
			},
			'&:hover': {
				color: theme.palette.primary.main
			}
		},
		sidebar: {
			width: '5rem'
		}
	})
);

export const Header = ({ className, ...rest }: HeaderProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Box
			component="div"
			open={true}
			className={classes.root + ' ' + className}
			{...rest}
		>
			<Box className={classes.nav}>
				<Box component="div" className={classes.navLink}>
					<Box className={classes.navLink}>Hello</Box>
					<Link to="/logout" className={classes.navLink}>
						<Button color="primary" variant="contained">
							Logout
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
