import { AirportModel } from './AirportModel';

export type FlightModel = {
	id: string;
	SLGheThuong: number;
	SLGheVip: number;
	Inter: AirportModel[];
};
