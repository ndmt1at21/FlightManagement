import { ConnectionOptions } from 'typeorm';
import { User } from './models/userModel';

export const ormOptions: ConnectionOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: true,
	logging: false,
	entities: [__dirname + './models/**/*.ts'],
	extra: {
		ssl: {
			rejectUnauthorized: false
		}
	}
};
