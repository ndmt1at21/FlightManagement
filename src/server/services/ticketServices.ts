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
    const passenger1 = new Passenger();
    passenger1.lastName = dataTicket.lastName;
    passenger1.CMND = dataTicket.CMND;
    passenger1.email = dataTicket.email;
    passenger1.phone = dataTicket.phone;
    await getManager().save(passenger1);

    ticket1.id = <number>dataTicket.id;
    ticket1.hangve = <number>dataTicket.hangve;
    ticket1.giatien = <number>dataTicket.giatien; 
    ticket1.idKhachHang = passenger1.id;
    await getManager().save(ticket1);
};
const findTicket = async (email: string, CMND: string): Promise<any> => {
    return new Promise<any>((resolve,rejects) => {
        const query : string = `SELECT T.id, P."lastName", P."CMND", P.phone , T.hangve , T.giatien
        FROM Ticket T join Passenger P on T."idKhachHang" = P.id
        WHERE P.email = '${email}' OR P."CMND" = '${CMND}'`;
        const data = getManager()
    .query(query)
    .then((result) => resolve(result))
    .catch((error) => console.log(error));
    });
}

export {findAllTicket, insertTicket, findTicket}