import { Passenger } from '../models/passengerModel';
import { NextFunction, Request, Response } from 'express';
import * as passengerServices from '../services/passengerServices';
import { getManager, getConnection } from 'typeorm';
import catchAsync from '../ultis/catchAsync';
import { getFs, saveFs } from '../services/flightScheduleServices';

const findAllPassenger = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const data = await passengerServices.findAll();

		res.status(200).json({
			status: 'success',
			data: {
				data
			}
		});
	}
);

const buyTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let data = req.body;
		const { findPassenger, findTicket } = passengerServices;
		let service = findPassenger(data.email);
		let passenger = new Passenger();
		service
			.then(KH => {
				if (KH) {
					if (KH) {
						passenger = KH;
					} else {
						passenger.lastName = data.lastName;
						passenger.CMND = data.CMND;
						passenger.email = data.email;
						passenger.phone = data.phone;
					}
				}
				let ticket = findTicket(data.id);
				ticket
					.then(tk => {
						if (tk) {
							passenger.books = [tk];
							getFs(data.idCB)
								.then(fs => {
									console.log(tk);
									if (tk.hangve % 2 === 1) {
										++fs.SoGheDatThuong;
									} else {
										++fs.SoGheDatVip;
									}
									console.log(fs);
									saveFs(fs);
								})
								.catch(error => console.log(error));
							console.log(passenger);
							getManager().save(passenger);
							res.json({
								message: 'Add ticket successfully!!!'
							});
						} else {
							res.json({
								message: 'Ticket not found !!!'
							});
						}
					})
					.catch(error => console.log('find Ticket : ' + error));
			})
			.catch(error => console.log('find Passenger : ' + error));
	}
);

const cancelTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		await passengerServices.cancelTicket(req.body).then(result => {
			if (result[1] === 0) {
				res.json({
					message: 'Tickets which booked passenger not found!!!'
				});
			} else {
				res.json({
					message: 'Cancel ticket successfully!!!'
				});
			}
		});
	}
);

export = { findAllPassenger, buyTicket, cancelTicket };
