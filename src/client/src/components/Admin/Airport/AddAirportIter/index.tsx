import { Box, BoxProps, FormControl, MenuItem, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { postAirportInter } from '@src/apis/airportApi';
import { Button } from '@src/components/Button';
import { CircleProgress } from '@src/components/CircleProgress';
import { TextField } from '@src/components/TextField';
import { useQuery } from '@src/hooks/useQuery';
import { FormEventHandler } from 'react';
import { useState } from 'react';
import { Snackbar } from '@components/Snackbar';
import { AirportInterFormValues } from '@src/forms/AirportInterFormValues';
import { Select } from '@components/Select';
import { useEffect } from 'react';
import { getAllFlightNames } from '@src/apis/flightApi';
import { FlightModel } from '@src/models/FlightModel';

type AddInterAirport = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'block'
	},
	btnGroup: {
		display: 'flex',
		'& > *': {
			width: '20rem',
			marginRight: theme.spacing(1),
			marginBottom: theme.spacing(2)
		}
	},
	form: {
		display: 'block'
	}
}));

export const AddInterAirport = (props: AddInterAirport): JSX.Element => {
	const [stopTime, setStopTime] = useState<Date | null>(new Date());
	const [airportName, setAirportName] = useState('');
	const [flights, setFlights] = useState<FlightModel[]>([]);

	const [response, loading, hasError, msgError, setData] =
		useQuery<AirportInterFormValues>(postAirportInter);
	const classes = useStyles();

	useEffect(() => {
		getAllFlightNames().then(res => {
			console.log(res);
			setFlights(res.data.data.flight as FlightModel[]);
		});
	}, []);

	const handleSubmit: FormEventHandler = e => {
		e.preventDefault();
		if (!stopTime) return;
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
					<Select>
						{flights.map(flight => (
							<MenuItem key={flight.id} value={flight.id}>
								{/* {flight.TenSanBay} */}
							</MenuItem>
						))}
					</Select>
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
