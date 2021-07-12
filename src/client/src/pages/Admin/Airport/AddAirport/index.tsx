import { AdminLayout } from '@src/layouts/AdminLayout';
import { AddAirport as CAddAirport } from '@src/components/Admin/Airport/AddAirport';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@src/components/TextField';
import { Box, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
	main: {}
}));

export const AddAirport = (): JSX.Element => {
	const classes = useStyles();

	return (
		<AdminLayout header="Thêm Sân bay">
			<Box component="div" className={classes.main}></Box>
			<CAddAirport />
		</AdminLayout>
	);
};
