import { Box, BoxProps, FormControl, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { postAirport } from '@src/apis/airportApi';
import { Button } from '@src/components/Button';
import { CircleProgress } from '@src/components/CircleProgress';
import { TextField } from '@src/components/TextField';
import { AirportFormValues } from '@src/forms/AirportFormValues';
import { useQuery } from '@src/hooks/useQuery';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { Snackbar } from '@components/Snackbar';
import { LocalizationProvider, TimePicker } from '@material-ui/lab';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';

type AddAirport = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'block'
	},
	btnGroup: {
		display: 'flex',
		'& > *': {
			maxWidth: '20rem',
			marginRight: theme.spacing(1),
			marginBottom: theme.spacing(2)
		}
	},
	form: {
		display: 'block'
	}
}));

export const AddAirport = (props: AddAirport): JSX.Element => {
	const [stopTime, setStopTime] = useState<Date | null>(new Date());
	const [airportName, setAirportName] = useState('');

	const [response, loading, hasError, msgError, setData] =
		useQuery<AirportFormValues>(postAirport);

	const classes = useStyles();

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		if (!stopTime) return;

		setData({
			ThoiGianDung: `00:${stopTime.getMinutes()}:${stopTime.getSeconds()}`,
			TenSB: airportName
		});
	};

	return (
		<Box component="div" className={classes.root}>
			{loading ? (
				<CircleProgress />
			) : hasError ? (
				<Snackbar message={msgError} type="error" />
			) : (
				response && (
					<Snackbar message={response.data.message} type="success" />
				)
			)}

			<FormControl
				component="form"
				className={classes.form}
				onSubmit={handleSubmit}
			>
				<Box component="div" className={classes.btnGroup}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<TimePicker
							ampmInClock
							views={['minutes', 'seconds']}
							inputFormat="mm:ss"
							mask="__:__"
							label="Minutes and seconds"
							value={stopTime}
							onChange={newValue => {
								setStopTime(newValue);
							}}
							renderInput={params => <TextField {...params} />}
						/>
					</LocalizationProvider>
					<TextField
						name="airport_name"
						label="Nhập tên sân bay"
						value={airportName}
						onChange={e => setAirportName(e.target.value)}
						required
					></TextField>
				</Box>

				<Button
					color="primary"
					variant="contained"
					type="submit"
					fullWidth={false}
				>
					Tạo
				</Button>
			</FormControl>
		</Box>
	);
};
