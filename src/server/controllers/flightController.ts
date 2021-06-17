import { getSetting } from '../services/settingService';
import { NextFunction, Request, Response } from 'express';
import * as flightServices from '../services/flightServices';
import catchAsync from '../ultis/catchAsync';
import { Flight } from '../models/flightModel';
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
const findAllFlightName = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const flight = await flightServices.findAllFlightName();

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
const insertdataName = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		await flightServices.insertDataName();
		res.json({
			message: 'Add data successfully!!!'
		});
	}
);
const insertFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let flight = new Flight();
		const data = req.body;
		flightServices.insertFlight(data, flight);
		res.json({
			message: 'Add flight successfully!!!'
		});
	}
);
const insertFlightname = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { id, name } = req.body;
		getSetting(1)
			.then(SoSB => {
				flightServices
					.getCountFlight()
					.then(countF => {
						console.log(countF + ' - ' + SoSB.giatri);
						if (SoSB.giatri > countF) {
							flightServices.insertFlightname(id, name);
							res.json({
								message: 'Add flightname successfully!!!'
							});
						} else {
							res.status(400).json({
								status: 'bad request',
								message: 'The number of the flight overlimit !!!'
							});
						}
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}
);

const check = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		res.json({
			data: '',
			message: 'successfully!!!',
			id: 'SGN'
		});
	}
);
export = {
	findAllFlight,
	insertFlight,
	insertdataFlight,
	check,
	insertdataName,
	insertFlightname,
	findAllFlightName
};
