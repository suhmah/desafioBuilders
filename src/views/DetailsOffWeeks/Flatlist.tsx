import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import InfoTomorrow from '../../components/InfoTomorrow';
import {IWeek} from '../../store/modules/weather/types';
import {useSelector} from 'react-redux';
import {IState} from '../../store/modules/types';
import List, {IListProps} from './List';
import {Margin} from '../../components/Margin';

// import { Container } from './styles';

interface IProps {
  data?: IWeek;
}

const FaltListComponent: React.FC<IProps> = ({data}) => {
  const dataHeader = useSelector((item: IState) => item.weather.tomorrow);

  const renderItem = useCallback(({item}: IListProps) => {
    return (
      <>
        <List item={item} />
        <Margin height={10} />
      </>
    );
  }, []);

  return (
    <FlatList
      data={data?.data}
      ListHeaderComponent={() => {
        return (
          <InfoTomorrow
            data={dataHeader}
            periodState={data?.period}
            size={140}
          />
        );
      }}
      renderItem={renderItem}
    />
  );
};

export default FaltListComponent;
