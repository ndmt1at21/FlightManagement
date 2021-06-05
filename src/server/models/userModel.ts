import { Entity, Column, BeforeInsert, BeforeUpdate, AfterLoad, PrimaryColumn } from 'typeorm';
import { trimString } from '../ultis/columnTransform';
import bcrypt from 'bcrypt'
@Entity()
export class User {
	@PrimaryColumn({ generated: 'uuid' })
	id: number;

	@Column({ nullable: true, transformer: trimString })
	name: string;

	@Column({nullable : true})
	password: string;

	@Column({ nullable: true, transformer: trimString })
	lastName: string;

	@Column({ nullable: true, unique : true, transformer: trimString })
	email: string;
	
	private tempPassword: string
	@AfterLoad()
    private loadTempPassword(): void {
        this.tempPassword = this.password;
    }

    @BeforeUpdate()
    async encryptPassword(): Promise<void> {
        if (this.tempPassword !== this.password) {
            this.password = await bcrypt.hash(this.password,10);
        }
    }
	// // Hooks
	// @BeforeInsert()
	// @BeforeUpdate()
}
