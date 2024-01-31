import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Current, Daily, Hourly } from '../open-weather/interfaces';
import { InterceptorResponse } from './interfaces';
import { WeatherPart } from './weather.constants';
import { Weather } from './weather.entity';

@Injectable()
export class WeatherInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => this.transformResponse(data)));
  }

  private transformResponse(data: Weather): InterceptorResponse {
    const part = JSON.parse(data.weatherData);
    const key = Object.keys(part)[0];

    const transformedResponseParts = {
      [WeatherPart.current]: (weather: Current) => ({
        sunrise: weather.sunrise,
        sunset: weather.sunset,
        temp: weather.temp,
        feels_like: weather.feels_like,
        pressure: weather.pressure,
        humidity: weather.humidity,
        uvi: weather.uvi,
        wind_speed: weather.wind_speed,
      }),
      [WeatherPart.daily]: (weather: Daily) => ({
        sunrise: weather.sunrise,
        sunset: weather.sunset,
        temp: weather.temp.day,
        feels_like: weather.feels_like.day,
        pressure: weather.pressure,
        humidity: weather.humidity,
        uvi: weather.uvi,
        wind_speed: weather.wind_speed,
      }),
      [WeatherPart.hourly]: (weather: Hourly) => ({
        sunrise: null,
        sunset: null,
        temp: weather.temp,
        feels_like: weather.feels_like,
        pressure: weather.pressure,
        humidity: weather.humidity,
        uvi: weather.uvi,
        wind_speed: weather.wind_speed,
      }),
    };

    return transformedResponseParts[key](part[key]);
  }
}
