import styled from 'styled-components/native';
import {IColumn} from '../../models/Column';

export const Column = styled.View<IColumn>`
  flex-direction: column;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  padding: ${props => props.vertical || 0}px ${props => props.horizontal || 0}px;
`;
