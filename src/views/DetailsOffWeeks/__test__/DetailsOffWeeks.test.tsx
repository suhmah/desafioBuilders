import React from 'react';
import {Provider} from 'react-redux';

import {render} from '@testing-library/react-native';
import DetailsOffWeeks from '..';
import store from '../../../store';
import {NavigationContainer} from '@react-navigation/native';

describe('DetailsOffWeeks', () => {
  describe('render component', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <DetailsOffWeeks />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
  describe('render component noScroll', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <DetailsOffWeeks scroll />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
});
