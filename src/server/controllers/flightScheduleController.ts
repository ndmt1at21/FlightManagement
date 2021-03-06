import { getSetting } from '../services/settingService';
import { NextFunction, Request, Response } from 'express';
import * as fScheduleServices from '../services/flightScheduleServices';
import catchAsync from '../ultis/catchAsync';
import moment from 'moment';

const findFSchedule = catchAsync(
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
		await getSetting(2).then(timefly => {
			let time = moment(timefly.giatri, 'HH:mm');
			let timeinsert = moment(req.body.ThoiGianBay, 'HH:mm');
			var check = timeinsert.diff(time);
			if (check > 0) {
				fScheduleServices.insertFSchedule(req.body);
				res.json({
					message: 'Add schedule successfully!!!'
				});
			} else {
				res.status(400).json({
					status: 'bad request',
					message:
						'Time fly of schedule too short !!! Please change the time'
				});
			}
		});
	}
);

const revenueFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		fScheduleServices.revenueFlight().then(data => {
			res.json({
				data: data,
				message: 'successfully!!!'
			});
		});
	}
);

const revenueYear = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		fScheduleServices.revenueFlightYear(req.query.year).then(data => {
			res.json({
				data: data,
				message: 'successfully!!!'
			});
		});
	}
);
const searchScheduleFlight = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { origin, destination, date }: any = req.query;
		fScheduleServices
			.searchFlightSchedule(origin, destination, date)
			.then(data => {
				res.json({
					data: data,
					message: 'successfully!!!',
					title: 'Tìm kiếm chuyến bay'
				});
			});
	}
);
export = {
	findFSchedule,
	insertFSchedule,
	revenueFlight,
	revenueYear,
	searchScheduleFlight
};
