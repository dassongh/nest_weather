import { Injectable } from '@nestjs/common';

import { OpenWeatherService } from '../open-weather/open-weather.service';
import { SaveWeatherDto } from './dto/save-weather.dto';
import { AvailableWeatherParts } from './weather.constants';
import { Weather } from './weather.entity';
import { WeatherRepository } from './weather.repository';

@Injectable()
export class WeatherService {
  constructor(
    private weatherRepository: WeatherRepository,
    private openWeatherService: OpenWeatherService
  ) {}

  public async save(dto: SaveWeatherDto): Promise<Weather> {
    const excludeParts = AvailableWeatherParts.filter(part => part !== dto.part);
    const weatherObject = await this.openWeatherService.getByLatLng(Number(dto.lat), Number(dto.lon), excludeParts);

    const payload = {
      lat: weatherObject.lat,
      lon: weatherObject.lon,
      timezone: weatherObject.timezone,
      timezone_offset: weatherObject.timezone_offset,
      weatherData: weatherObject[dto.part],
    };

    return this.weatherRepository.save(payload);
  }

  public get() {}
}
