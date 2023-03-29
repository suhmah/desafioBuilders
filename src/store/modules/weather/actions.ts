import {isTomorrow} from 'date-fns';
import moment from 'moment';
import {Dispatch} from 'redux';
import {
  getCityService,
  getWeatherService,
  getWeatherServiceToday,
  IRequest,
} from '../../../services/getWeatherService';
import {period} from '../../../utils/period';
import {IOpenCageResponse, IWeather, RepositoriesTypesWeather} from './types';

const getWeather =
  ({lat, lon}: IRequest) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_REQUEST,
      });

      const response = (await getWeatherService({lon, lat})) as IWeather;
      const responseCity = (await getCityService({
        lon,
        lat,
      })) as IOpenCageResponse;

      const newData = response?.list.filter(item =>
        isTomorrow(new Date(item.dt_txt)),
      );

      const myNewData = newData?.filter(
        item => moment(item.dt_txt).utc().format('HH') === '12',
      );

      const myNewDataForWeek = response?.list.filter(
        item => moment(item.dt_txt).utc().format('HH') === '12',
      );

      const periods = period(
        moment(myNewDataForWeek[0]?.dt_txt).utc().format('HH'),
      );
      dispatch(getWeatherToday({lat, lon}));
      return dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_SUCCESS,
        payload: {
          geometry: {lat, lon},
          data: response,
          tomorrow: myNewData[0],
          week: {data: myNewDataForWeek, period: periods},
          city: responseCity.city,
          country: responseCity.country,
          adress: responseCity.country
            ? `${responseCity.road}, ${responseCity.city}, ${responseCity.state} - ${responseCity.postcode}`
            : '',
        },
      });
    } catch (error: any) {
      return dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_FAILURE,
        payload: {
          error: {
            status: error?.response,
            state: true,
          },
        },
      });
    }
  };
const getWeatherToday =
  ({lat, lon}: IRequest) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_TODAY_REQUEST,
      });

      const response = (await getWeatherServiceToday({lon, lat})) as IWeather;

      return dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_TODAY_SUCCESS,
        payload: {
          data: response,
        },
      });
    } catch (error: any) {
      return dispatch({
        type: RepositoriesTypesWeather.GET_WEATHER_TODAY_FAILURE,
        payload: {
          error: {
            status: error?.response?.status,
            state: true,
          },
        },
      });
    }
  };

export {getWeather, getWeatherToday};
