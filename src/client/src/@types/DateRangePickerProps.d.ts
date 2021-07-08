import { DateRange } from '@material-ui/lab/DateRangePicker/RangeTypes';

type DateRangePickerProps = {
	startText: string;
	endText: string;
	midText: string;
	minDate?: Date;
	maxDate?: Date;
	onChange?: (date: DateRange<Date>) => void;
};
