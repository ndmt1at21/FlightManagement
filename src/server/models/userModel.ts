import {
	Entity,
	Column,
	BeforeInsert,
	BeforeUpdate,
	ValueTransformer
} from 'typeorm';

const trimString: ValueTransformer = {
	to: (value: string) => value.toLowerCase().trim(),
	from: (value: string) => value
};

@Entity()
export class User {
	@Column({ generated: 'uuid' })
	id: number;

	@Column({ nullable: false, transformer: trimString })
	name: string;

	@Column({ nullable: false, transformer: trimString })
	lastName: string;

	@Column({ nullable: false, transformer: trimString })
	email: string;

	// // Hooks
	// @BeforeInsert()
	// @BeforeUpdate()
}
