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
const NumberChair = async (
	id: any,
	hangve: any,
	status: number
): Promise<any> => {
	getManager()
		.findOne(FlightSchedule, id)
		.then((fs: any) => {
			if (hangve % 2 === 1) {
				fs.SoGheDatThuong = fs.SoGheDatThuong + status;
			} else {
				fs.SoGheDatVip = fs.SoGheDatVip + status;
			}
			getManager().save(fs);
		})
		.catch(error => console.log(error));
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
const revenueFlight = async (): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `SELECT f.id, f."sBDenId", f."sBDiId", (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoVe,
		((fs."SoGheDatThuong" + fs."SoGheDatVip")*100)/(f."SLGheThuong" + f."SLGheVip") as TiLe
		FROM Flight f join Flight_Schedule fs on f.id = fs."forCBId"
		WHERE fs."SoGheDatThuong" + fs."SoGheDatVip" >= 1
		`;
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
	NumberChair,
	revenueFlight
};
