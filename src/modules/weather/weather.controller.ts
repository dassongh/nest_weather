import { Body, Controller, Post } from '@nestjs/common';

import { SaveWeatherDto } from './dto/save-weather.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post()
  public async save(@Body() dto: SaveWeatherDto) {
    return this.weatherService.save(dto);
  }
}
