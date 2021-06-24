import { ValueTransformer } from 'typeorm';

export const trimString: ValueTransformer = {
	to: (value: string) => value.toLowerCase().trim(),
	from: (value: string | undefined) => value
};
