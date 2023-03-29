/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Circle, Path, Svg} from 'react-native-svg';
import normalize from '../../utils/Normalize';
import {Column} from '../Column';
import {Row} from '../Row';

// import { Container } from './styles';

interface IProps {
  children: any;
  goBack?: () => void;
}

const Header: React.FC<IProps> = ({children, goBack}) => {
  return (
    <Row align="center">
      <TouchableOpacity
        style={{flex: 1}}
        testID="onPressGoback"
        onPress={goBack}>
        <Svg
          width={normalize(40)}
          height={normalize(40)}
          viewBox="0 0 40 40"
          fill="none">
          <Path
            d="M24.9202 12L14.9602 19.5531L25 26.9998"
            stroke="white"
            stroke-width="0.93"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Circle cx="20" cy="20" r="19.5" stroke="#4D4D4D" />
        </Svg>
      </TouchableOpacity>
      <Column style={{flex: 3}}>{children}</Column>
      <View style={{flex: 1}} />
    </Row>
  );
};

export default Header;
