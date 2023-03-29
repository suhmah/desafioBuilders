import React from 'react';

import {render} from '@testing-library/react-native';
import MainArticle from '..';
import {mockData} from '../../../../../__mocks__/today';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../../../../store';

describe('MainArticle', () => {
  describe('render component', () => {
    it('show component MainArticle with data', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <MainArticle size={70} data={mockData.data} />
          </NavigationContainer>
          ,
        </Provider>,
      );
    });
    it('show component MainArticle no size', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <MainArticle data={mockData.data} />
          </NavigationContainer>
          ,
        </Provider>,
      );
    });
    it('show component MainArticle noSize', () => {
      render(
        <Provider store={store}>
          <NavigationContainer>
            <MainArticle noMargin noSize data={mockData.data} />
          </NavigationContainer>
          ,
        </Provider>,
      );
    });
  });
});
