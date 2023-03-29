import {LOCATION_KEY, WEATHER_KEY} from '../utils/apiKeys';
import {api} from './api';
import {apiOpencagedata} from './apiOpencagedata';

export interface IRequest {
  lat?: number | null;
  lon?: number | null;
  noFetch?: boolean;
}

function getWeatherService({lat, lon}: IRequest) {
  return new Promise((resolve, reject) => {
    try {
      const getWeather: any = async () => {
        const response = await api.get(
          `forecast?units=metric&lang=pt_br&lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`,
        );

        return response.data;
      };

      resolve(getWeather());
    } catch (error) {
      reject(error);
    }
  });
}
function getCityService({lat, lon}: IRequest) {
  return new Promise((resolve, reject) => {
    try {
      const getCity: any = async () => {
        const response = await apiOpencagedata.get(
          `json?q=${lat}+${lon}&key=${LOCATION_KEY}`,
        );

        return response.data.results[0].components;
      };

      resolve(getCity());
    } catch (error) {
      reject(error);
    }
  });
}
function getWeatherServiceToday({lat, lon}: IRequest) {
  return new Promise((resolve, reject) => {
    try {
      const getWeatherToday: any = async () => {
        const response = await api.get(
          `weather?units=metric&lang=pt_br&lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`,
        );

        return response.data;
      };

      resolve(getWeatherToday());
    } catch (error) {
      reject(error);
    }
  });
}
export {getWeatherService, getWeatherServiceToday, getCityService};
