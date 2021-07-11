import axios from 'axios';

export const postSearch = (data: SearchFlightValues) => {
	const url = `${process.env.BASE_URL}`;
	return axios.post(url, data);
};
