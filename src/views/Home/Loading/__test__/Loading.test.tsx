import React from 'react';

import {render} from '@testing-library/react-native';
import Loading from '..';

describe('Loading', () => {
  describe('render component', () => {
    it('show component loadingToday true', () => {
      render(<Loading loadingToday={true} loading={false} />);
    });
    it('show component loading true', () => {
      render(<Loading loadingToday={false} loading={true} />);
    });
    it('show component', () => {
      render(<Loading loadingToday={false} loading={false} />);
    });
  });
});
