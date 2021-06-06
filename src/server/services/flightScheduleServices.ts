import { FlightSchedule } from '../models/flightScheduleModel';
import { Flight } from '../models/flightModel';
import { getManager, getConnection } from 'typeorm';

const findAllFSchedule = async (): Promise<any> => {
    return new Promise<any>((resolve,rejects) => {
                const query : string = `SELECT f."SBDi", f."SBDen", fs."KhoiHanh", fs."ThoiGian",
                (f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
                (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
               FROM Flight f join Flight_Schedule fs on f.id = fs."idChuyenBay"`;
                const data = getManager()
            .query(query)
            .then((result) => resolve(result))
            .catch((error) => console.log(error));
            });
};
const insertFSchedule = async (dataSchedule: any): Promise<void> => {
	await console.log(dataSchedule);
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(FlightSchedule)
    .values([
        { idChuyenBay: <number>dataSchedule.idChuyenBay ,ThoiGian: dataSchedule.ThoiGian, KhoiHanh : dataSchedule.KhoiHanh, ThoiGianBay : dataSchedule.ThoiGianBay }, 
     ])
    .execute();
};

const searchFlightSchedule = async (SBDi: string, SBDen: string, KhoiHanh : Date): Promise<any> => {
    return new Promise<any>((resolve,rejects) => {
        const query : string = `SELECT f."SBDi", f."SBDen", fs."KhoiHanh", fs."ThoiGian",
        (f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
        (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
       FROM Flight f join Flight_Schedule fs on f.id = fs."idChuyenBay"
       WHERE f."SBDi" = '${SBDi}' AND f."SBDen" = '${SBDen}' AND fs."KhoiHanh" = '${KhoiHanh}'`;
        const data = getManager()
    .query(query)
    .then((result) => resolve(result))
    .catch((error) => console.log(error));
    });
};
export {findAllFSchedule, insertFSchedule, searchFlightSchedule }