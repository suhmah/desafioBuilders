import React from 'react';
import {Provider} from 'react-redux';

import {render} from '@testing-library/react-native';
import Temperature from '..';
import store from '../../../../store';

describe('Temperature', () => {
  describe('render component', () => {
    it('show component', () => {
      render(
        <Provider store={store}>
          <Temperature />
        </Provider>,
      );
    });
  });
});
