/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Column} from '../../../components/Column';

// import { Container } from './styles';

interface IProps {
  loading: boolean;
  loadingToday: boolean;
}

const Loading: React.FC<IProps> = ({loading, loadingToday}) => {
  return (
    <>
      {loading && (
        <Column
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <ActivityIndicator size="large" />
        </Column>
      )}
      {loadingToday && !loading && (
        <Column
          style={{
            position: 'absolute',
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          <ActivityIndicator size="large" />
        </Column>
      )}
    </>
  );
};

export default Loading;
