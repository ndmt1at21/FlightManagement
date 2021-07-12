import { AdminLayout } from '@src/layouts/AdminLayout';
import { AddInterAirport as CAddInterAirport } from '@components/Admin/Airport/AddAirportIter';

export const AddInterAirport = (): JSX.Element => {
	return (
		<AdminLayout header="Thêm Sân bay Trung gian">
			<CAddInterAirport />
		</AdminLayout>
	);
};
