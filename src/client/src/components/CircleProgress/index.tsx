import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	progress: {
		display: 'flex',
		'justify-content': 'center',
		'align-items': 'center'
	},
	backdrop: {
		'background-color': 'var(--ifm-circle-progress-color)',
		width: ' 100%',
		height: '100%'
	},
	top: {
		color: '#eee',
		position: 'absolute'
	},
	bottom: {
		'animation-duration': '550ms',
		color: 'red'
	},
	circle: {
		'stroke-linecap': ' round'
	}
});

export const CircleProgress = (props: CircleProgressProps) => {
	const { backdrop = false } = props;

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
