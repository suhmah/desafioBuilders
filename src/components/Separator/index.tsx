import styled from 'styled-components/native';
import {Color} from '../../styles/colors';
import normalize from '../../utils/Normalize';

export const Separetor = styled.View`
  width: ${normalize(36)}px;

  border: 1px solid ${Color.graySecond};
  transform: rotate(90deg);
`;
