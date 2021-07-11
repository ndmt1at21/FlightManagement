import axios from 'axios';

export const postSchedule = (data: FlightScheduleFormValues) => {
	const url = `${process.env.BASE_URL}/schedule/insert`;
	return axios.post(url, data);
};
