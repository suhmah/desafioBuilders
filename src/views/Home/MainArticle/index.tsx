/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Column} from '../../../components/Column';
import {Margin} from '../../../components/Margin';
import {IWeatherToday} from '../../../store/modules/weather/types';
import IconStatus from '../../../components/Image';
import {forecastConditionsIcons} from '../../../utils/forecastIcon';
import {period} from '../../../utils/period';
import {currentHour} from '../../../utils/currentHour';
import Temperature from '../Temperature';
import Info from '../../../components/Info';
import {Row} from '../../../components/Row';
import normalize from '../../../utils/Normalize';
import Tomorrow from '../Tomorrow';
import {Text} from '../../../components/Text';
import {Color} from '../../../styles/colors';
import Cloud from '../../../assets/cloud.png';
import {useSelector} from 'react-redux';
import {IState} from '../../../store/modules/types';

// import { Container } from './styles';

interface IProps {
  data?: IWeatherToday;
  size?: number;
  sizeInfo?: number;
  noSize?: boolean;
  weigth?: number;
  fontFamilyInfo?:
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
  noMargin?: boolean;
  borderColor?: string;
  padding?: number;
}

const MainArticle: React.FC<IProps> = ({
  padding,
  borderColor,
  noSize,
  noMargin,
  data,
  size,
  sizeInfo,
  weigth,
  fontFamilyInfo,
}) => {
  const weather = useSelector((item: IState) => item.weather.data);

  return (
    <>
      {data ? (
        <>
          <Margin height={noMargin ? 0 : 20} />

          <Column horizontal={16}>
            <IconStatus
              noSize={noSize}
              size={size}
              path={
                forecastConditionsIcons(
                  data?.weather[0].description,
                  period(currentHour).isMiddle,
                  period(currentHour).isMorning,
                ).icon
              }
            />
          </Column>

          <Temperature />

          <Margin height={20} />
          <Column horizontal={16}>
            <Info
              size={sizeInfo}
              fontFamily={fontFamilyInfo}
              weight={weigth}
              borderColor={borderColor}
              padding={padding}
              humidity={data.main.humidity.toFixed(0)}
              cloudsValue={data.clouds.all.toFixed(0)}
              windValue={data.wind.speed.toFixed(0)}
            />
          </Column>
          <Margin height={20} />
          <Row style={{paddingLeft: normalize(20)}}>
            <Tomorrow data={weather} />
          </Row>
        </>
      ) : (
        <Column horizontal={20}>
          <Margin height={100} />

          <IconStatus size={170} path={Cloud} />
          <Margin height={60} />
          <Text color={Color.gray} size={22} style={{textAlign: 'center'}}>
            Selecione aqui um local e encontre o clima em tempo real
          </Text>
        </Column>
      )}
    </>
  );
};

export default MainArticle;
