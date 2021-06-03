import { ConnectionOptions } from 'typeorm';
import { User } from './models/userModel';
import {Flight} from './models/flightModel';
import {FlightSchedule} from './models/flightScheduleModel';
import {Ticket} from './models/ticketModel';
import {Passenger} from './models/passengerModel';
import {System} from './models/systemModel';
import {Inter_airpot} from './models/Inter_airportModel';
export const ormOptions: ConnectionOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: true,
	logging: false,
	entities: [__dirname + './models/**/*{.ts,.js}', User , Flight, FlightSchedule ,
	 Ticket , Passenger, System, Inter_airpot],
	extra: {
		ssl: {
			rejectUnauthorized: false
		}
	}
};
