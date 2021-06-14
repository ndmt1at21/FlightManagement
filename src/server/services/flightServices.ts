import { Flight } from '../models/flightModel';
import {Interairport} from '../models/Inter_airportModel';
import {Setting} from '../models/settingModel';
import { getManager, getConnection, In } from 'typeorm';

const findAllFlight = async (): Promise<Flight[]> => {
	const posRepo = getManager().getRepository(Flight);
	return posRepo.find();
};

const CheckNumberFlight = (): Promise<number> => {
    return getManager().count(Flight)
}

const insertFlight = async (dataFlight: any): Promise<void> => {
    await console.log(dataFlight);
    const flight = new Flight();
    flight.Inter = [];
    if(dataFlight.Inter){
        dataFlight.Inter.forEach((airport: any,index :number): void => {
            const InterAir = new Interairport(); 
            InterAir.TenSB = airport.TenSB;
            InterAir.ThoiGianDung = airport.ThoiGianDung;
            InterAir.Ghichu = airport.GhiChu ? airport.GhiChu : "";
            flight.Inter[index] = InterAir;
            getManager().save(InterAir);
        });
    }
    flight.SBDen = dataFlight.SBDen;
    flight.SBDi =  dataFlight.SBDi;
    flight.SLGheThuong =  <number>dataFlight.SLGheThuong;
    flight.SLGheVip = <number>dataFlight.SLGheVip;
    await getManager().save(flight);


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

export {findAllFlight, insertFlight, insertDataFlight,CheckNumberFlight }