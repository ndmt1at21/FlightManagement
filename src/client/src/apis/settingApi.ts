import { SettingFormValues } from '@src/forms/SettingFormValues';
import axios from 'axios';

export const getAllSettings = () => {
	const url = `${process.env.BASE_URL}/setting/all`;
	return axios.get(url);
};

export const putSetting = (data: SettingFormValues) => {
	const url = `${process.env.BASE_URL}/setting/update`;
	return axios.put(url, data);
};
