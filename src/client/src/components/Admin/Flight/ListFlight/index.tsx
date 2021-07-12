import { GridColDef } from '@material-ui/data-grid';
import { getAllFlights } from '@src/apis/flightApi';
import { FlightModel } from '@src/models/FlightModel';
import { TableWithFetch } from '../../TableWithFetch';

export const ListFlight = (): JSX.Element => {
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 100
		},
		{
			field: 'SLGheThuong',
			headerName: 'Số lượng ghê thường',
			width: 300
		},
		{
			field: 'SLGheVip',
			headerName: 'Số lượng ghế VIP',
			width: 300
		},
		{
			field: 'Inter',
			headerName: 'ID Sân bay trung gian',
			width: 400
		}
	];
	return (
		<TableWithFetch
			columns={columns}
			fnApi={getAllFlights()}
			transformData={res => res.data.data.flight as FlightModel[]}
		/>
	);
};
