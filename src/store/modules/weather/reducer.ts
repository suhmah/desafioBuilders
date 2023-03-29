import {Reducer} from 'redux';
import {IRespositoryStateWeather, RepositoriesTypesWeather} from './types';

const INITIAL_STATE: IRespositoryStateWeather = {
  loading: false,
  loadingToday: false,
};
const reducer: Reducer<IRespositoryStateWeather, any> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case RepositoriesTypesWeather.GET_WEATHER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RepositoriesTypesWeather.GET_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        country: action.payload.country,
        city: action.payload.city,
        /*    lat: action.payload.lat,
        long: action.payload.long, */
        geometry: action.payload.geometry,
        adress: action.payload.adress,
        tomorrow: action.payload.tomorrow,
        week: {
          data: action.payload.week.data,
          period: action.payload.week.period,
        },
      };
    case RepositoriesTypesWeather.GET_WEATHER_TODAY_REQUEST:
      return {
        ...state,
        loadingToday: true,
      };
    case RepositoriesTypesWeather.GET_WEATHER_TODAY_SUCCESS:
      return {
        ...state,
        loadingToday: false,
        today: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;
