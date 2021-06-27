import { getSetting } from '../services/settingService';
import { NextFunction, Request, Response } from 'express';
import * as interService from '../services/InterService';
import catchAsync from '../ultis/catchAsync';
import moment from 'moment';
import { getFlight } from '../services/flightServices';
const findAllInter = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const flight = await interService.findAllInter();

		res.status(200).json({
			status: 'success',
			data: {
				flight
			}
		});
	}
);
const insertInter = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const data = req.body;
		await getSetting(4)
			.then(min => {
				getSetting(5)
					.then(max => {
						let timemin = moment(min.giatri, 'HH:mm');
						let time = moment(data.ThoiGianDung, 'HH:mm');
						let timemax = moment(max.giatri, 'HH:mm');
						let checkmin = time.diff(timemin);
						let checkmax = time.diff(timemax);
						if (checkmin >= 0 && checkmax <= 0) {
							interService.insertInterFlight(data);
							res.json({
								message: 'Add interairport successfully!!!'
							});
						} else {
							res.status(400).json({
								status: 'bad request',
								message: 'The time stop in interairport overlimit !!!'
							});
						}
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}
);
const FlightInterAirport = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { idCB, idInter } = req.body;
		getSetting(3)
			.then(SoSBTG => {
				getFlight(idCB)
					.then(flight => {
						if (SoSBTG.giatri > flight.Inter.length) {
							interService.FlightInterAirport(idCB, idInter);
							res.json({
								message:
									'Connect Flight to Inter Airport successfully!!!'
							});
						} else {
							res.status(400).json({
								status: 'bad request',
								message:
									'The number of interairport of flight overlimit !!!'
							});
						}
					})
					.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
	}
);
export = {
	findAllInter,
	insertInter,
	FlightInterAirport
};
