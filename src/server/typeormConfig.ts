import { ConnectionOptions } from 'typeorm';
import { User } from './models/userModel';
import {Flight} from './models/flightModel';
import {FlightSchedule} from './models/flightScheduleModel';
import {Ticket} from './models/ticketModel';
import {Passenger} from './models/passengerModel';
import {Setting} from './models/settingModel';
import {Interairport} from './models/Inter_airportModel';
export const ormOptions: ConnectionOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: true,
	logging: false,
	entities: [__dirname + './models/**/*{.ts,.js}', User , Flight, FlightSchedule ,
	 Ticket , Passenger, Setting, Interairport , ],
	extra: {
		ssl: {
			rejectUnauthorized: false
		}
	}
};
