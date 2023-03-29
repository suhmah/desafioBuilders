import styled from 'styled-components/native';
import normalize from '../../utils/Normalize';

export const Card = styled.View`
  width: 100%;

  height: ${normalize(60)}px;

  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 11px;
  padding: 0 ${normalize(15)}px;

  overflow: hidden;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: white;
`;
