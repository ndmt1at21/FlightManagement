import { Ticket } from '../models/ticketModel';
import { getManager, getConnection, Connection, QueryRunner } from 'typeorm';
import { FlightSchedule } from '../models/flightScheduleModel';
import moment from 'moment';
import { Setting } from '../models/settingModel';

const findAllTicket = async (): Promise<Ticket[]> => {
	const posRepo = getManager().getRepository(Ticket);
	return posRepo.find();
};
const updateStatus = async (): Promise<void> => {
	const posRepo = getManager().getRepository(Ticket);
	await posRepo.find({ relations: ['fs'] }).then(arrTicket => {
		arrTicket.forEach(element => {
			if (element.status === true) {
				return;
			}
			let now = moment();
			let setting: any = getManager().getRepository(Setting).findOne(8);
			let limit = moment(setting.giatri, 'HH:mm');
			let timeticket = moment(element.fs.KhoiHanh);

			timeticket.subtract({
				hour: limit.hours(),
				minute: limit.minutes()
			});
			let check = timeticket.diff(now);
			if (check < 0) {
				element.status = true;
				getManager().save(element);
			}
		});
	});
};
const insertTicket = async (dataTicket: any): Promise<void> => {
	await console.log(dataTicket);
	const ticket1 = new Ticket();
	await getManager()
		.findOne(FlightSchedule, dataTicket.idCB)
		.then((fs: any) => {
			ticket1.fs = fs;
			ticket1.giatien = <number>dataTicket.giatien;
			ticket1.hangve = <number>dataTicket.hangve;
			getManager().save(ticket1);
		});
};
const checkNumerTicket = async (id: any): Promise<any> => {
	return getManager().count(Ticket, { fs: id });
};
const findTicket = async (id: any): Promise<any> => {
	return getManager().findOne(Ticket, id, { relations: ['fs'] });
};

const updateTicket = async (ticket: any): Promise<void> => {
	getManager().save(ticket);
};
export {
	findAllTicket,
	insertTicket,
	checkNumerTicket,
	findTicket,
	updateTicket,
	updateStatus
};
