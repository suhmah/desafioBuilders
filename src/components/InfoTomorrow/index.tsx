import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {Column} from '../Column';
import Header from '../Header';
import {Margin} from '../Margin';
import {Row} from '../Row';
import {Text} from '../Text';
import {Color} from '../../styles/colors';
import {forecastConditionsIcons} from '../../utils/forecastIcon';

import {ContentInfo} from '../../views/DetailsOffWeeks/styles';
// import { Container } from './styles';
import IconStatus from '../Image';
import TextTemperature from '../TextTemperature';
import Info from '../Info';

import {IList} from '../../store/modules/weather/types';
import {useNavigation} from '@react-navigation/native';

export interface IPeriod {
  isMiddle: boolean;
  isMorning: boolean;
}

interface IInfoTomorrow {
  noSize?: boolean;
  size?: number;
  height?: number;
  periodState?: IPeriod;
  title?: string;
  data?: IList | undefined;
}

const InfoTomorrow: React.FC<IInfoTomorrow> = ({
  noSize,
  size,
  height,
  periodState,
  data,
  title,
}) => {
  const {goBack} = useNavigation();

  return (
    <>
      <ContentInfo>
        <Margin height={20} />
        <Header goBack={goBack}>
          <Row>
            <Column>
              <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <Path
                  d="M15.9831 5.24196V3.85441C15.9831 2.79235 15.141 1.93582 14.1136 1.93582H13.12V1.33619C13.12 0.599632 12.5304 0 11.8063 0C11.0821 0 10.4926 0.599632 10.4926 1.33619V1.93582H5.50732V1.33619C5.50732 0.599632 4.91778 0 4.19363 0C3.46948 0 2.87995 0.599632 2.87995 1.33619V1.93582H1.88629C0.842107 1.93582 0 2.79235 0 3.85441V14.0985C0 15.1435 0.842107 16 1.88629 16H14.1305C15.1579 16 16 15.1435 16 14.0985L15.9831 5.24196ZM11.2673 1.33619C11.2673 1.04498 11.5031 0.805168 11.7894 0.805168C12.0757 0.805168 12.3115 1.04499 12.3115 1.33619V2.60388C12.3115 2.89508 12.0757 3.1349 11.7894 3.1349C11.5031 3.1349 11.2673 2.89508 11.2673 2.60388V1.33619ZM3.65465 1.33619C3.65465 1.04498 3.89044 0.805168 4.17673 0.805168C4.46302 0.805168 4.69881 1.04499 4.69881 1.33619V2.60388C4.69881 2.89508 4.46302 3.1349 4.17673 3.1349C3.89044 3.1349 3.65465 2.89508 3.65465 2.60388V1.33619ZM6.93231 4.01241L4.69881 5.08182C5.07141 5.08182 5.18539 5.3686 5.87595 5.3686C6.54958 5.3686 6.73334 5.74991 6.80077 5.08182L10.7933 4.84787C10.8606 5.51596 11.315 4.84786 11.9887 4.84786C12.6624 4.84786 13.5905 5.51594 13.6579 4.84785L14.5263 4.97858C15.1159 4.97858 15.1916 4.7519 15.1916 5.3686L15.1749 4.84783L0.774889 4.84795L2.26024 4.84794C3.27068 5.12771 6.63042 6.51354 6.93231 4.01241ZM14.1137 15.1948H1.86942C1.2631 15.1948 0.774738 14.698 0.774738 14.0984V5.6359H15.1916V14.0984C15.1916 14.698 14.7032 15.1948 14.1137 15.1948Z"
                  fill="white"
                />
              </Svg>
              <Margin height={2} />
            </Column>
            <Margin width={5} />

            <Text size={16} color={Color.white}>
              Próximos 5 dias
            </Text>
          </Row>
        </Header>
        <Margin height={20} />
        <Row align="flex-start">
          <Column>
            <Margin height={20} />
            {periodState && (
              <IconStatus
                noSize={noSize}
                size={size}
                height={height}
                path={
                  forecastConditionsIcons(
                    data?.weather[0].description || '',
                    periodState?.isMiddle,
                    periodState?.isMorning,
                  ).icon
                }
              />
            )}
          </Column>

          <Margin width={10} />

          <Column align="flex-start">
            <Text size={15} color={Color.gray}>
              {title || 'Amanhã'}
            </Text>

            <Margin height={10} />

            <Row align="flex-end">
              <TextTemperature
                weight={700}
                fontFamily="Overpass-Bold"
                size={{value: 76, up: 20}}
                value={data?.main.temp_min.toFixed(0) || ''}
              />
              <Column>
                <Text size={15} color={Color.gray}>
                  /{' '}
                </Text>
                <Margin height={22} />
              </Column>

              <Column>
                <TextTemperature
                  value={data?.main.temp_max.toFixed(0) || ''}
                  color={Color.gray}
                  size={{value: 18, up: 15}}
                />
                <Margin height={22} />
              </Column>
            </Row>
            <Text size={20} color={Color.gray}>
              {data?.weather[0].description}
            </Text>
          </Column>
        </Row>
        <Margin height={20} />
        <Info
          windValue={data?.wind.speed.toFixed(0) || ''}
          cloudsValue={data?.clouds.all.toFixed(0) || ''}
          humidity={data?.main.humidity.toFixed(0) || ''}
        />
        <Margin height={40} />
      </ContentInfo>
      <Margin height={40} />
    </>
  );
};

export default InfoTomorrow;
