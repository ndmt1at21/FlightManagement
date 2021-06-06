import { NextFunction, Request, Response } from 'express';
import * as ticketServices from '../services/ticketServices';
import catchAsync from '../ultis/catchAsync';

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
		const ticket = await ticketServices.insertTicket(req.body);
		res.json({
			message: "Add ticket successfully!!!",
		});
	}
);

// const findTicket = catchAsync(
// 	async (req : Request, res: Response, next: NextFunction) => {
// 		ticketServices.findTicket(req.body.email, req.body.CMND)
// 		.then(function(data: any) {
// 			res.status(200).json({
// 				status: 'success',
// 				data: {
// 					data
// 				}
// 			});
// 		})
// 	}
// )

export = { findAllTicket, insertTicket };
