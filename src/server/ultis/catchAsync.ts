import { Request, Response, NextFunction } from 'express';
import { DatabaseError } from 'pg-protocol';
import { QueryFailedError } from 'typeorm';

type RequestHandler = {
	(req: Request, res: Response, next: NextFunction): Promise<void>;
};

const catchAsync = (fn: RequestHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(err => next(err));
	};
};

export default catchAsync;
