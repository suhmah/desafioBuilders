import React from 'react';
import {render} from '@testing-library/react-native';
import {Row} from '..';

describe('Row', () => {
  describe('render component', () => {
    describe('no was passed props', () => {
      it('show component', () => {
        render(<Row />);
      });
    });
    describe('render component was passed props', () => {
      it('show component with justify', () => {
        render(<Row justify="flex-start" />);
      });
      it('show component with align', () => {
        render(<Row align="flex-start" />);
      });
      it('show component with vertical', () => {
        render(<Row vertical={3} />);
      });
      it('show component with horizontal', () => {
        render(<Row horizontal={3} />);
      });
    });
  });
});
