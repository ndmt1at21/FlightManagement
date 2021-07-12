import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export function useQuery<T>(
	fnApi: (data: T) => Promise<AxiosResponse<any>>
): [
	AxiosResponse | undefined,
	boolean,
	boolean,
	string | undefined,
	React.Dispatch<React.SetStateAction<T | undefined>>
] {
	const [response, setRespone] = useState<AxiosResponse>();
	const [loading, setLoading] = useState(false);
	const [hasError, setError] = useState(false);
	const [msgError, setMsgError] = useState<string>();
	const [data, setData] = useState<T>();

	useEffect(() => {
		if (!data) return;

		setLoading(true);
		fnApi(data)
			.then(res => {
				setRespone(res);
				setLoading(false);
			})
			.catch(error => {
				setError(true);
				setMsgError(error.message);
				setLoading(false);
			});
	}, [data, fnApi]);

	return [response, loading, hasError, msgError, setData];
}
