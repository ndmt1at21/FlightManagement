import { GridColDef } from '@material-ui/data-grid';
import { getAllSettings } from '@src/apis/settingApi';
import { SettingModel } from '@src/models/SettingModel';
import { TableWithFetch } from '../../TableWithFetch';

export const ListSetting = (): JSX.Element => {
	const columns: GridColDef[] = [
		{
			field: 'id',
			headerName: 'ID',
			width: 100
		},
		{
			field: 'tenthamso',
			headerName: 'Tên tham số',
			width: 200
		},
		{
			field: 'kieu',
			headerName: 'Kiểu',
			width: 200
		},
		{
			field: 'giatri',
			headerName: 'Giá trị',
			width: 200
		},
		{
			field: 'tinhtrang',
			headerName: 'Tình trạng',
			width: 200
		}
	];
	return (
		<TableWithFetch
			columns={columns}
			fnApi={getAllSettings()}
			transformData={res => res.data.data.data as SettingModel[]}
		/>
	);
};
