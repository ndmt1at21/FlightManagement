import axios from 'axios';

export const getAll = () => {
	const url = `${process.env.BASE_URL}/flight/allname`;
	return axios.get(url);
};

export const putFlight = (data: FlightFormValues) => {
	const url = `${process.env.BASE_URL}/flight/insert`;
	return axios.put(url, data);
};
