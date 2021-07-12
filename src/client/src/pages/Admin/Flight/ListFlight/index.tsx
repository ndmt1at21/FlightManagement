import { AdminLayout } from '@src/layouts/AdminLayout';
import { ListFlight as CListFlight } from '@src/components/Admin/Flight/ListFlight';

export const ListFlight = (): JSX.Element => {
	return (
		<AdminLayout header="Danh sách chuyến bay">
			<CListFlight />
		</AdminLayout>
	);
};
