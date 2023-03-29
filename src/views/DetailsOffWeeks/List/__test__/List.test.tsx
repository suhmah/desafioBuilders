import React from 'react';

import {render} from '@testing-library/react-native';
import List from '..';
import {ListMock} from '../../../../../__mocks__/today';
describe('List', () => {
  describe('render component', () => {
    it('show component', () => {
      render(<List item={ListMock} />);
    });
  });
});
