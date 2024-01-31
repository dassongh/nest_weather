import { IsDecimal, IsEnum, IsNotEmpty } from 'class-validator';
import { WeatherPart } from '../weather.constants';

export class GetQueryDto {
  @IsDecimal({ decimal_digits: '2', force_decimal: true }, { message: 'Invalid latitude value' })
  @IsNotEmpty()
  lat: string;

  @IsDecimal({ decimal_digits: '2', force_decimal: true }, { message: 'Invalid longitude value' })
  @IsNotEmpty()
  lon: string;

  @IsEnum(WeatherPart)
  @IsNotEmpty()
  part: keyof typeof WeatherPart;
}
