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
import { Table } from '@src/components/Table';
import { AxiosResponse } from 'axios';

type TableWithFetchProps<T> = {
	columns: GridColDef[];
	fnApi: Promise<AxiosResponse<T>>;
	transformData: (res: AxiosResponse<T>) => T[];
} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'block',
		height: 'clamp(50rem, 70vh, 50rem)'
	},
	form: {
		display: 'block'
	}
}));

export function TableWithFetch<T>(props: TableWithFetchProps<T>): JSX.Element {
	const { columns, fnApi, transformData } = props;

	const [rows, setRows] = useState<T[]>([]);

	const classes = useStyles();

	useEffect(() => {
		fnApi.then(res => setRows(transformData(res)));
	}, []);

	return (
		<Box component="div" className={classes.root}>
			<Table
				rows={rows}
				columns={columns}
				pageSize={5}
				disableSelectionOnClick
			/>
		</Box>
	);
}
