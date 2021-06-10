import { NextFunction, Request, Response } from 'express';
import * as SettingService from '../services/settingService';
import catchAsync from '../ultis/catchAsync';

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
		const ticket = await SettingService.updateSetting(req.body);
		res.json({
			message: "Update successfully!!!",
		});
	}
);

const insertSetting = catchAsync(
	async (req : Request, res: Response, next: NextFunction) => {
		await SettingService.insertSetting();
		res.json({
			message: "Add data successfully!!!",
		});
	}
)

export = { showAllSetting, updateSetting, insertSetting };
