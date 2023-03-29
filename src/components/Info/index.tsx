import React from 'react';
import {Card} from '../Card';
import {Text} from '../Text';

import water from '../../assets/drop-miniature.png';
import wind from '../../assets/wind-miniature.png';
import cloud from '../../assets/cloud.png';
import IconImage from '../Image';
import {Row} from '../Row';
import {Column} from '../Column';
import {Color} from '../../styles/colors';
import {Margin} from '../Margin';
import {Separetor} from '../Separator';

// import { Container } from './styles';

interface IProps {
  humidity?: string;
  windValue?: string;
  cloudsValue?: string;
  borderColor?: string;
  padding?: number;
  size?: number;
  weight?: number;
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

const Info: React.FC<IProps> = ({
  humidity,
  windValue,
  padding,
  borderColor,
  cloudsValue,
  fontFamily,
  weight,
  size,
}) => {
  return (
    <Card paddingTop={padding} borderColor={borderColor}>
      <Row vertical={10} justify="space-between">
        <Column>
          <IconImage path={water} size={14} height={20} />

          <Margin height={6} />
          <Text
            size={size}
            fontFamily={fontFamily}
            weight={weight}
            color={Color.white}>
            {humidity}%
          </Text>
          <Text
            size={16}
            fontFamily="Overpass-Light"
            weight={300}
            color={Color.gray}>
            Umidade
          </Text>
        </Column>
        <Row align="center">
          <Separetor />
          <Column>
            <IconImage path={wind} size={26} height={20} />
            <Margin height={6} />
            <Text
              size={18}
              fontFamily="Overpass-Bold"
              weight={700}
              color={Color.white}>
              {windValue}m/s
            </Text>
            <Text
              size={16}
              fontFamily="Overpass-Light"
              weight={300}
              color={Color.gray}>
              Veloc. Vento
            </Text>
          </Column>
          <Separetor />
        </Row>
        <Column>
          <IconImage path={cloud} size={24} height={20} />
          <Margin height={6} />
          <Text
            size={18}
            fontFamily="Overpass-Bold"
            weight={700}
            color={Color.white}>
            {cloudsValue}%
          </Text>
          <Text
            size={16}
            fontFamily="Overpass-Light"
            weight={300}
            color={Color.gray}>
            Nebul.
          </Text>
        </Column>
      </Row>
    </Card>
  );
};

export default Info;
