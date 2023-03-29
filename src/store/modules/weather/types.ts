export enum RepositoriesTypesWeather {
  GET_WEATHER_REQUEST = '@repositories/GET_WEATHER_REQUEST',
  GET_WEATHER_SUCCESS = '@repositories/GET_WEATHER_SUCCESS',
  GET_WEATHER_FAILURE = '@repositories/GET_WEATHER_FAILURE',

  GET_WEATHER_TODAY_REQUEST = '@repositories/GET_WEATHER_TODAY_REQUEST',
  GET_WEATHER_TODAY_SUCCESS = '@repositories/GET_WEATHER_TODAY_SUCCESS',
  GET_WEATHER_TODAY_FAILURE = '@repositories/GET_WEATHER_FAILURE',
}

export interface IWeather {
  cod: string;
  message: number;
  cnt: number;
  list: IList[];
  city: ICity;
}
export interface IOpenCageResponse {
  'ISO_3166-1_alpha-2': string;
  'ISO_3166-1_alpha-3': string;
  'ISO_3166-2': [string];
  _category: string;
  _type: string;
  city: string;
  city_district: string;
  continent: string;
  country: string;
  country_code: string;
  county: string;
  house_number: string;
  office: string;
  political_union: string;
  postcode: string;
  road: string;
  state: string;
  suburb: string;
}

export interface ICity {
  id: number;
  name: string;
  coord: ICoord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ICoord {
  lat: number;
  lon: number;
}

export interface IList {
  dt: number;
  main: IMain;
  weather: IWeatherElement[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  rain?: IRain;
  sys: ISys;
  dt_txt: Date;
}

export interface IClouds {
  all: number;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IRain {
  '3h': number;
}

export interface ISys {
  pod: string;
}

export interface IWeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IWeatherToday {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  rain?: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Rain {
  '1h': number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IWeek {
  data: IList[];
  period: {
    isMiddle: boolean;
    isMorning: boolean;
  };
}

export interface IRespositoryStateWeather {
  readonly data?: IWeather;
  readonly today?: IWeatherToday;
  readonly loading: boolean;
  readonly loadingToday: boolean;
  readonly city?: string;
  readonly country?: string;
  readonly adress?: string;
  readonly tomorrow?: IList;
  readonly week?: IWeek;
  geometry?: {
    lat: number;
    lon: number;
  };
  lat?: number;
  lon?: number;
}
