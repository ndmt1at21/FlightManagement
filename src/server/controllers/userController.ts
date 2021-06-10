import { NextFunction, Request, Response } from 'express';
import * as userServices from '../services/userServices';
import catchAsync from '../ultis/catchAsync';
const findAllUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const users = await userServices.findAllUser();

		res.status(200).json({
			status: 'success',
			data: {
				users
			}
		});
	}
);

const insertdataUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		await userServices.insertDataUser();
		res.json({
			message: "Add data successfully!!!",
		});
	}
);
export = { findAllUser, insertdataUser };
