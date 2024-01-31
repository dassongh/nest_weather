import { Injectable } from '@nestjs/common';

import { SaveWeatherDto } from './dto';
import { AvailableWeatherParts, WeatherPart } from './weather.constants';
import { Weather } from './weather.entity';
import { WeatherRepository } from './weather.repository';

import { OpenWeatherService } from '../open-weather/open-weather.service';

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
      lat: weatherObject.lat.toString(),
      lon: weatherObject.lon.toString(),
      part: dto.part,
      timezone: weatherObject.timezone,
      timezone_offset: weatherObject.timezone_offset,
      weatherData: JSON.stringify({
        [dto.part]: weatherObject[dto.part],
      }),
    };

    return this.weatherRepository.save(payload);
  }

  public get(lat: string, lon: string, part: keyof typeof WeatherPart): Promise<Weather> {
    return this.weatherRepository.findOneByOrFail({ lat, lon, part });
  }
}
