import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Header from '..';
import {Text} from '../../Text';
import {NavigationContainer} from '@react-navigation/native';

describe('Header', () => {
  const onPressMock: any = jest.fn();
  describe('render component', () => {
    it('show component', () => {
      render(
        <NavigationContainer>
          <Header>
            <Text>Teste Render</Text>
          </Header>
        </NavigationContainer>,
      );
    });
    it('press goback', () => {
      const {getByTestId} = render(
        <NavigationContainer>
          <Header goBack={() => onPressMock()}>
            <Text>Teste Render</Text>
          </Header>
        </NavigationContainer>,
      );

      fireEvent(getByTestId('onPressGoback'), 'onPressMock');
    });
  });
});
