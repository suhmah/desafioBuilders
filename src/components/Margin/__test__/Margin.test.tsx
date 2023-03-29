import React from 'react';
import {render} from '@testing-library/react-native';
import {Margin} from '..';

describe('Margin', () => {
  describe('test height off Component', () => {
    describe('height was passed', () => {
      it('show component with height', () => {
        render(<Margin height={30} />);
      });
      it('show component with height 0', () => {
        render(<Margin height={0} />);
      });
    });
    describe('height not passed', () => {
      it('show component not height', () => {
        render(<Margin />);
      });
    });
  });
  describe('test width off Component', () => {
    describe('width was passed', () => {
      it('show component with width', () => {
        render(<Margin width={30} />);
      });
    });
    describe('width not passed', () => {
      it('show component not width', () => {
        render(<Margin />);
      });
    });
  });
});
