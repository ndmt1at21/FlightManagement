import {
	Box,
	BoxProps,
	useTheme,
	useMediaQuery,
	Drawer
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, createStyles } from '@material-ui/styles';
import { ReactComponent as Logo } from '@public/Logo.svg';
import { Button } from '@components/Button';
import { Link } from '@components/Link';
import { PATH } from '@src/constants/path';

type HeaderProps = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between'
		},
		logoLink: {
			height: '100%',
			display: 'flex',
			alignItems: 'center',

			[theme.breakpoints.down('sm')]: {
				height: '2rem'
			}
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
		},
		sidebar: {
			width: '5rem'
		}
	})
);

export const Header = ({ className, ...rest }: HeaderProps): JSX.Element => {
	const classes = useStyles();

	const theme = useTheme();
	const match = useMediaQuery(theme.breakpoints.down('sm'));

	return match ? (
		<Drawer
			className={classes.sidebar}
			variant="permanent"
			style={{ flexDirection: 'row' }}
		>
			<Link to={PATH.HOME} className={classes.logoLink}>
				<Logo className={classes.logo} />
			</Link>
		</Drawer>
	) : (
		<Box
			component="div"
			open={true}
			className={classes.root + ' ' + className}
			{...rest}
		>
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
					<Link to={PATH.LOGIN} className={classes.navButton}>
						<Button variant="outlined">Đăng nhập</Button>
					</Link>
					<Link to={PATH.REGISTER} className={classes.navButton}>
						<Button variant="contained">Đăng ký</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};
