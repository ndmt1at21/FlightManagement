import { DataGrid, DataGridProps, GridToolbar } from '@material-ui/data-grid';
import { Theme, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type TableProps = {} & DataGridProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		'& .MuiDataGrid-columnsContainer': {
			backgroundColor: theme.palette.primary.light
		},
		'& .Mui-odd.MuiDataGrid-row': {
			backgroundColor: theme.palette.primary.lighter
		}
	}
}));

export const Table = (props: TableProps) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	return (
		<DataGrid
			className={classes.root + ' ' + className}
			components={{ Toolbar: GridToolbar }}
			{...rest}
		/>
	);
};
