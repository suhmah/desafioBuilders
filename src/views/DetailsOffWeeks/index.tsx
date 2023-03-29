import React from 'react';
import {useSelector} from 'react-redux';
import Container from '../../components/Container';
import {IState} from '../../store/modules/types';
import FaltListComponent from './Flatlist';

// import { Container } from './styles';

interface IProps {
  scroll?: boolean;
}

const DetailsOffWeeks: React.FC<IProps> = ({scroll}) => {
  const data = useSelector((item: IState) => item.weather.week);

  return (
    <Container noScroll={!scroll}>
      <FaltListComponent data={data} />
    </Container>
  );
};

export default DetailsOffWeeks;
