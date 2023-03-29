import React from 'react';
import {useSelector} from 'react-redux';
import {Column} from '../../../components/Column';
import {Text} from '../../../components/Text';
import TextTemperature from '../../../components/TextTemperature';
import {IState} from '../../../store/modules/types';
import {Color} from '../../../styles/colors';

// import { Container } from './styles';

const Temperature: React.FC = () => {
  const data = useSelector((item: IState) => item.weather.today);

  return (
    <Column>
      <TextTemperature
        fontFamily="Overpass-Bold"
        weight={700}
        size={{value: 76, up: 20}}
        value={data?.main.temp.toFixed(0) || ''}
      />

      <Text
        fontFamily="Overpass-Regular"
        weight={400}
        size={30}
        color={Color.gray}>
        {data?.weather[0].description}
      </Text>
    </Column>
  );
};

export default Temperature;
