import { AdminLayout } from '@src/layouts/AdminLayout';
import { ListSetting as CListComponent } from '@components/Admin/Setting/ListSetting';

export const ListSetting = (): JSX.Element => {
	return (
		<AdminLayout header="Danh sách Cài đặt">
			<CListComponent />{' '}
		</AdminLayout>
	);
};
