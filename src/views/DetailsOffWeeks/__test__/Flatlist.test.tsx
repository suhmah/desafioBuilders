import React from 'react';

import {render} from '@testing-library/react-native';
import FaltListComponent from '../Flatlist';
import {ListArrayMock} from '../../../../__mocks__/today';
import {Provider} from 'react-redux';
import store from '../../.././store';
import {NavigationContainer} from '@react-navigation/native';
const IWeek = {
  data: ListArrayMock,
  period: {
    isMiddle: false,
    isMorning: false,
  },
};

describe('FaltListComponent', () => {
  describe('render component no data', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <FaltListComponent />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
  describe('render component', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <FaltListComponent data={IWeek} />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
});
