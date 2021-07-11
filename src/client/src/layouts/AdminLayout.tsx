import { Header } from '@components/Admin/Header';
import { Footer } from '@src/components/Footer';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AdminSideBar } from '@src/components/Admin/AdminSideBar';
import { AdminMainSpace } from '@src/components/Admin/AdminMainSpace';

type AdminLayoutProps = {
	header?: string;
	children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) => ({
	root: { display: 'flex', width: '100vw' },
	header: {
		margin: '0 2rem',
		height: 'clamp(3rem, 5vw, 5rem)'
	},
	center: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	main: {
		padding: theme.spacing(5)
	}
}));

export const AdminLayout = ({
	header,
	children
}: AdminLayoutProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Box component="div" className={classes.root}>
			<AdminSideBar />
			<Box component="div" className={classes.center}>
				<Header className={classes.header} />
				<AdminMainSpace header={header} className={classes.main}>
					{children}
				</AdminMainSpace>
			</Box>
		</Box>
	);
};
