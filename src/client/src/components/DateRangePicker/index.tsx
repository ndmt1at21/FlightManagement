import * as React from 'react';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import { DateRange } from '@material-ui/lab/DateRangePicker';

export const DateRangePicker = () => {
	const [value, setValue] = React.useState<DateRange<Date>>([null, null]);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<StaticDateRangePicker
				displayStaticWrapperAs="desktop"
				value={value}
				onChange={newValue => {
					setValue(newValue);
				}}
				renderInput={(startProps, endProps) => (
					<React.Fragment></React.Fragment>
				)}
			/>
		</LocalizationProvider>
	);
};
