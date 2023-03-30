import Geolocation from '@react-native-community/geolocation';
import store from '../store';
import {getWeather} from '../store/modules/weather/actions';

const mock = {lat: -22.9110137, lon: -43.2093727};

export const getLocation = () => {
  if (mock.lat) {
    store.dispatch(getWeather({lat: mock.lat, lon: mock.lon}));
  } else {
    Geolocation.getCurrentPosition(info => {
      store.dispatch(
        getWeather({lat: info.coords.latitude, lon: info.coords.longitude}),
      );
    });
  }
};
