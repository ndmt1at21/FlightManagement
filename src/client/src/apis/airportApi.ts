import axios from 'axios';

export const postAirport = (data: AirportFormValues) => {
	const url = `${process.env.BASE_URL}/airport/insert`;
	return axios.post(url, data);
};

export const postAirportInter = (data: AirportInterFormValues) => {
	const url = `${process.env.BASE_URL}/airport/connect`;
	return axios.post(url, data);
};
