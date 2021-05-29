import { trimString } from '@server/ultis/columnTransform';
import { Column } from 'typeorm';
import { IsEmail, IsMobilePhone } from 'class-validator';

export class Passenger {
	@Column('uuid')
	id: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column({ unique: true, transformer: trimString })
	@IsEmail()
	email: string;

	@Column({ unique: true, transformer: trimString })
	@IsMobilePhone('vi-VN')
	phone: string;
}
