import React from 'react';
import {render} from '@testing-library/react-native';
import Conatiner from '..';
import {View} from 'react-native';

describe('Container', () => {
  describe('noScroll not passed', () => {
    it('scroll', () => {
      const {getByTestId} = render(
        <Conatiner>
          <></>
        </Conatiner>,
      );

      expect(getByTestId('scroll')).toBeTruthy();
    });
    it('noScroll', () => {
      <View />;
      const {getByTestId} = render(
        <Conatiner noScroll>
          <></>
        </Conatiner>,
      );

      expect(getByTestId('noScroll')).toBeTruthy();
    });
  });
});
