import { System } from '../models/systemModel';
import { getManager, getConnection } from 'typeorm';

const ShowallSystem = async (): Promise<System[]> => {
	const posRepo = getManager().getRepository(System);
	return posRepo.find();
};
const updateSystem = async (data: any): Promise<void> => {
    await console.log(data);
    await getConnection()
    .createQueryBuilder()
    .update(System)
    .set({ giatri : data.giatri , tinhtrang: data.tinhtrang ? data.tinhtrang : true } )
    .where("id = :id",{id : data.id})
    .execute();
};
const insertSystem = async (): Promise<void> => {
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(System)
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

export {ShowallSystem, insertSystem, updateSystem }