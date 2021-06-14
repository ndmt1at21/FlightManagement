import { Setting } from '../models/settingModel';
import { NextFunction, Request, Response } from 'express';
import * as flightServices from '../services/flightServices';
import catchAsync from '../ultis/catchAsync';
import moment from 'moment';
const findAllFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const flight = await flightServices.findAllFlight();

		res.status(200).json({
			status: 'success',
			data: {
				flight
			}
		});
	}
);

const insertdataFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		await flightServices.insertDataFlight();
		res.json({
			message: 'Add data successfully!!!'
		});
	}
);

const insertFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		flightServices.insertFlight(req.body);
		res.json({
			message: 'Add flight successfully!!!'
		});
	}
);

const check = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let data = req.body;
		let time = moment(data.time, 'LT').format('HH:mm');
		console.log(time);
		res.json({
			data: time,
			message: 'successfully!!!'
		});
	}
);
export = { findAllFlight, insertFlight, insertdataFlight, check };
