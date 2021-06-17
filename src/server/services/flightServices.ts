import { Flight } from '../models/flightModel';
import { Interairport } from '../models/Inter_airportModel';
import { NameFlight } from '../models/nameFlightModel';
import { getManager, getConnection } from 'typeorm';

const findAllFlight = async (): Promise<Flight[]> => {
	const posRepo = getManager().getRepository(Flight);
	return posRepo.find();
};
const findAllFlightName = async (): Promise<NameFlight[]> => {
	const posRepo = getManager().getRepository(NameFlight);
	return posRepo.find();
};
const getCountFlight = async (): Promise<number> => {
	const posRepo = getManager().getRepository(NameFlight);
	return posRepo.count();
};
const getFlight = (id: any): Promise<any> => {
	return getManager().findOne(Flight, id, { relations: ['Inter'] });
};

const insertFlight = async (dataFlight: any, flight: Flight): Promise<void> => {
	flight.SBDen = dataFlight.SBDen;
	flight.SBDi = dataFlight.SBDi;
	flight.SLGheThuong = <number>dataFlight.SLGheThuong;
	flight.SLGheVip = <number>dataFlight.SLGheVip;
	await getManager().save(flight);
};

const insertDataFlight = async (): Promise<void> => {
	await getConnection()
		.createQueryBuilder()
		.insert()
		.into(Flight)
		.values([
			{
				SBDi: 'HAN',
				SBDen: 'SGN',
				SLGheThuong: 130,
				SLGheVip: 60
			},
			{
				SBDi: 'SGN',
				SBDen: 'CXQ',
				SLGheThuong: 200,
				SLGheVip: 50
			},
			{
				SBDi: 'PQC',
				SBDen: 'SGN',
				SLGheThuong: 170,
				SLGheVip: 30
			},
			{
				SBDen: 'SGN',
				SBDi: 'CXQ',
				SLGheThuong: 200,
				SLGheVip: 60
			},
			{
				SBDen: 'PQC',
				SBDi: 'SGN',
				SLGheThuong: 140,
				SLGheVip: 25
			}
		])
		.execute();
};
const insertDataName = async (): Promise<void> => {
	await getConnection()
		.createQueryBuilder()
		.insert()
		.into(NameFlight)
		.values([
			{
				id: 'HAN',
				TenSanBay: 'Hà Nội'
			},
			{
				id: 'SGN',
				TenSanBay: 'TP Hồ Chí Minh'
			},
			{
				TenSanBay: 'Phú Quốc',
				id: 'PQC'
			},
			{
				id: 'CXQ',
				TenSanBay: 'Nha Trang'
			},
			{
				id: 'CAH',
				TenSanBay: 'Cà Mau'
			},
			{
				id: 'VTG',
				TenSanBay: 'Vũng Tàu'
			},
			{
				id: 'DAD',
				TenSanBay: 'Đà Nẵng'
			}
		])
		.execute();
};
const insertFlightname = async (id: any, name: any): Promise<void> => {
	let namef = new NameFlight();
	namef.TenSanBay = name;
	namef.id = id;
	getManager().save(namef);
};
export {
	findAllFlight,
	insertFlight,
	insertDataFlight,
	getFlight,
	insertDataName,
	insertFlightname,
	findAllFlightName,
	getCountFlight
};
