import { NextFunction, Request, Response } from 'express';
import catchAsync from '../ultis/catchAsync';
import * as fScheduleServices from '../services/flightScheduleServices';
import { findAllTicket, updateStatus } from '../services/ticketServices';
const getLogin = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		if (req.user) {
			res.redirect('/');
		}

		res.status(200).render('login', {
			title: 'Đăng nhập để tiếp tục'
		});
	}
);

const indexView = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let temp = await updateStatus();
		const flight = await fScheduleServices.findAllFSchedule();
		let data = req.session.user;
		res.json({
			data: {
				flight
			},
			message: data ? 'Welcome to my website, ' + data.Username : '',
			title: 'Trang chủ'
		});
	}
);
export = { getLogin, indexView };
