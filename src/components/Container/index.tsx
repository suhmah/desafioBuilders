import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {IContainer} from '../../models/Container';
import {currentHour} from '../../utils/currentHour';
import {forecastConditionsIcons} from '../../utils/forecastIcon';
import {period} from '../../utils/period';
import {Content, Main} from './styles';

const Container: React.FC<IContainer> = ({noScroll, testID, children}) => {
  return (
    <>
      <Content
        testID={testID}
        style={{
          backgroundColor: forecastConditionsIcons(
            'chuvisco',
            period(currentHour).isMiddle,
            period(currentHour).isMorning,
          ).color,
        }}>
        <Main>
          <StatusBar
            backgroundColor={
              forecastConditionsIcons(
                'chuvisco',
                period(currentHour).isMiddle,
                period(currentHour).isMorning,
              ).color
            }
            barStyle={'light-content'}
          />
          {noScroll ? (
            <View testID="noScroll">{children}</View>
          ) : (
            <ScrollView
              testID={testID || 'scroll'}
              showsVerticalScrollIndicator={false}>
              {children}
            </ScrollView>
          )}
        </Main>
      </Content>
    </>
  );
};

export default Container;
