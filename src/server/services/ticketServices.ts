import { Ticket } from '../models/ticketModel';
import { Passenger } from '../models/passengerModel';
import { getManager, getConnection, Connection, QueryRunner } from 'typeorm';

const findAllTicket = async (): Promise<Ticket[]> => {
	const posRepo = getManager().getRepository(Ticket);
	return posRepo.find();
};
const insertTicket = async (dataTicket: any): Promise<void> => {
	await console.log(dataTicket);
	const ticket1 = new Ticket();

	ticket1.status = dataTicket.status ? dataTicket.status : null;
	ticket1.fs = <number>dataTicket.idCB;
	ticket1.giatien = <number>dataTicket.giatien;
	ticket1.hangve = <number>dataTicket.hangve;
	await getManager()
		.findOne(Ticket, { hangve: dataTicket.hangve })
		.then(data => {
			if (data) {
				ticket1.hangve++;
			}
			getManager().save(ticket1);
		});
};
const checkNumerTicket = async (id: any): Promise<any> => {
	return getManager().count(Ticket, { fs: id });
};
const findTicket = async (id: any): Promise<any> => {
	return getManager().findOne(Ticket, id);
};

const updateTicket = async (ticket: any): Promise<void> => {
	getManager().save(ticket);
};
export {
	findAllTicket,
	insertTicket,
	checkNumerTicket,
	findTicket,
	updateTicket
};
