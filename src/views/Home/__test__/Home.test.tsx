import React from 'react';
import {Provider} from 'react-redux';

import {render} from '@testing-library/react-native';
import Home from '..';
import store from '../../../store';
import {NavigationContainer} from '@react-navigation/native';

describe('Home', () => {
  describe('render component', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <Home />
          </NavigationContainer>
        </Provider>,
      );
    });
  });
});
