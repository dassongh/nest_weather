import { Test, TestingModule } from '@nestjs/testing';

import { WeatherPart } from './weather.constants';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

describe('WeatherController', () => {
  let controller: WeatherController;
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [{ provide: WeatherService, useValue: { save: jest.fn(), get: jest.fn() } }],
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call service to save weather', async () => {
    const dto = {
      lat: '12.22',
      lon: '112.33',
      part: WeatherPart.current,
    };

    await controller.save(dto);
    expect(service.save).toHaveBeenCalledWith(dto);
  });

  it('should call service to get weather', async () => {
    const query = {
      lat: '12.22',
      lon: '112.33',
      part: WeatherPart.current,
    };
    await controller.get(query);
    expect(service.get).toHaveBeenCalledWith(query.lat, query.lon, query.part);
  });
});
