import React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '..';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
describe('Text', () => {
  describe('background of component', () => {
    it('show colors', () => {
      render(<Text color={'red'} />);
    });
    it('show no colors', () => {
      render(<Text />);
    });
  });
});
