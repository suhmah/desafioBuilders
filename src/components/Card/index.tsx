import styled from 'styled-components/native';
import {ICard} from '../../models/Card';
import {Color} from '../../styles/colors';
import normalize from '../../utils/Normalize';

export const Card = styled.TouchableOpacity<ICard>`
  padding: ${props => normalize(props.paddingTop || 10)}px ${normalize(20)}px;
  background-color: ${props => props?.background};

  border: 1px solid ${props => props?.borderColor || Color.graySecond};
  border-radius: 18px;
`;
