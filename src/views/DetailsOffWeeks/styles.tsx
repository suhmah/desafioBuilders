import styled from 'styled-components/native';
import normalize from '../../utils/Normalize';

export const Main = styled.View`
  padding-bottom: 100px;
`;

export const ContentInfo = styled.View`
  width: 100%;

  padding: 0 ${normalize(20)}px;

  background: rgba(180, 180, 180, 0.1);

  border-bottom-left-radius: ${normalize(40)}px;
  border-bottom-right-radius: ${normalize(40)}px;
`;
