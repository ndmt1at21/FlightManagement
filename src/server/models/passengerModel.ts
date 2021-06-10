
import { Column, Entity, JoinTable, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { IsEmail, IsIdentityCard, IsMobilePhone } from 'class-validator';
import {Ticket} from './ticketModel'
@Entity()
export class Passenger {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	lastName: string;

	@Column()
	@IsIdentityCard()
	CMND: string
; 
	@Column({ unique: true })
	@IsEmail()
	email: string;

	@Column({ unique: true })
	@IsMobilePhone('vi-VN')
	phone: string;

	@ManyToMany(() => Ticket, {cascade : true})
	@JoinTable()
	books: Ticket[];
}
