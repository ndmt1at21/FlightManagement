import { makeStyles } from '@material-ui/styles';
import { Paper } from '@components/Paper';
import { RadioGroup } from '@components/RadioGroup';
import { Box } from '@material-ui/system';
import { Theme } from '@material-ui/core';
import { LocationPicker } from '../LocationPicker';
import { DateRangePicker } from '../DateRangePicker';
import { TextField } from '@components/TextField';
import { Button } from '../Button';

type FlightSearchPicker = {} & PaperProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		position: 'relative',
		width: '100%',
		zIndex: 9999
	},
	flightPickerWrapper: {
		margin: '0 auto'
	},
	tripType: {},
	tripInfo: {
		display: 'flex',
		marginTop: theme.spacing(1),
		'& > *': {
			flexGrow: 1,
			'&:not(:last-child)': {
				marginRight: theme.spacing(2)
			}
		},

		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			'& > *': {
				'&:not(:last-child)': {
					marginBottom: theme.spacing(2)
				}
			}
		}
	},
	tripLocation: {},
	searchBtnContainer: {
		marginTop: theme.spacing(1),
		display: 'flex',
		justifyContent: 'flex-end'
	}
}));

export const FlightSearchPicker = ({
	className,
	...rest
}: PaperProps): JSX.Element => {
	const classes = useStyles();

	return (
		<Paper
			aria-label="flight-search"
			className={classes.root + ' ' + className}
			{...rest}
		>
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
					<TextField label="Từ" placeholder="Noi den" autoFocus />
					<TextField label="Đến" />
					<TextField label="Ngày đi" />
					<TextField label="Ngày về" />
					<TextField label="Hành khách" />
				</Box>
				<Box className={classes.searchBtnContainer}>
					<Button color="secondary" variant="contained" size="large">
						Tìm kiếm
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};
