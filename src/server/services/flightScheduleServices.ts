import { FlightSchedule } from '../models/flightScheduleModel';
import { Flight } from '../models/flightModel';
import { getManager, getConnection } from 'typeorm';

const findAllFSchedule = async (): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `SELECT f."SBDi", f."SBDen", fs."KhoiHanh", fs."ThoiGian",
                (f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
                (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
               FROM Flight f join Flight_Schedule fs on f.id = fs."idChuyenBay"`;
		const data = getManager()
			.query(query)
			.then(result => resolve(result))
			.catch(error => console.log(error));
	});
};
const insertFSchedule = async (dataSchedule: any): Promise<void> => {
	let fs = new FlightSchedule();
	fs.forCB = <number>dataSchedule.idChuyenBay;
	fs.ThoiGian = dataSchedule.ThoiGian;
	fs.KhoiHanh = dataSchedule.KhoiHanh;
	fs.ThoiGianBay = dataSchedule.ThoiGianBay;
	getManager().save(fs);
};
const getFs = async (id: any): Promise<any> => {
	return getManager().findOne(FlightSchedule, id);
};
const saveFs = async (data: FlightSchedule): Promise<void> => {
	getManager().save(data);
};
const searchFlightSchedule = async (
	SBDi: string,
	SBDen: string,
	KhoiHanh: Date
): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `SELECT f."SBDi", f."SBDen", fs."KhoiHanh", fs."ThoiGian",
        (f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
        (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
       FROM Flight f join Flight_Schedule fs on f.id = fs."idChuyenBay"
       WHERE f."SBDi" = '${SBDi}' AND f."SBDen" = '${SBDen}' AND fs."KhoiHanh" = '${KhoiHanh}'`;
		const data = getManager()
			.query(query)
			.then(result => resolve(result))
			.catch(error => console.log(error));
	});
};
export {
	findAllFSchedule,
	insertFSchedule,
	searchFlightSchedule,
	getFs,
	saveFs
};
