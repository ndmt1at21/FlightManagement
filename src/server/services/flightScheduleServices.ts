import { FlightSchedule } from '../models/flightScheduleModel';
import { getManager, getConnection } from 'typeorm';
const findAllFSchedule = async (): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `SELECT nf1.id as SBDiID, nf2.id as SBDenID, nf1."TenSanBay" as TenSBDi, nf2."TenSanBay" as TenSBDen, temp."KhoiHanh", temp."ThoiGian", temp."ThoiGianBay"
		FROM Name_Flight nf1, Name_Flight nf2,(SELECT f."sBDiId" as sbdi, f."sBDenId" as sbden, fs."KhoiHanh", fs."ThoiGian",fs."ThoiGianBay",
													(f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
													(fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
													   FROM Flight f join Flight_Schedule fs on f.id = fs."forCBId") AS temp
		WHERE nf1.id = temp.sbdi AND nf2.id = temp.sbden
		LIMIT 10`;
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
	KhoiHanh: string
): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `	   SELECT nf1.id as SBDiID, nf2.id as SBDenID, nf1."TenSanBay" as TenSBDi, nf2."TenSanBay" as TenSBDen, temp."KhoiHanh", temp."ThoiGian", temp."ThoiGianBay",
		temp.soghetrong, temp.soghedat
		 FROM Name_Flight nf1, Name_Flight nf2,(SELECT f."sBDiId" as sbdi, f."sBDenId" as sbden, fs."KhoiHanh", fs."ThoiGian",fs."ThoiGianBay",
												 (f."SLGheThuong" + f."SLGheVip" - fs."SoGheDatThuong" - fs."SoGheDatVip") as SoGheTrong,
												 (fs."SoGheDatThuong" + fs."SoGheDatVip") as SoGheDat
													FROM Flight f join Flight_Schedule fs on f.id = fs."forCBId"
													WHERE f."sBDiId" = '${SBDi}' AND f."sBDenId" = '${SBDen}' AND fs."KhoiHanh" = '${KhoiHanh}') AS temp
		 WHERE nf1.id = temp.sbdi AND nf2.id = temp.sbden`;
		const data = getManager()
			.query(query)
			.then(result => resolve(result))
			.catch(error => console.log(error));
	});
};
const revenueFlight = async (): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `
		SELECT f.id, f."sBDenId", f."sBDiId", sum(temp."sove") as SoVe,(sum(temp."sove")*100)/(f."SLGheThuong" + f."SLGheVip") as Tile, sum(temp."doanhthu") as DoanhThu
		FROM Flight f join (SELECT fs.id,sum(temp."sove") as SoVe,sum(temp."doanhthu") as DoanhThu, fs."forCBId" as idcb
							FROM Flight_Schedule fs,(SELECT tk.id, tk.hangve,tk.giatien, count(book."passengerId") as SoVe,
							count(book."passengerId")*tk.giatien as DoanhThu,tk."fsId" as idfs
							from Ticket tk join passenger_books_ticket book on tk.id = book."ticketId"
							GROUP BY tk.id) AS temp
					WHERE temp.idfs = fs.id
					GROUP BY fs.id) AS temp on f.id = temp.idcb
		GROUP BY f.id
		`;
		const data = getManager()
			.query(query)
			.then(result => resolve(result))
			.catch(error => console.log(error));
	});
};

const revenueFlightYear = async (year: any): Promise<any> => {
	return new Promise<any>((resolve, rejects) => {
		const query: string = `
		SELECT temp.thang, count(temp.id) as SoCB, sum(temp.doanhthu) as DoanhThu, sum(temp.tile), temp.nam
		FROM (SELECT temp.id,sum(temp."sove") as SoVe,sum(temp."doanhthu") as DoanhThu,F.id as Flightid ,sum(temp."sove")*100/(F."SLGheThuong" + F."SLGheVip") as TiLe,
 				temp."thang" as Thang,  temp."nam" as Nam
			  FROM (SELECT fs.id as id,sum(temp."sove") as SoVe,sum(temp."doanhthu") as DoanhThu, fs."forCBId" as idcb,
 				EXTRACT(MONTH FROM fs."KhoiHanh") as Thang,  EXTRACT(YEAR FROM fs."KhoiHanh") as Nam
				FROM Flight_Schedule fs,(SELECT tk.id, tk.hangve,tk.giatien, count(book."passengerId") as SoVe,
										count(book."passengerId")*tk.giatien as DoanhThu,tk."fsId" as idfs
										from Ticket tk join passenger_books_ticket book on tk.id = book."ticketId"
										GROUP BY tk.id) AS temp
				WHERE temp.idfs = fs.id
				GROUP BY fs.id) as temp, Flight F
			WHERE F.id = temp.idcb and Nam = ${year}
			GROUP BY TEMP.id, F.id,temp."thang",  temp."nam") AS temp
		GROUP BY temp.thang, temp.nam
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
	revenueFlight,
	revenueFlightYear
};
