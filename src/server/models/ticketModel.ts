
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import {Passenger} from './passengerModel';
import {FlightSchedule} from './flightScheduleModel';

@Entity()
export class Ticket{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    hangve: number;
    
    @Column()
    giatien: number;
    
    @Column({nullable : true})
    status: boolean;

    @ManyToOne(() => FlightSchedule)
    fs : number;
}

