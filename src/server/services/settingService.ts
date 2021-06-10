import { Setting } from '../models/settingModel';
import { getManager, getConnection } from 'typeorm';

const ShowallSetting = async (): Promise<Setting[]> => {
	const posRepo = getManager().getRepository(Setting);
	return posRepo.find();
};
const updateSetting = async (data: any): Promise<void> => {
    await console.log(data);
    await getConnection()
    .createQueryBuilder()
    .update(Setting)
    .set({ giatri : data.giatri , tinhtrang: data.tinhtrang ? data.tinhtrang : true } )
    .where("id = :id",{id : data.id})
    .execute();
};
const insertSetting = async (): Promise<void> => {
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Setting)
    .values([
        {tenthamso: "Số Sân Bay", kieu: "int", giatri: "10", tinhtrang: true},
        {tenthamso: "Thời gian bay tối thiểu", kieu: "time", giatri: "00:30:00", tinhtrang: true},
        {tenthamso: "Số SBTG tối đa", kieu: "int", giatri: "2", tinhtrang: true},
        {tenthamso: "Thời gian dừng tối thiểu của SBTG", kieu: "time", giatri: "00:10:00", tinhtrang: true},
        {tenthamso: "Thời gian dừng tối đa của SBTG", kieu: "time", giatri: "00:20:00", tinhtrang: true},
        {tenthamso: "Số Hạng Vé", kieu: "int", giatri: "2", tinhtrang: true},
        {tenthamso: "Thời gian đặt vé", kieu: "time", giatri: "24:00:00", tinhtrang: true},
        {tenthamso: "Thời gian hủy vé", kieu: "time", giatri: "24:00:00", tinhtrang: true},
     ])
    .execute();
};

export {ShowallSetting, insertSetting, updateSetting } 