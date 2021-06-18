import { Passenger } from '../models/passengerModel';
import { NextFunction, Request, Response } from 'express';
import * as passengerServices from '../services/passengerServices';
import { getManager, getConnection } from 'typeorm';
import catchAsync from '../ultis/catchAsync';
import { NumberChair } from '../services/flightScheduleServices';
import { getSetting } from '../services/settingService';
import moment from 'moment';
import { findTicket } from '../services/ticketServices';

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
						getSetting(7).then(timebuy => {
							let limit = moment(timebuy.giatri, 'HH:mm');
							let now = moment();
							console.log(limit);
							limit.add({ hour: now.hours(), minute: now.minutes() });

							let timeticket = moment(tk.fs.KhoiHanh);
							let check = timeticket.diff(limit);
							console.log(limit);
							console.log(timeticket);
							console.log(check);
							if (check > 0) {
								if (passenger.books === []) {
									passenger.books = [tk];
								} else {
									passenger.books.push(tk);
								}
								NumberChair(tk.fs.id, tk.hangve, 1); // Thêm số ghế khi có vé đặt
								getManager().save(passenger);
								res.json({
									message: 'Add ticket successfully!!!'
								});
							} else {
								res.status(400).json({
									status: 'bad request',
									message: 'Ticket cant Reserve!!!'
								});
							}
						});
					})
					.catch(error => console.log('find Ticket : ' + error));
			})
			.catch(error => console.log('find Passenger : ' + error));
	}
);

const cancelTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const { idKH, idTK } = req.body;
		passengerServices
			.getPassenger(idKH)
			.then((KH: Passenger) => {
				if (KH) {
					let index = KH.books.findIndex(elem => {
						return elem.id === idTK;
					});
					if (index !== -1) {
						findTicket(idTK).then(tk => {
							getSetting(8)
								.then(timecancel => {
									let limit = moment(timecancel.giatri, 'HH:mm');
									let now = moment();
									limit.add({
										hour: now.hours(),
										minute: now.minutes()
									});

									let timeticket = moment(tk.fs.KhoiHanh);
									console.log(timeticket);

									let check = timeticket.diff(limit);
									console.log(check);
									if (check > 0) {
										KH.books.splice(index, 1);
										passengerServices.savePassenger(KH);
										NumberChair(tk.fs.id, tk.hangve, -1);
										res.json({
											message: 'Ticket has been canceled!!!'
										});
									} else {
										res.json({
											message: 'Ticket can be canceled , overtime!!!'
										});
									}
								})
								.catch(error => console.log(error));
						});
					} else {
						res.json({
							message: 'Ticket not found!!!'
						});
					}
				} else {
					res.json({
						message: 'Passenger not found!!!'
					});
				}
			})
			.catch(error => console.log(error));
		// await passengerServices.cancelTicket(req.body).then(result => {
		// 	if (result[1] === 0) {
		// 		res.json({
		// 			message: 'Tickets which booked passenger not found!!!'
		// 		});
		// 	} else {
		// 		res.json({
		// 			message: 'Cancel ticket successfully!!!'
		// 		});
		// 	}
		// });
	}
);

export = { findAllPassenger, buyTicket, cancelTicket };
