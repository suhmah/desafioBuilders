import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import Tomorrow from '..';
import {forescast} from '../../../../../__mocks__/today';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
        goBack: jest.fn(),
      };
    },
  };
});

describe('Tomorrow', () => {
  describe('render component', () => {
    it('show component', () => {
      const {getByTestId} = render(<Tomorrow data={forescast} />);
      fireEvent(getByTestId('getId21'), 'press');
    });
    it('show component no data', () => {
      render(<Tomorrow />);
    });
    it('show component function', () => {
      const {getByTestId} = render(<Tomorrow />);

      fireEvent(getByTestId('onPressNavigate'), 'press');
    });
  });
});
