import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LocationInputRenderer } from './LocationInputRenderer';

type RoundTripInputRenderer = {
	departDes: LocationTrip;
	returnDes?: LocationTrip;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'row'
	}
});

export const RoundTripInputRenderer = (
	props: RoundTripInputRenderer
): JSX.Element => {
	const { departDes, returnDes, className, onChange } = props;
	const classes = useStyles();

	return (
		<Box aria-label="trip-picker" className={classes.root + ' ' + className}>
			<LocationInputRenderer locTrip={departDes} onChange={onChange} />
			<Box></Box>
			{returnDes && (
				<LocationInputRenderer locTrip={returnDes} onChange={onChange} />
			)}
		</Box>
	);
};
