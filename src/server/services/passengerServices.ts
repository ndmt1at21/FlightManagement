import { FlightSchedule } from '../models/flightScheduleModel';
import { Passenger } from '../models/passengerModel';
import { getManager, getConnection } from 'typeorm';

const findAll = async (): Promise<Passenger[]> => {
	const posRepo = getManager().getRepository(Passenger);
	return posRepo.find();
};
const buyTicket = async (data: any): Promise<void> => {
	await console.log(data);
    
};


export {findAll, buyTicket }