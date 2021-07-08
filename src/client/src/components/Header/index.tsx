import { Box } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ReactComponent as Logo } from '@public/Logo.svg';
import { Button } from '@components/Button';
import { Link } from '@components/Link';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			margin: '0 clamp(0.5rem, -2.65rem + 11vw, 10rem)',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			height: 'clamp(3rem, 5vw, 5rem)'
		},
		logoLink: {
			height: '100%',
			display: 'flex',
			alignItems: 'center'
		},
		logo: {
			height: '50%'
		},
		nav: {
			display: 'flex',
			alignItems: 'center'
		},
		navLink: {
			color: theme.palette.text.primary,
			fontWeight: theme.typography.fontWeightBold,
			'&:not(:last-child)': {
				marginRight: theme.spacing(4)
			},
			'&:hover': {
				color: theme.palette.primary.main
			}
		},
		navButton: {
			'&:not(:last-child)': {
				marginRight: theme.spacing(1)
			}
		}
	})
);

export const Header = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="header" className={classes.root}>
			<Link to="/" className={classes.logoLink}>
				<Logo className={classes.logo} />
			</Link>
			<Box className={classes.nav}>
				<Box component="div" className={classes.navLink}>
					<Link to="/flightManage" className={classes.navLink}>
						Quản lý chuyến bay
					</Link>
					<Link to="/checkIn" className={classes.navLink}>
						Check-in
					</Link>
				</Box>
				<Box component="div">
					<Link to="/login" className={classes.navButton}>
						<Button variant="outlined">Đăng nhập</Button>
					</Link>
					<Link to="/register" className={classes.navButton}>
						<Button variant="contained">Đăng ký</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
