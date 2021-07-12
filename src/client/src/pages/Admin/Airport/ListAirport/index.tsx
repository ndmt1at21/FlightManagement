import { AdminLayout } from '@src/layouts/AdminLayout';
import { ListAirport as CListAirport } from '@components/Admin/Airport/ListAirport';

export const ListAirport = (): JSX.Element => {
	return (
		<AdminLayout header="Danh sách sân bay">
			<CListAirport />
		</AdminLayout>
	);
};
