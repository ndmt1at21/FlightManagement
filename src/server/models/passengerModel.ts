<<<<<<< HEAD
import { IsEmail, IsIdentityCard, IsMobilePhone } from 'class-validator';
import {
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from 'typeorm';
=======
import {
	Column,
	Entity,
	JoinTable,
	PrimaryGeneratedColumn,
	ManyToMany
} from 'typeorm';
import { IsEmail, IsIdentityCard, IsMobilePhone } from 'class-validator';
>>>>>>> 2399988cba879993488d5ac53582a4a90c89e931
import { Ticket } from './ticketModel';
@Entity()
export class Passenger {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	lastName: string;

	@Column()
	@IsIdentityCard()
	CMND: string;
	@Column({ unique: true })
	@IsEmail()
	email: string;

	@Column({ unique: true })
	@IsMobilePhone('vi-VN')
	phone: string;

	@ManyToMany(() => Ticket, { cascade: true })
	@JoinTable()
	books: Ticket[];
}
