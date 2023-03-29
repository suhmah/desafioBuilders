import React from 'react';
import {render} from '@testing-library/react-native';
import TextTemperatrue from '..';

describe('TextTemperature', () => {
  describe('render component', () => {
    it('show component noProps execet value', () => {
      const {getByText} = render(<TextTemperatrue value="15" />);
      expect(getByText('15', {exact: false})).toBeTruthy();
    });
    it('show component was passed props', () => {
      const {getByText} = render(
        <TextTemperatrue color="red" size={{value: 15, up: 3}} value="15" />,
      );
      expect(getByText('15', {exact: false})).toBeTruthy();
    });
    it('show component was passed FontFamilly', () => {
      const {getByText} = render(
        <TextTemperatrue fontFamily="Overpass-Black" value="15" />,
      );

      expect(getByText('15', {exact: false})).toBeTruthy();
    });
  });
});
