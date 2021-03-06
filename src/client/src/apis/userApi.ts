import { LoginFormValues } from '@src/forms/LoginFormValue';
import { RegisterFormValues } from '@src/forms/RegisterFormValues';
import axios from 'axios';

export const postLogin = (data: LoginFormValues) => {
	const url = `${process.env.BASE_URL}/users/login`;
	return axios.post(url, data);
};

export const postRegister = (data: RegisterFormValues) => {
	const url = `${process.env.BASE_URL}/users/regsiter`;
	return axios.post(url, data);
};

export const getLogout = () => {};
