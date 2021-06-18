import { Ticket } from '../models/ticketModel';
import { Passenger } from '../models/passengerModel';
import { getManager, getConnection } from 'typeorm';

const findAll = async (): Promise<Passenger[]> => {
	const posRepo = getManager().getRepository(Passenger);
	return posRepo.find();
};

const findPassenger = async (email: string): Promise<any> => {
	return getManager().findOne(
		Passenger,
		{ email: email },
		{ relations: ['books'] }
	);
};
const findTicket = async (id: number): Promise<any> => {
	return getManager().findOne(Ticket, id, { relations: ['fs'] });
};
const getPassenger = async (id: any): Promise<any> => {
	return getManager().findOne(Passenger, id, { relations: ['books'] });
};
const savePassenger = async (KH: any): Promise<void> => {
	getManager().save(KH);
};
const cancelTicket = async (data: any): Promise<any> => {
	await console.log(data);
	return new Promise<any>((resolve, rejects) => {
		const query: string = `DELETE FROM passenger_books_ticket WHERE "passengerId" = ${data.id} AND "ticketId" = ${data.idTicket}`;
		getManager()
			.query(query)
			.then(result => resolve(result))
			.catch(error => console.log('query cancelTicket: ' + error));
	});
};
export {
	findAll,
	findPassenger,
	findTicket,
	cancelTicket,
	getPassenger,
	savePassenger
};
