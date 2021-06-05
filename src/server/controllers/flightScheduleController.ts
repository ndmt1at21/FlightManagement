import { NextFunction, Request, Response } from 'express';
import * as fScheduleServices from '../services/flightScheduleServices';
import catchAsync from '../ultis/catchAsync';

const findAllFSchedule = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const schedule = await fScheduleServices.findAllFSchedule();

		res.status(200).json({
			status: 'success',
			data: {
				schedule
			}
		});
	}
);

const insertFSchedule = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		await fScheduleServices.insertFSchedule(req.body);
		res.json({
			message: "Add schedule successfully!!!",
		});
	}
);


export = { findAllFSchedule, insertFSchedule };
