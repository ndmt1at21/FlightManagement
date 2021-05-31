
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsIdentityCard, IsMobilePhone } from 'class-validator';

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
}
