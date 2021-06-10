import { NextFunction, Request, Response } from 'express';
import * as userServices from '../services/userServices';
import catchAsync from '../ultis/catchAsync';
import {User} from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getManager } from 'typeorm';
import {AppError} from '../ultis/appError'
const util = require('util');

const signSendJWT = (user: User, res : Response) => {
	const token = jwt.sign({ id: user.id }, 'SuperprivateKEY', {
	  expiresIn: process.env.JWT_EXPIRE_IN
	});	
  
	res.cookie('jwt', token, {
	  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 60),
	  httpOnly: true,
	  sameSite: 'none',
	  secure: true
	});
  
	res.status(200).json({
	  status: 'success',
	  token
	});
};


const register = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let {username , email ,password , lastName} = req.body;
		let hashpw : any = await bcrypt.hash(password,10);
		if(userServices.getUser(username,email)){
			res.json({
				message : "Username or email exists !!!",
			});
			next();
		}
		const user = new User();
		user.Username = username;
		user.email = email;
		user.password = hashpw;
		user.lastName = lastName;
    	getManager().save(user);

		signSendJWT(user,res);
		next();	
	}
);

const login = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		let {username , password , email} = req.body;
		let {getUser , comparePassword} = userServices;
		getUser(username,email).then((user) => {
			if(!user){
				res.json({
					message : "Username or email not found !!!!",
				});
			}else{
				if(!comparePassword(password,user.password)){
					res.json({
						message : "Incorrect Password !!!!",
					});
				}else{
					signSendJWT(user,res);
				}
			}
		});
	}
);

const IsloggedIn = catchAsync(
	async (req: Request, res: Response, next: NextFunction) => {
		if(req.cookies.jwt){
			try {
				let token = req.cookies.jwt;
				if(token){
					// auth token
					const decoded = await util.promisify(jwt.verify)(
						token,
						'SuperprivateKEY'
					  );
			  
					  // check if user deleted
					  // decoded { id : __}
					  const user = getManager().findByIds(User,decoded.id);
					  if (!user) {
						return next();
					  }
			  
			  
					  // for fucntion after can access user
                      req.session.user = user;
					  res.locals.user = user;
					  return next();
				}
			} catch(error) {
				return next();
			}
		}
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

const restrictTo = function (...roles : any[]) {
    // req.user from before middleware (protect)
    return (req : Request, res: Response, next: NextFunction) => {
      if (!roles.includes(req.session.user.role)) {
        return next(new AppError(`You don't have permission for this action`,400));
      }
      next();
    };
  };
export = {login,IsloggedIn,logout,register,restrictTo}