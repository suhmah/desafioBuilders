import React from 'react';
import {render} from '@testing-library/react-native';
import {Separetor} from '..';

describe('Separetor', () => {
  describe('render component', () => {
    it('show component', () => {
      render(<Separetor />);
    });
  });
});
