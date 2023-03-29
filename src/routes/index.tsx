import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import DetailsOffWeeks from '../views/DetailsOffWeeks';
import TomorrowItem from '../views/TomorrowItem';
import Search from '../views/Search';
// import { Container } from './styles';

const RouteNavigate: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="tomorrowItem" component={TomorrowItem} />
      <Stack.Screen name="details" component={DetailsOffWeeks} />
      <Stack.Screen name="search" component={Search} />
    </Stack.Navigator>
  );
};

export default RouteNavigate;
