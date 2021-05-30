import { ConnectionOptions } from 'typeorm';
import { User } from './models/userModel';
import {Flight} from './models/flightModel';
import {FlightSchedule} from './models/flightScheduleModel';
export const ormOptions: ConnectionOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: true,
	logging: false,
	entities: [__dirname + './models/**/*.ts', User , Flight, FlightSchedule],
	extra: {
		ssl: {
			rejectUnauthorized: false
		}
	}
};
