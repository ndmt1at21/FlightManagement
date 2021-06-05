import { NextFunction, Request, Response } from 'express';
import * as systemService from '../services/systemService';
import catchAsync from '../ultis/catchAsync';

const showAllSystem = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const data = await systemService.ShowallSystem();

		res.status(200).json({
			status: 'success',
			data: {
				data
			}
		});
	}
);

const updateSystem = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const ticket = await systemService.updateSystem(req.body);
		res.json({
			message: "Update successfully!!!",
		});
	}
);

const insertSystem = catchAsync(
	async (req : Request, res: Response, next: NextFunction) => {
		await systemService.insertSystem();
		res.json({
			message: "Add data successfully!!!",
		});
	}
)

export = { showAllSystem, updateSystem, insertSystem };
