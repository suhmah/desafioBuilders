import React from 'react';
import {render} from '@testing-library/react-native';
import Info from '..';

describe('Info', () => {
  describe('render component', () => {
    it('show component humidity', () => {
      const {getByText} = render(<Info humidity="15" />);

      expect(getByText('15', {exact: false})).toBeTruthy();
    });
    it('show component windValue', () => {
      const {getByText} = render(<Info windValue="15" />);
      expect(getByText('15', {exact: false})).toBeTruthy();
    });
    it('show component cloudsValue', () => {
      const {getByText} = render(<Info cloudsValue="15" />);
      expect(getByText('15', {exact: false})).toBeTruthy();
    });
  });
});
