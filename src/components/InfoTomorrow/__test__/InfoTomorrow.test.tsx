import React from 'react';
import {Provider} from 'react-redux';

import {render} from '@testing-library/react-native';
import InfoTomorrow from '..';
import store from '../../../store';
import {NavigationContainer} from '@react-navigation/native';

describe('InfoTomorrow', () => {
  const period = {isMiddle: true, isMorning: false};
  describe('render component', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <InfoTomorrow periodState={period} size={70} />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
  describe('render component no Size', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <InfoTomorrow periodState={period} />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
  describe('render component noSize', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <InfoTomorrow periodState={period} noSize />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
});
