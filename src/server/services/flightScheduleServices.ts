import { FlightSchedule } from '../models/flightScheduleModel';
import { Flight } from '../models/flightModel';
import { getManager, getConnection } from 'typeorm';

const findAllFSchedule = async (): Promise<FlightSchedule[]> => {
	const fschedule = await getManager().getRepository(FlightSchedule);
	return fschedule
    .createQueryBuilder("fschedule")
    .leftJoinAndSelect(Flight,"flight","flight.id = fschedule.idChuyenBay")
    .addSelect("flight.SBDi", "SanBayDi")
    .addSelect("flight.SBDen", "SanBayDen")
    .getMany();
};
const insertFSchedule = async (dataSchedule: any): Promise<void> => {
	await console.log(dataSchedule);
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(FlightSchedule)
    .values([
        { idChuyenBay: <number>dataSchedule.idChuyenBay ,ThoiGian: dataSchedule.ThoiGian, KhoiHanh : dataSchedule.KhoiHanh }, 
     ])
    .execute();
};


export {findAllFSchedule, insertFSchedule }