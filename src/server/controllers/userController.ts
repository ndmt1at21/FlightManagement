import { NextFunction, Request, Response } from 'express';
import * as userServices from '@server/services/userServices';
import catchAsync from '../ultis/catchAsync';

const findAllUser = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const users = await userServices.findAllUser();

		res.status(HTTPStatus.OK).json({
			status: 'success',
			data: {
				users
			}
		});
	}
);

export = { findAllUser };
