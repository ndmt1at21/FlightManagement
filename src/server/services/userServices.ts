import { User } from '../models/userModel';
import { getManager, getConnection, getRepository, Equal, Like } from 'typeorm';
import bcrypt from 'bcrypt';
const findAllUser = async (): Promise<User[]> => {
	const posRepo = getManager().getRepository(User);
	return posRepo.find();
};
const comparePassword = (password: string, hash: string): boolean => {
	return bcrypt.compareSync(password, hash);
};
const getUser = async (
	username: string,
	email: string
): Promise<User | undefined> => {
	const posRepo = getManager().getRepository(User);
	console.log(username + '-' + email);
	username = username ? username : '';
	email = email ? email : '';
	return posRepo.findOne({
		where: [{ Username: Equal(username) }, { email: Equal(email) }]
	});
};
const insertDataUser = async (): Promise<void> => {
	await getConnection()
		.createQueryBuilder()
		.insert()
		.into(User)
		.values([
			{
				Username: 'admin',
				password: await bcrypt.hash('admin123', 10),
				lastName: 'Admin',
				email: 'admin123@gmail.com',
				role: 'admin'
			},
			{
				Username: 'user1',
				password: await bcrypt.hash('123456789', 10),
				lastName: 'User1',
				email: 'user1@gmail.com',
				role: 'user'
			},
			{
				Username: 'user2',
				password: await bcrypt.hash('123456789', 10),
				lastName: 'User2',
				email: 'user2@gmail.com',
				role: 'user'
			}
		])
		.execute();
};
export { findAllUser, insertDataUser, getUser, comparePassword };
