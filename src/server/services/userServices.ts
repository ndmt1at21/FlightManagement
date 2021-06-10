import { User } from '../models/userModel';
import { getManager, getConnection } from 'typeorm';
import bcrypt from 'bcrypt'
const findAllUser = async (): Promise<User[]> => {
	const posRepo = getManager().getRepository(User);
	return posRepo.find();
};
const comparePassword = (password : string, hash : string) : boolean => {
    return bcrypt.compareSync(password,hash);
}
const getUser = async (username: any,email :any): Promise<any> => {
	const posRepo = getManager().getRepository(User);
	return posRepo.findOne({where : [{name : username}, {email : email}]});
};
const insertDataUser = async (): Promise<void> => {
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { Username : "admin", password: await bcrypt.hash("admin123",10), lastName: "Admin", email: "admin123@gmail.com", role: 'admin'  }, 
        { Username : "user1", password: await bcrypt.hash("123456789",10), lastName: "User1", email: "user1@gmail.com" , role: 'user' },
        { Username : "user2", password: await bcrypt.hash("123456789",10), lastName: "User2", email: "user2@gmail.com" , role: 'user' },
     ])
    .execute();
};
export {findAllUser, insertDataUser, getUser , comparePassword }