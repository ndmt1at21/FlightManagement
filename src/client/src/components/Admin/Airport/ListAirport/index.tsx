import { Box, BoxProps, FormControl, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getAllAirports, postAirport } from '@src/apis/airportApi';
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
import { useEffect } from 'react';
import { AirportModel } from '@src/models/AirportModel';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

type ListAirportProps = {} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'block'
	},
	form: {
		display: 'block'
	}
}));

export const ListAirport = (props: ListAirportProps): JSX.Element => {
	const [airports, setAirports] = useState<AirportModel[]>([]);

	const classes = useStyles();

	useEffect(() => {
		getAllAirports().then(res => {
			console.log(res.data.data.flight);
			setAirports(res.data.data.flight as AirportModel[]);
			console.log(airports);
		});
	}, []);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'thoiGianDung',
			headerName: 'Thời gian dừng'
		},
		{
			field: 'notes',
			headerName: 'Ghi chú'
		}
	];

	return (
		<Box component="div" className={classes.root}>
			<DataGrid
				rows={airports}
				columns={columns}
				pageSize={5}
				checkboxSelection
				disableSelectionOnClick
			/>
		</Box>
	);
};
