import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Carousel } from '../Carousel';

type HeroBannerProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%'
	},
	carousel: {}
});

export const HeroBanner = (props: HeroBannerProps): JSX.Element => {
	const { children, className, ...rest } = props;
	const classes = useStyles();

	return (
		<Box
			component="div"
			className={classes.root + ' ' + className}
			{...props}
		>
			{children}
		</Box>
	);
};
