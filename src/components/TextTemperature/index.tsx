import React from 'react';
import {Color} from '../../styles/colors';
import {Row} from '../Row';
import {Text} from '../Text';

// import { Container } from './styles';

interface IPRops {
  color?: string;
  weight?: number;
  value: string;
  size?: {
    value: number;
    up: number;
  };
  fontFamily?:
    | 'Overpass-Black'
    | 'Overpass-BlackItalic'
    | 'Overpass-Bold'
    | 'Overpass-BoldItalic'
    | 'Overpass-ExtraLight'
    | 'Overpass-ExtraLight'
    | 'Overpass-ExtraLight'
    | 'Overpass-Light'
    | 'Overpass-Italic'
    | 'Overpass-LightItalic'
    | 'Overpass-Medium'
    | 'Overpass-MediumItalic'
    | 'Overpass-Regular'
    | 'Overpass-SemiBold'
    | 'Overpass-SemiBoldItalic'
    | 'Overpass-Thin'
    | 'Overpass-ThinItalic';
}

const TextTemperature: React.FC<IPRops> = ({
  fontFamily,
  color,
  value,
  size,
  weight,
}) => {
  return (
    <Row align="flex-start">
      <Text
        size={size?.value}
        weight={weight}
        fontFamily={fontFamily}
        color={color || Color.white}>
        {value}
      </Text>
      <Text
        size={size?.up}
        weight={weight}
        fontFamily={fontFamily}
        color={color || Color.white}>
        º
      </Text>
    </Row>
  );
};

export default TextTemperature;
