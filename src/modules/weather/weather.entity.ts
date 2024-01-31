import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Current, Daily, Hourly } from '../open-weather/interfaces';
import { WeatherPart } from './weather.constants';

@Entity()
@Index(['lat', 'lon', 'part'], { unique: true })
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 4, scale: 2 })
  lat: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  lon: string;

  @Column({ type: 'enum', enum: WeatherPart })
  part: keyof typeof WeatherPart;

  @Column()
  timezone: string;

  @Column()
  timezone_offset: number;

  @Column({ type: 'json' })
  weatherData: Current | Hourly[] | Daily[];
}
