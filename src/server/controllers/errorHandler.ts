import { Request, NextFunction, Response } from 'express';
import AppError from '../ultis/appError';

const isTrustedError = (err: Error) => {
	if (err instanceof AppError) return true;
	return false;
};

const prodErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// Unknown error (bug from programmer)
	if (isTrustedError(err)) {
		const appErr = err as AppError;

		return res.status(appErr.statusCode).json({
			status: appErr.status,
			message: appErr.message
		});
	}

	// Log error
	console.log('ERROR: ' + err);

	// Send generic error to user
	return res.status(500).json({
		status: 'error',
		message: 'Some thing went wrong'
	});
};

const devErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = 500;
	let status = 'error';

	if (isTrustedError(err)) {
		const appErr = err as AppError;
		statusCode = appErr.statusCode;
		status = appErr.status;
	}

	// Send all error to dev
	res.status(statusCode).json({
		status,
		message: err.message,
		stack: err.stack,
		err
	});
};

const globalErrorHandler = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (process.env.NODE_ENV === 'development') {
		devErrorHandler(err, req, res, next);
	}

	if (process.env.NODE_ENV === 'production') {
		prodErrorHandler(err, req, res, next);
	}
};

// Export = => xuat object, import module from ''
// Export {} xuat danh sach cac ham, import {a, b} from ''
export = { globalErrorHandler };
