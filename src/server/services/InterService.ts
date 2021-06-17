import { Interairport } from '../models/Inter_airportModel';
import { getManager } from 'typeorm';
import { getFlight } from './flightServices';

const findAllInter = async (): Promise<Interairport[]> => {
	const posRepo = getManager().getRepository(Interairport);
	return posRepo.find({ relations: ['TenSB'] });
};
const getInter = (id: any): Promise<any> => {
	return getManager().findOne(Interairport, id);
};
const insertInterFlight = async (airport: any): Promise<void> => {
	const InterAir = new Interairport();
	InterAir.TenSB = airport.TenSB;
	InterAir.ThoiGianDung = airport.ThoiGianDung;
	InterAir.Ghichu = airport.GhiChu ? airport.GhiChu : '';
	await getManager().save(InterAir);
};
const FlightInterAirport = async (idCB: any, idInter: any): Promise<void> => {
	await getInter(idInter).then(Inter => {
		getFlight(idCB).then(flight => {
			console.log(flight.Inter);
			console.log(Inter);
			if (flight.Inter === []) {
				flight.Inter = [Inter];
			} else {
				flight.Inter.push(Inter);
			}
			getManager().save(flight);
		});
	});
};
export { getInter, findAllInter, FlightInterAirport, insertInterFlight };
