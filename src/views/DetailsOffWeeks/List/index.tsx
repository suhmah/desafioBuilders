/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Column} from '../../../components/Column';
import {Row} from '../../../components/Row';
import {Text} from '../../../components/Text';
import {Color} from '../../../styles/colors';
import IconStatus from '../../../components/Image';
import {forecastConditionsIcons} from '../../../utils/forecastIcon';
import {IList} from '../../../store/modules/weather/types';
import moment from 'moment';
import TextTemperature from '../../../components/TextTemperature';
import {period} from '../../../utils/period';
import {Margin} from '../../../components/Margin';

// import { Container } from './styles';

export interface IListProps {
  item: IList;
}

const List: React.FC<IListProps> = ({item}) => {
  return (
    <Column horizontal={20}>
      <Row style={{width: '100%'}} justify="space-between">
        <Row style={{flex: 1}} justify="flex-start">
          <Text
            style={{textTransform: 'capitalize'}}
            size={10}
            color={Color.white}>
            {moment(item.dt_txt).format('ddd')}{' '}
          </Text>
          <Text
            style={{textTransform: 'capitalize'}}
            size={16}
            color={Color.gray}>
            {moment(item.dt_txt).format('DD')},{' '}
            {moment(item.dt_txt).format('MMM')}
          </Text>
        </Row>
        <Margin width={15} />
        <Row style={{flex: 2}}>
          {period(moment(item?.dt_txt).utc().format('HH')) && (
            <IconStatus
              size={25}
              path={
                forecastConditionsIcons(
                  item.weather[0].description,
                  period(moment(item?.dt_txt).utc().format('HH'))?.isMiddle,
                  period(moment(item?.dt_txt).utc().format('HH'))?.isMorning,
                ).icon
              }
            />
          )}
          <Text
            style={{textTransform: 'capitalize'}}
            numberOfLines={1}
            size={12}
            color={Color.gray}>
            {' '}
            {item.weather[0].description}
          </Text>
        </Row>

        <Row justify="flex-end">
          <TextTemperature
            fontFamily="Overpass-Bold"
            weight={700}
            value={item.main.temp_min.toFixed(0)}
            size={{value: 16, up: 16}}
          />

          <Text
            style={{textTransform: 'capitalize'}}
            size={16}
            color={Color.gray}>
            /
          </Text>

          <TextTemperature
            fontFamily="Overpass-Bold"
            weight={700}
            value={item.main.temp_min.toFixed(0)}
            size={{value: 16, up: 16}}
            color={Color.gray}
          />
        </Row>
      </Row>
    </Column>
  );
};

export default List;
