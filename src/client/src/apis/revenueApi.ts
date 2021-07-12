import axios from 'axios';

export const getRevenueFlight = () => {
	const url = `${process.env.BASE_URL}/dashboard/listRevenutFlight`;
	return axios.get(url);
};

export const getRevenueYear = () => {
	const url = `${process.env.BASE_URL}/dashboard/listRevenutYear`;
	return axios.get(url);
};
