import { getAllAirports } from '@src/apis/airportApi';
import { AirportModel } from '@src/models/AirportModel';
import { GridColDef } from '@material-ui/data-grid';
import { TableWithFetch } from '../../TableWithFetch';

export const ListAirport = (): JSX.Element => {
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 100
		},
		{
			field: 'ThoiGianDung',
			headerName: 'Thời gian dừng',
			width: 100
		},
		{
			field: 'Ghichu',
			headerName: 'Ghi chú',
			width: 300
		}
	];
	return (
		<TableWithFetch
			columns={columns}
			fnApi={getAllAirports()}
			transformData={res => res.data.data.flight as AirportModel[]}
		/>
	);
};
