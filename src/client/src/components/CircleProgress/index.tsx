import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	progress: {
		width: '100vw',
		height: '100vh',
		backdropFilter: 'blur(3px)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'fixed'
	},
	top: {
		color: '#eee',
		position: 'absolute'
	},
	bottom: {
		animationDuration: '550ms'
	},
	circle: {
		strokeLinecap: 'round'
	}
});

export const CircleProgress = (props: CircleProgressProps) => {
	const classes = useStyles();

	return (
		<div className={classes.progress}>
			<CircularProgress
				variant="determinate"
				className={classes.top}
				size={40}
				thickness={4}
				{...props}
				value={100}
			/>
			<CircularProgress
				variant="indeterminate"
				disableShrink
				className={classes.bottom + ' ' + classes.circle}
				size={40}
				thickness={4}
				{...props}
			/>
		</div>
	);
};
