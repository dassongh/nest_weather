import { Module } from '@nestjs/common';

import { WeatherController } from './weather.controller';
import { WeatherRepository } from './weather.repository';
import { WeatherService } from './weather.service';

import { OpenWeatherModule } from '../open-weather/open-weather.module';

@Module({
  imports: [OpenWeatherModule],
  controllers: [WeatherController],
  providers: [WeatherService, WeatherRepository],
})
export class WeatherModule {}
