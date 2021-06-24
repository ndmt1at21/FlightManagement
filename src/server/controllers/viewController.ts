import { NextFunction, Request, Response } from 'express';
import catchAsync from '../ultis/catchAsync';

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
export = { getLogin };
