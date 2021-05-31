
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import {Passenger} from './passengerModel';
import {Flight} from './flightModel';

@Entity()
export class Ticket{
    @PrimaryColumn()
    @OneToOne(() => Flight)
    id: number;
    
    @Column()
    hangve: number;
    
    @Column()
    giatien: number;
    
    @Column()
    @OneToOne(() => Passenger)
    idKhachHang : number
}

