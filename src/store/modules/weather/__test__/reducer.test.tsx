import reducer from '../reducer';
import {mockData, mockSucces} from '../../../../../__mocks__/today';
import expect from 'expect';

import {RepositoriesTypesWeather, IRespositoryStateWeather} from '../types';

const INITIAL_STATE: IRespositoryStateWeather = {
  loading: false,
  loadingToday: false,
};

describe('reducer', () => {
  it('should handle GET_WEATHER_REQUEST', () => {
    const action = {type: RepositoriesTypesWeather.GET_WEATHER_REQUEST};

    expect(reducer(INITIAL_STATE, action)).toEqual({
      loading: true,
      loadingToday: false,
    });

    expect(reducer(INITIAL_STATE, action)).toEqual({
      loading: true,
      loadingToday: false,
    });
  });
  it('should handle GET_WEATHER_SUCCESS', () => {
    const action = {
      type: RepositoriesTypesWeather.GET_WEATHER_SUCCESS,
      payload: mockSucces,
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(mockSucces);
  });
  it('should handle GET_WEATHER_TODAY_REQUEST', () => {
    const action = {
      type: RepositoriesTypesWeather.GET_WEATHER_TODAY_REQUEST,
    };

    expect(reducer(INITIAL_STATE, action)).toEqual({
      loading: false,
      loadingToday: true,
    });
  });
  it('should handle GET_WEATHER_TODAY_SUCCESS', () => {
    const mock = {
      loadingToday: false,
      data: mockData.data,
    };
    const result = {
      loading: false,
      loadingToday: false,
      today: mockData.data,
    };
    const action = {
      type: RepositoriesTypesWeather.GET_WEATHER_TODAY_SUCCESS,
      payload: mock,
    };

    expect(reducer(INITIAL_STATE, action)).toEqual(result);
  });

  it('should handle default void', () => {
    expect(reducer(undefined, 'default')).toEqual({
      loading: false,
      loadingToday: false,
    });
  });
});
