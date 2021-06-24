import {
	Entity,
	Column,
	BeforeInsert,
	BeforeUpdate,
	AfterLoad,
	PrimaryColumn
} from 'typeorm';
import { trimString } from '../ultis/columnTransform';
import bcrypt from 'bcrypt';
@Entity()
export class User {
	@PrimaryColumn({ generated: 'uuid' })
	id: string;

	@Column({ nullable: true, unique: true })
	Username: string;

	@Column({ nullable: true })
	password: string;

	@Column({ nullable: true })
	lastName: string;

	@Column({ nullable: true, unique: true })
	email: string;

	@Column({ nullable: true, default: 'user' })
	role: string;

	private tempPassword: string;
	@AfterLoad()
	private loadTempPassword(): void {
		this.tempPassword = this.password;
	}

	@BeforeUpdate()
	async encryptPassword(): Promise<void> {
		if (this.tempPassword !== this.password) {
			this.password = await bcrypt.hash(this.password, 10);
		}
	}
	// // Hooks
	@BeforeInsert()
	async trimString(): Promise<void> {
		this.Username = this.Username.toLowerCase().trim();
	}
	// @BeforeUpdate()
}
