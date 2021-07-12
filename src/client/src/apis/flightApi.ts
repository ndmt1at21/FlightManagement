import { FlightFormValues } from '@src/forms/FlightFormValues';
import axios from 'axios';

export const getAllFlightNames = () => {
	const url = `${process.env.BASE_URL}/flight/allname`;
	return axios.get(url);
};

export const getAllFlights = () => {
	const url = `${process.env.BASE_URL}/flight/all`;
	return axios.get(url);
};

export const postFlight = (data: FlightFormValues) => {
	const url = `${process.env.BASE_URL}/flight/insert`;
	return axios.post(url, data);
};
