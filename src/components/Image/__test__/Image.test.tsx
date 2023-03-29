import React from 'react';
import {render} from '@testing-library/react-native';
import Image from '..';

import testeImage from '../../../assets/blizzard-middle.png';

describe('Image', () => {
  describe('render component', () => {
    it('show component was not passed noSize', () => {
      render(<Image path={testeImage} />);
    });
    it('show component was passed noSize', () => {
      render(<Image noSize path={testeImage} />);
    });
  });
});
