import { NextFunction, Request, Response } from 'express';
import * as flightServices from '../services/flightServices';
import catchAsync from '../ultis/catchAsync';

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

const insertFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		await flightServices.insertFlight(req.body);
		res.json({
			message: "Add flight successfully!!!",
		});
	}
);

const insertdataFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		await flightServices.insertDataFlight();
		res.json({
			message: "Add data successfully!!!",
		});
	}
);
export = { findAllFlight, insertFlight, insertdataFlight };
