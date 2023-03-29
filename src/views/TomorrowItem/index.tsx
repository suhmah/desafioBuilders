import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import Container from '../../components/Container';
import InfoTomorrow from '../../components/InfoTomorrow';
import {IList} from '../../store/modules/weather/types';
import {period} from '../../utils/period';

// import { Container } from './styles';

interface IParams {
  item: IList;
}

const TomorrowItem: React.FC = () => {
  const {params} = useRoute();
  const {item} = params as IParams;

  return (
    <Container>
      <InfoTomorrow
        data={item}
        title={`Amanhã às ${moment(item?.dt_txt).utc().format('HH:mm')}`}
        periodState={period(moment(item?.dt_txt).utc().format('HH'))}
        size={140}
      />
    </Container>
  );
};

export default TomorrowItem;
