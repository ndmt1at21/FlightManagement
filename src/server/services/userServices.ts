import { User } from '@server/models/userModel';
import { getManager } from 'typeorm';

export const findAllUser = async (): Promise<User[]> => {
	const posRepo = getManager().getRepository(User);
	return posRepo.find();
};
