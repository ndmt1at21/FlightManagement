import { MainLayout } from '@src/layouts/MainLayout';
import { HeroBanner } from '@src/components/HeroBanner';
import { FlightSearchPicker } from '@src/components/FlightSearchPicker';
import { makeStyles } from '@material-ui/styles';
import { Carousel } from '@src/components/Carousel';
import { Box } from '@material-ui/core';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
	top: {
		position: 'relative'
	},
	heroBanner: {
		height: 'max(30rem, 90vh)'
	},
	flightSearch: {
		position: 'absolute',
		top: '20px',
		left: '50%',
		transform: 'translateX(-50%)',
		backgroundColor: `${theme.palette.background.paper}99`,
		backdropFilter: 'blur(10px)',
		width: 'clamp(40rem, 80vw, 100rem)',

		[theme.breakpoints.down('sm')]: {
			position: 'relative',
			width: '90%',
			margin: `${theme.spacing(2)} auto`,
			top: 0,
			left: 0,
			transform: 'none'
		}
	}
}));

export const Home = (): JSX.Element => {
	const classes = useStyles();

	return (
		<MainLayout>
			<Box component="section" className={classes.top}>
				<HeroBanner className={classes.heroBanner}>
					<Carousel>
						<img src="/HeroBanner_1.png" alt="promotion-1" />
						<img src="/HeroBanner_2.jpg" alt="promotion-2" />
					</Carousel>
				</HeroBanner>
				<FlightSearchPicker className={classes.flightSearch} />
			</Box>
		</MainLayout>
	);
};
