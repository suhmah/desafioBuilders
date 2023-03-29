import React from 'react';
import {render} from '@testing-library/react-native';
import {Card} from '..';
import {Color} from '../../../styles/colors';

describe('Card', () => {
  describe('render component', () => {
    describe('no passed props', () => {
      it('show component', () => {
        render(<Card />);
      });
    });
    describe('was passed props', () => {
      it('show component', () => {
        render(<Card borderColor={Color.graySecond} paddingTop={10} />);
      });
    });
  });
});
