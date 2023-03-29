import React from 'react';
import Location from '..';
import {Provider} from 'react-redux';
import store from '../../../store';
import {render, fireEvent} from '@testing-library/react-native';
import {mockData} from '../../../../__mocks__/today';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../../../app';

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
  };
});

const isMock = {
  today: mockData,
  city: 'araguaina',
  country: 'brasil',
  adress: 'rua brasil',
};
const isMockNocity = {
  today: mockData,
  city: '',
  country: '',
};
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Location', () => {
  const onPressMock: any = jest.fn();

  describe('render component', () => {
    it('show component was passed data', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="android" onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('onPress'), 'onPressMock');
    });
    it('show component does not passed data', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="android" onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('onPress'), 'onPressMock');
    });
    it('show component does not android', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="ios" onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('onPress'), 'onPressMock');
    });
    it('show component was passed padding and background test component Card', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location
            boderColor="red"
            paddingTop={1}
            os="ios"
            onPress={onPressMock}
          />
        </Provider>,
      );

      fireEvent(getByTestId('onPress'), 'onPressMock');
    });
    it('show component was press navigate', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location
            boderColor="red"
            paddingTop={1}
            os="ios"
            onPress={onPressMock}
          />
        </Provider>,
      );

      fireEvent(getByTestId('navigateSearch'), 'press');
    });

    it('show component was passed data and reload button', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="android" data={isMock} onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('reload'), 'press');
    });
    it('show component was passed data and reload button notCity', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="android" data={isMockNocity} onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('reload'), 'onPressMock');
    });
    it('show component was passed data and reload button location', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location
            lat={5454}
            lon={5614}
            os="android"
            data={isMockNocity}
            onPress={onPressMock}
          />
        </Provider>,
      );

      fireEvent(getByTestId('reload'), 'onPressMock');
    });
    it('show component was passed data and reload button no location', () => {
      const {getByTestId} = render(
        <Provider store={store}>
          <Location os="android" data={isMock} onPress={onPressMock} />
        </Provider>,
      );

      fireEvent(getByTestId('reload'), 'onPressMock');
    });
  });
});
