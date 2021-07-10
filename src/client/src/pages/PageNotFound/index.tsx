import { Typography } from '@material-ui/core';
import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import svg404 from '@public/404.svg';
import { Button } from '@src/components/Button';
import { MainLayout } from '@src/layouts/MainLayout';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		justifyItems: 'center'
	},
	imageContainer: {
		width: '70vmin',
		marginRight: theme.spacing(2)
	},
	image: {
		width: '100%',
		height: '100%'
	},
	button: {
		margin: theme.spacing(3, 0, 10)
	}
}));

export const PageNotFound = (): JSX.Element => {
	const classes = useStyles();

	return (
		<MainLayout>
			<Box component="div" className={classes.root}>
				<Box
					aria-label="image404"
					component="div"
					className={classes.imageContainer}
				>
					<img src={svg404} className={classes.image} />
				</Box>
				<Box component="body">Trang bạn tìm kiếm không khả dụng</Box>
				<Button
					variant="contained"
					color="primary"
					size="large"
					className={classes.button}
				>
					Quay lại trang chủ
				</Button>
			</Box>
		</MainLayout>
	);
};
