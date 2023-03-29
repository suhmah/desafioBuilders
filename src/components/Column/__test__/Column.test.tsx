import React from 'react';
import {render} from '@testing-library/react-native';
import {Column} from '..';

describe('Column', () => {
  describe('render component', () => {
    describe('no was passed props', () => {
      it('show component', () => {
        render(<Column />);
      });
    });
    describe('render component was passed props', () => {
      it('show component with justify', () => {
        render(<Column justify="flex-start" />);
      });
      it('show component with align', () => {
        render(<Column align="flex-start" />);
      });
      it('show component with vertical', () => {
        render(<Column vertical={3} />);
      });
      it('show component with horizontal', () => {
        render(<Column horizontal={3} />);
      });
    });
  });
});
