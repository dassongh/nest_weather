import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { GetQueryDto, SaveWeatherDto } from './dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Post()
  public save(@Body() dto: SaveWeatherDto) {
    return this.weatherService.save(dto);
  }

  @Get()
  public get(@Query() query: GetQueryDto) {
    return this.weatherService.get(query.lat, query.lon, query.part);
  }
}
