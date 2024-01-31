import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { WeatherResponse } from './interfaces';

@Injectable()
export class OpenWeatherService {
  private apiKey: string;
  private baseUrl: string;

  constructor(configService: ConfigService) {
    this.apiKey = configService.get<string>('OPEN_WEATHER_API_KEY');
    this.baseUrl = configService.get<string>('OPEN_WEATHER_BASE_URL');
  }

  public async getByLatLng(latitude: number, longitude: number, exclude?: string[]): Promise<WeatherResponse> {
    let url = `${this.baseUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`;

    if (exclude) {
      url += `&exclude=${exclude.join(',')}`;
    }

    const res = await fetch(url).then(res => res.json());
    if (res.cod) {
      throw new HttpException(res.message, 424);
    }

    return res;
  }
}
