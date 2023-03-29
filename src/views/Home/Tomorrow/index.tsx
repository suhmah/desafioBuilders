/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Card} from '../../../components/Card';
import IconImage from '../../../components/Image';
import {Text} from '../../../components/Text';
import {Column} from '../../../components/Column';
import {Row} from '../../../components/Row';
import {Color} from '../../../styles/colors';
import {Margin} from '../../../components/Margin';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import TextTemperature from '../../../components/TextTemperature';
import {isTomorrow} from 'date-fns';

import 'moment/locale/pt-br';
import moment from 'moment';
import normalize from '../../../utils/Normalize';
import {useNavigation} from '@react-navigation/native';
import {forecastConditionsIcons} from '../../../utils/forecastIcon';
import {period} from '../../../utils/period';
import {currentHour} from '../../../utils/currentHour';
import {Path, Svg} from 'react-native-svg';
import {IList} from '../../../store/modules/weather/types';
import formatter from '../../../utils/formatter';

// import { Container } from './styles'

interface IProps {
  data?: any;
}

const Tomorrow: React.FC<IProps> = ({data}) => {
  const {navigate}: any = useNavigation();

  return (
    <Column align="flex-start" style={{width: '100%'}}>
      <Row justify="space-between" style={{width: '100%'}}>
        <Text
          size={20}
          weight={400}
          fontFamily="Overpass-Medium"
          color={Color.white}>
          Amanhã
        </Text>
        <TouchableOpacity
          testID="onPressNavigate"
          onPress={() => navigate('details')}>
          <Row horizontal={15}>
            <Text
              size={15}
              weight={400}
              fontFamily="Overpass-Medium"
              color={Color.gray}>
              ver próximos 5 dias{' '}
            </Text>
            <Svg width="8" height="13" viewBox="0 0 8 13" fill="none">
              <Path
                d="M1 12L7 6.5L1 1"
                stroke="#AFAFAF"
                stroke-width="0.93"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </Row>
        </TouchableOpacity>
      </Row>
      <Margin height={20} />
      <ScrollView
        testID="AllTowmorrowList"
        horizontal
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        showsHorizontalScrollIndicator={false}>
        {data?.list.map((item: IList, index: number) => (
          <View key={item.dt}>
            {isTomorrow(new Date(item.dt_txt)) && (
              <>
                <Card
                  paddingTop={15}
                  borderColor={
                    forecastConditionsIcons(
                      'chuvisco',
                      period(currentHour).isMiddle,
                      period(currentHour).isMorning,
                    ).color
                  }
                  background="rgba(180,180,180,.1)"
                  testID={`getId${index}`}
                  onPress={() => navigate('tomorrowItem', {item})}
                  style={{
                    marginRight: normalize(15),
                  }}>
                  <Column>
                    <TextTemperature
                      value={item.main.temp.toFixed(0)}
                      size={{value: 18, up: 12}}
                      weight={700}
                      fontFamily="Overpass-Bold"
                    />
                    <Margin height={9} />
                    <IconImage
                      size={30}
                      path={
                        forecastConditionsIcons(
                          item.weather[0].description,
                          period(moment(item?.dt_txt).utc().format('HH'))
                            .isMiddle,
                          period(moment(item?.dt_txt).utc().format('HH'))
                            .isMorning,
                        ).icon
                      }
                    />
                    <Margin height={9} />
                    <Text
                      size={12}
                      weight={700}
                      fontFamily="Overpass-Bold"
                      color={Color.gray}>
                      {formatter.formatDateHour(item.dt_txt)}
                    </Text>
                  </Column>
                </Card>
              </>
            )}
          </View>
        ))}
      </ScrollView>
    </Column>
  );
};

export default Tomorrow;
