import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Weather } from './weather.entity';

@Injectable()
export class WeatherRepository extends Repository<Weather> {
  constructor(dataSource: DataSource) {
    super(Weather, dataSource.createEntityManager());
  }
}
