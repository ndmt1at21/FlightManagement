import { NextFunction, Request, Response } from 'express';
import * as SettingService from '../services/settingService';
import * as FlightService from '../services/flightServices';
import { Setting } from '../models/settingModel';
import catchAsync from '../ultis/catchAsync';
import { getManager } from 'typeorm';

const showAllSetting = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		const data = await SettingService.ShowallSetting();

		res.status(200).json({
			status: 'success',
			data: {
				data
			}
		});
	}
);

const updateSetting = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { id, giatri, tinhtrang } = req.body;
		let setting = new Setting();
		console.log(req.body);
		SettingService.getSetting(<number>id).then(caidat => {
			if (caidat) {
				setting = caidat;
				setting.giatri = giatri;
				setting.tinhtrang = tinhtrang ? tinhtrang : true;
				console.log(setting);
			} else {
				res.status(404).json({
					message: "Can't find setting from input !!!"
				});
			}
		});
	}
);

const insertSetting = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		await SettingService.insertSetting();
		res.json({
			message: 'Add data successfully!!!'
		});
	}
);

export = { showAllSetting, updateSetting, insertSetting };
