import { Box, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { LocationInputRenderer } from './LocationInputRenderer';
import { ReactComponent as Transfer } from '@public/Transfer.svg';

type RoundTripInputRenderer = {
	departDes: LocationTrip;
	returnDes?: LocationTrip;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		position: 'relative'
	},
	inputRight: {
		paddingLeft: theme.spacing(4),
		flex: 1
	},
	inputLeft: {
		flex: 1
	},
	svgTransfer: {
		width: '32px',
		zIndex: 999,
		margin: '0 -16px',
		cursor: 'pointer'
	}
}));

export const RoundTripInputRenderer = (
	props: RoundTripInputRenderer
): JSX.Element => {
	const { departDes, returnDes, className, onChange } = props;
	const classes = useStyles();

	return (
		<Box aria-label="trip-picker" className={classes.root + ' ' + className}>
			<LocationInputRenderer
				locTrip={departDes}
				onChange={onChange}
				className={classes.inputLeft}
			/>
			<Transfer className={classes.svgTransfer} />
			{returnDes && (
				<LocationInputRenderer
					locTrip={returnDes}
					onChange={onChange}
					className={classes.inputRight}
				/>
			)}
		</Box>
	);
};
