import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigate from './routes';
// import { Container } from './styles';
export const navigationRef = React.createRef();

const src: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigate />
      </NavigationContainer>
    </Provider>
  );
};

export default src;
