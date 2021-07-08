import { makeStyles } from '@material-ui/styles';
import { Paper } from '@components/Paper';
import { RadioGroup } from '@components/RadioGroup';
import { Box } from '@material-ui/system';
import { Theme } from '@material-ui/core';
import { LocationPicker } from '../LocationPicker';
import { DateRangePicker } from '../DateRangePicker';
import { TextField } from '../TextField';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'relative',
		margin: '0 auto',
		marginTop: theme.spacing(-5),
		width: 'clamp(50rem, 80vw, 100rem)',
		zIndex: 9999,
		boxShadow: ''
	},
	flightPickerWrapper: {
		margin: '0 auto'
	},
	tripType: {},
	tripInfo: {
		display: 'flex',

		'& > *': {
			flexGrow: 1,
			'&:not(:last-child)': {
				marginRight: theme.spacing(2)
			}
		}
	},
	tripLocation: {}
}));

export const FlightSearchPicker = (): JSX.Element => {
	const classes = useStyles();

	return (
		<Paper aria-label="flight-search" className={classes.root}>
			<Box component="div" className={classes.flightPickerWrapper}>
				<Box component="div" className={classes.tripType}>
					<RadioGroup
						ariaLabel="trip-type"
						name="trip-type"
						radioData={[
							{ label: 'Một chiều', value: 'Một chiều' },
							{ label: 'Khứ hồi', value: 'Khứ hồi' }
						]}
					/>
				</Box>
				<Box
					aria-label="book-trip"
					component="div"
					className={classes.tripInfo}
				>
					<TextField label="Từ" />
					<TextField label="Đến" />
					<TextField label="Ngày đi" />
					<TextField label="Ngày về" />
					<TextField label="Hành khách" />
				</Box>
			</Box>
		</Paper>
	);
};
