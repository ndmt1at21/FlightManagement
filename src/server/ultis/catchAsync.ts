import { Request, Response, NextFunction } from 'express';

type RequestHandler = {
	(req: Request, res: Response, next: NextFunction): Promise<void>;
};

const catchAsync = (fn: RequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(err => next(err));
	};
};

export default catchAsync;
