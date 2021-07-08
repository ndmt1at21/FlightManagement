import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type HeroBannerProps = {
	src: string;
};

const useStyles = makeStyles({
	root: {
		height: 'max(30rem, 90vh)'
	},
	imgHero: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	}
});

export const HeroBanner = (props: HeroBannerProps): JSX.Element => {
	const { src } = props;
	const classes = useStyles();

	return (
		<Box component="div" className={classes.root}>
			<img src={src} alt="HeroBanner" className={classes.imgHero}></img>
		</Box>
	);
};
