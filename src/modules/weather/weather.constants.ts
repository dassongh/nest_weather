export const WeatherPart = {
  current: 'current',
  daily: 'daily',
  hourly: 'hourly',
} as const;

export const AvailableWeatherParts = [...Object.values(WeatherPart), 'alerts', 'minutely'] as const;
