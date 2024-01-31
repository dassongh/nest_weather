export const WeatherPart = {
  current: 'current',
  daily: 'daily',
  hourly: 'hourly',
} as const;

export const AvailableWeatherParts = [...Object.keys(WeatherPart), 'alerts', 'minutely'] as const;
