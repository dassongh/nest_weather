import { IsDecimal, IsEnum, IsNotEmpty } from 'class-validator';

import { WeatherPart } from '../weather.constants';

export class SaveWeatherDto {
  @IsDecimal({ decimal_digits: '2,2' })
  @IsNotEmpty()
  lat: string;

  @IsDecimal({ decimal_digits: '3,2' })
  @IsNotEmpty()
  lon: string;

  @IsEnum(WeatherPart)
  @IsNotEmpty()
  part: keyof typeof WeatherPart;
}
