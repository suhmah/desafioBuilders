import React from 'react';

import Container from '../../components/Container';
import {Color} from '../../styles/colors';

import {useSelector} from 'react-redux';

import {Main} from './styles';
import Location from '../../components/Location';
import {Column} from '../../components/Column';
import {Margin} from '../../components/Margin';
import {IState} from '../../store/modules/types';
import {forecastConditionsIcons} from '../../utils/forecastIcon';
import {period} from '../../utils/period';
import {currentHour} from '../../utils/currentHour';
import {getLocation} from '../../services/getLocation';
import MainArticle from './MainArticle';
import Loading from './Loading';

const Home: React.FC = () => {
  const data = useSelector((item: IState) => item.weather.today);
  const loading = useSelector((item: IState) => item.weather.loading);
  const loadingToday = useSelector((item: IState) => item.weather.loadingToday);

  const today = useSelector((item: IState) => item.weather.today);
  const city = useSelector((item: IState) => item.weather.city);
  const country = useSelector((item: IState) => item.weather.country);
  const adress = useSelector((item: IState) => item.weather.adress);

  const lat = useSelector((item: IState) => item.weather.geometry?.lat);
  const lon = useSelector((item: IState) => item.weather.geometry?.lon);

  return (
    <>
      <Container
        color={
          forecastConditionsIcons(
            data?.weather[0].description || '',
            period(currentHour).isMiddle,
            period(currentHour).isMorning,
          ).color
        }
        statusBar={{
          background: Color.black,
          barStyle: 'light-content',
        }}>
        <Margin height={30} />
        <Column horizontal={16}>
          <Location
            lat={lat}
            lon={lon}
            os="android"
            data={{
              today,
              city,
              country,
              adress,
            }}
            onPress={getLocation}
          />
        </Column>
        <Main>
          <MainArticle
            sizeInfo={18}
            fontFamilyInfo="Overpass-Bold"
            weigth={700}
            padding={1}
            borderColor={Color.graySecond}
            size={170}
            data={data}
          />
        </Main>
      </Container>
      <Loading loading={loading} loadingToday={loadingToday} />
    </>
  );
};

export default Home;
