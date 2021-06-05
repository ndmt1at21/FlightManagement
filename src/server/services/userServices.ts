import { User } from '../models/userModel';
import { getManager, getConnection } from 'typeorm';
import bcrypt from 'bcrypt'
const findAllUser = async (): Promise<User[]> => {
	const posRepo = getManager().getRepository(User);
	return posRepo.find();
};
const insertUser = async (dataUser: any): Promise<void> => {
	let hashpw : any = await bcrypt.hash(dataUser.password,10);
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { name : dataUser.name, password: hashpw, lastName: dataUser.lastName, email: dataUser.email  }, 
     ])
    .execute();
};
const insertDataUser = async (): Promise<void> => {
	await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { name : "admin", password: await bcrypt.hash("admin123",10), lastName: "Admin", email: "admin123@gmail.com"  }, 
        { name : "user1", password: await bcrypt.hash("123456789",10), lastName: "User1", email: "user1@gmail.com"  },
        { name : "user2", password: await bcrypt.hash("123456789",10), lastName: "User2", email: "user2@gmail.com"  },
     ])
    .execute();
};

export {findAllUser, insertUser, insertDataUser }