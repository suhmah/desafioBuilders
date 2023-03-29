/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Column} from '../../components/Column';
import Container from '../../components/Container';
import Header from '../../components/Header';
import {Margin} from '../../components/Margin';
import {Row} from '../../components/Row';
import {Text} from '../../components/Text';
import LocationIcon from '../../icons/Location';
import SearchIcon from '../../icons/Search';
import {Color} from '../../styles/colors';
import {getLocation} from '../../services/getLocation';
import {useDispatch} from 'react-redux';

import {Card, TextInput} from './styles';
import {useNavigation} from '@react-navigation/native';
import {apiOpencagedata} from '../../services/apiOpencagedata';
import {getWeather} from '../../store/modules/weather/actions';
import {ActivityIndicator} from 'react-native';
import {LOCATION_KEY} from '../../utils/apiKeys';

const Search: React.FC = () => {
  const {goBack} = useNavigation();
  const dispatch: any = useDispatch();
  const [text, setText] = useState<string>();
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    try {
      setLoading(true);
      const response = await apiOpencagedata.get(
        `json?q=${text}&key=${LOCATION_KEY}&language=pt&pretty=1`,
      );

      const {geometry} = response.data.results[0];

      dispatch(getWeather({lat: geometry.lat, lon: geometry.lng}));
      goBack();
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container>
      <Column horizontal={20} vertical={15}>
        <Header goBack={goBack}>
          <Text size={15} color="white">
            Busca
          </Text>
        </Header>
      </Column>

      <Margin height={15} />

      <Row horizontal={20}>
        <Card style={{flex: 1}}>
          <Row justify="flex-start" align="center">
            <SearchIcon />

            <Margin width={5} />

            <TextInput
              testID="searchCity"
              onChangeText={e => setText(e)}
              placeholderTextColor={Color.gray}
              placeholder="Digite o nome de uma cidade"
            />
          </Row>
        </Card>

        <Margin width={5} />

        <TouchableOpacity
          testID="getMyLocation"
          onPress={() => {
            getLocation();
            goBack();
          }}>
          <Card>
            <LocationIcon />
          </Card>
        </TouchableOpacity>
      </Row>
      {isError && (
        <>
          <Margin height={10} />
          <Row horizontal={20}>
            <Text color="red">Não foi possível carregar essa localidade</Text>
          </Row>
        </>
      )}

      <Margin height={20} />

      <TouchableOpacity
        testID="sendCity"
        onPress={getCity}
        disabled={loading}
        style={{
          alignItems: 'center',
          paddingVertical: 25,
          backgroundColor: ' rgba(0, 0, 0, 0.6)',
        }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text size={16} color="white">
            Buscar cidade
          </Text>
        )}
      </TouchableOpacity>
    </Container>
  );
};

export default Search;
