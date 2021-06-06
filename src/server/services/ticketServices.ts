import { Ticket } from '../models/ticketModel';
import {Passenger} from '../models/passengerModel'
import { getManager, getConnection, Connection, QueryRunner } from 'typeorm';


const findAllTicket = async (): Promise<Ticket[]> => {
	const posRepo = getManager().getRepository(Ticket);
	return posRepo.find();
};
const insertTicket = async (dataTicket: any): Promise<void> => {
    await console.log(dataTicket);
    const ticket1 = new Ticket();

    ticket1.hangve = <number>dataTicket.hangve;
    ticket1.giatien = <number>dataTicket.giatien;
    ticket1.status = dataTicket.status ? dataTicket.status : null;
    ticket1.fs = <number>dataTicket.id;
    //ticket1.idKhachHang = passenger1.id;
    await getManager().save(ticket1);
}; 


export {findAllTicket, insertTicket}