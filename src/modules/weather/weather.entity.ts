import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Current, Daily, Hourly } from '../open-weather/interfaces';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lon: number;

  @Column()
  timezone: string;

  @Column()
  timezone_offset: number;

  @Column({ type: 'json' })
  weatherData: Current | Hourly[] | Daily[];
}
