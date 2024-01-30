import { Module } from '@nestjs/common';
import { OpenWeatherService } from './open-weather.service';

@Module({
  providers: [OpenWeatherService],
})
export class OpenWeatherModule {}
