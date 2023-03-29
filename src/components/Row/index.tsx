import styled from 'styled-components/native';
import {IRow} from '../../models/Row';

export const Row = styled.View<IRow>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  padding: ${props => props.vertical || 0}px ${props => props.horizontal || 0}px;
`;
