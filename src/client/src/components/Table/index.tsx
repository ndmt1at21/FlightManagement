import * as React from 'react';
import { DataGrid, DataGridProps, GridToolbar } from '@material-ui/data-grid';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type TableProps = {} & DataGridProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	header: {
		backgroundColor: theme.palette.primary.darker
	}
}));

export const Table = (props: TableProps) => {
	const { className, ...rest } = props;
	const classes = useStyles();

	return (
		<DataGrid
			classes={{ columnHeader: classes.header }}
			className={classes.root + ' ' + className}
			{...rest}
		/>
	);
};
