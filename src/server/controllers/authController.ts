import { NextFunction, Request, Response } from 'express';
import * as userServices from '../services/userServices';
import catchAsync from '../ultis/catchAsync';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getManager, getRepository } from 'typeorm';
import { AppError } from '../ultis/appError';
const util = require('util');

const signSendJWT = (user: User, res: Response) => {
	const token = jwt.sign({ id: user.id }, 'SuperprivateKEY', {
		expiresIn: '12h'
	});

	res.cookie('jwt', token, {
		expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 60),
		httpOnly: true,
		sameSite: 'none'
		//secure: true
	});
	res.status(200).json({
		status: 'success',
		token
	});
};

const register = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let hashpw: any = await bcrypt.hash(req.body.password, 10);
		let userexist = await userServices.getUser(
			req.body.username,
			req.body.email
		);
		console.log(userexist);
		if (userexist) {
			res.json({
				message: 'Username or email exists !!!'
			});
			next();
		} else {
			let user = new User();
			user.Username = req.body.username;
			user.email = req.body.email;
			user.password = hashpw;
			user.lastName = req.body.lastName;
			getManager().save(user);
			signSendJWT(user, res);
			next();
		}
	}
);

const login = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let { username, password, email } = req.body;
		let { getUser, comparePassword } = userServices;
		getUser(username, email).then(user => {
			if (!user) {
				return next(new AppError('Incorrect user or email', 401));
			} else {
				if (!comparePassword(password, user.password)) {
					return next(new AppError('Incorrect password', 401));
				} else {
					signSendJWT(user, res);
				}
			}
		});
	}
);

const IsloggedIn = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		if (req.cookies.jwt) {
			try {
				let token = req.cookies.jwt;
				if (token) {
					// auth token
					const decoded = await util.promisify(jwt.verify)(
						token,
						'SuperprivateKEY'
					);
					// check if user deleted
					// decoded { id : __}
					let user = await getRepository(User).findOne(decoded.id);
					if (!user) {
						return next();
					}
					// for fucntion after can access user
					req.session.user = user;
					res.locals.user = user;
					return next();
				}
			} catch (error) {
				return next();
			}
		}
		next();
	}
);
const logout = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		res.cookie('jwt', 'loggedout', {
			expires: new Date(Date.now() + 10 * 1000),
			httpOnly: true
		});

		res.status(200).json({ status: 'success' });
	}
);
const protect = catchAsync(async (req, res, next) => {
	// get token
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Beaber')
	) {
		token = req.headers.authorization.split(' ')[1];
	} else if (req.cookies.jwt) {
		token = req.cookies.jwt;
	}

	// auth token
	const decoded = await util.promisify(jwt.verify)(token, 'SuperprivateKEY');

	// check if user deleted
	// decoded { id : __}
	const user = await getManager().findOne(User, decoded.id);
	if (!user) {
		next('User has been deleted or dis-active');
	}
	// for fucntion after can access user
	req.user = user;
	res.locals.user = user;
	next();
});
const restrictTo = function (...roles: any[]) {
	// req.user from before middleware (protect)
	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.session.user) {
			next(new AppError(`There are some error in server`, 500));
		} else {
			if (!roles.includes(req.session.user.role)) {
				next(
					new AppError(`You don't have permission for this action`, 400)
				);
			}
		}
		next();
	};
};
export = { login, IsloggedIn, logout, register, restrictTo, protect };
