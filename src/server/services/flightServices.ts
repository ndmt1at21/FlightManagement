import { Flight } from '../models/flightModel';
import { getManager, getConnection } from 'typeorm';

const findAllFlight = async (): Promise<Flight[]> => {
	const posRepo = getManager().getRepository(Flight);
	return posRepo.find();
};
const insertFlight = async (dataFlight: any): Promise<void> => {
    await console.log(dataFlight);
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Flight)
    .values([
        { SBDi: dataFlight.SBDi, SBDen: dataFlight.SBDen, SLGheThuong: <number>dataFlight.SLGheThuong, SLGheVip :<number>dataFlight.SLGheVip }, 
     ])
    .execute();
};
const insertDataFlight = async (): Promise<void> => {
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Flight)
    .values([
        {SBDi: "Hà Nội", SBDen: "TP.Hồ Chí Minh", SLGheThuong: 130, SLGheVip :60}, 
        {SBDi: "TP. Hồ Chí Minh", SBDen: "Nha Trang", SLGheThuong: 200, SLGheVip :50  },
        {SBDi: "Phú Quốc", SBDen: "TP.Hồ Chí Minh", SLGheThuong: 170, SLGheVip :30   },
        {SBDen: "Hà Nội", SBDi: "TP.Hồ Chí Minh", SLGheThuong: 100, SLGheVip :50  }, 
        {SBDen: "TP. Hồ Chí Minh", SBDi: "Nha Trang", SLGheThuong: 200, SLGheVip :60  },
        {SBDen: "Phú Quốc", SBDi: "TP.Hồ Chí Minh", SLGheThuong: 140, SLGheVip :25   },
     ])
    .execute();
};

export {findAllFlight, insertFlight, insertDataFlight }