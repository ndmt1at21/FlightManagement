import { Setting } from '../models/settingModel';
import { getManager, getConnection } from 'typeorm';

const ShowallSetting = async (): Promise<Setting[]> => {
	const posRepo = getManager().getRepository(Setting);
	return posRepo.find();
};
const getSetting = async (id: number): Promise<any> => {
	return getManager().findOne(Setting, id);
};

const insertSetting = async (): Promise<void> => {
	await getConnection()
		.createQueryBuilder()
		.insert()
		.into(Setting)
		.values([
			{
				tenthamso: 'Số Sân Bay',
				kieu: 'int',
				giatri: '10',
				tinhtrang: true
			},
			{
				tenthamso: 'Thời gian bay tối thiểu',
				kieu: 'time',
				giatri: '00:30',
				tinhtrang: true
			},
			{
				tenthamso: 'Số SBTG tối đa',
				kieu: 'int',
				giatri: '2',
				tinhtrang: true
			},
			{
				tenthamso: 'Thời gian dừng tối thiểu của SBTG',
				kieu: 'time',
				giatri: '00:10',
				tinhtrang: true
			},
			{
				tenthamso: 'Thời gian dừng tối đa của SBTG',
				kieu: 'time',
				giatri: '00:20',
				tinhtrang: true
			},
			{ tenthamso: 'Số Hạng Vé', kieu: 'int', giatri: '2', tinhtrang: true },
			{
				tenthamso: 'Thời gian đặt vé',
				kieu: 'time',
				giatri: '24:00',
				tinhtrang: true
			},
			{
				tenthamso: 'Thời gian hủy vé',
				kieu: 'time',
				giatri: '24:00',
				tinhtrang: true
			}
		])
		.execute();
};

export { ShowallSetting, insertSetting, getSetting };
