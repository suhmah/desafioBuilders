/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LocationIcon from '../../icons/Location';
import {Color} from '../../styles/colors';
import {Column} from '../Column';
import {Margin} from '../Margin';
import {Row} from '../Row';
import {Text} from '../Text';

import {Card} from '../Card';
import moment from 'moment';
import ReloadIcon from '../../icons/Reload';
import {forecastConditionsIcons} from '../../utils/forecastIcon';
import {period} from '../../utils/period';
import {currentHour} from '../../utils/currentHour';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getWeather, getWeatherToday} from '../../store/modules/weather/actions';

interface IProps {
  onPress: () => void;
  data?: any;
  os: 'ios' | 'android' | 'windows' | 'macos' | 'web';
  paddingTop?: number;
  lat?: number;
  lon?: number;
  boderColor?: string;
}

const Location: React.FC<IProps> = ({
  onPress,
  data,
  os,
  boderColor,
  lon,
  lat,
  paddingTop,
}) => {
  const {navigate}: any = useNavigation();
  const dispatch: any = useDispatch();

  return (
    <Row style={{width: '100%'}} align="center">
      <Card
        style={{flex: 1}}
        paddingTop={paddingTop}
        onPress={() => navigate('search')}
        testID="navigateSearch"
        background={
          forecastConditionsIcons(
            'chuvisco',
            period(currentHour).isMiddle,
            period(currentHour).isMorning,
          ).color
        }
        borderColor={boderColor}>
        <Row justify="space-between" style={{width: '100%'}}>
          {data?.today ? (
            <>
              <TouchableOpacity disabled style={{flex: 1}}>
                <Row align="flex-start">
                  <Column
                    justify="flex-start"
                    align="flex-start"
                    style={{flex: 1}}>
                    <Row
                      justify="flex-start"
                      align="flex-start"
                      style={{flex: 1}}>
                      <Column>
                        {os === 'android' && <Margin height={7} />}
                        <LocationIcon />
                      </Column>

                      <Margin width={5} />

                      <View style={{flex: 1}}>
                        <Text
                          fontFamily="Overpass-Medium"
                          size={data.city ? 20 : 15}
                          color={Color.white}>
                          {data.city ||
                            'Não foi possível carregar suas informações de endereço'}
                          {`, ${data.country || ''}`}
                        </Text>

                        <View style={{flex: 1}}>
                          {data?.adress && data?.adress?.length > 0 && (
                            <Text
                              fontFamily="Overpass-Medium"
                              size={12}
                              color={Color.white}>
                              {data.adress}
                            </Text>
                          )}
                        </View>
                        <Text
                          fontFamily="Overpass-Medium"
                          size={13}
                          color={Color.gray}>
                          {moment(new Date()).format('dddd, DD MMMM')}
                        </Text>

                        <Text color="white">
                          {data.adress
                            ? 'Realizar nova busca'
                            : 'clique aqui para refinar buscar'}
                        </Text>
                      </View>
                    </Row>
                  </Column>
                </Row>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity onPress={onPress} testID="onPress">
              <Row>
                <Column align="flex-start">
                  <Text size={20} color={Color.white}>
                    Carregar minha localização
                  </Text>
                </Column>
                <Margin width={5} />
                <LocationIcon />
              </Row>
            </TouchableOpacity>
          )}
        </Row>
      </Card>
      {data?.today && (
        <>
          <Margin width={5} />

          <TouchableOpacity
            onPress={() => {
              if (lat && lat.toString().length > 0) {
                dispatch(getWeather({lat, lon}));
                dispatch(getWeatherToday({lat, lon}));
              } else {
                onPress();
              }
            }}
            testID="reload">
            <ReloadIcon />
          </TouchableOpacity>
        </>
      )}
    </Row>
  );
};

export default Location;
