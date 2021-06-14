import { NextFunction, Request, Response } from 'express';
import * as ticketServices from '../services/ticketServices';
import catchAsync from '../ultis/catchAsync';
import { getSetting } from '../services/settingService';
import { Ticket } from '../models/ticketModel';

const findAllTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const users = await ticketServices.findAllTicket();

		res.status(200).json({
			status: 'success',
			data: {
				users
			}
		});
	}
);

const insertTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { id, idCB, hangve, giatien, status } = req.body;
		await ticketServices.checkNumerTicket(idCB).then(SoHangVe => {
			getSetting(6)
				.then(num => {
					console.log(SoHangVe + ' - ' + num.giatri);
					if (SoHangVe < num.giatri) {
						ticketServices.insertTicket(req.body);
						res.json({
							message: 'Insert ticket successfully!!!'
						});
					} else {
						res.status(400).json({
							status: 'bad request',
							message:
								'Cant insert ticket !!! Please increase limit rank of the tickets'
						});
					}
				})
				.catch(error => console.log('Error in RankTicket : ' + error));
		});
	}
);
const updateTicket = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { id, giatien } = req.body;
		let ticket1 = new Ticket();
		await ticketServices.findTicket(id).then(ticket => {
			if (ticket) {
				ticket1 = ticket;
				ticket1.giatien = giatien;
				ticketServices.updateTicket(ticket1);
				res.json({
					message: 'Update price of the ticket successfully!!!'
				});
			} else {
				res.status(404).json({
					status: 'error',
					message: 'Cant find ticket !!!'
				});
			}
		});
	}
);
export = { findAllTicket, insertTicket, updateTicket };
