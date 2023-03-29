import styled from 'styled-components/native';
import normalize from '../../utils/Normalize';

interface MarginProps {
  height?: number;
  width?: number;
}

export const Margin = styled.View<MarginProps>`
  margin: ${({width}) => normalize(width) || 0}px;
  height: ${({height}) => normalize(height) || 0}px;
`;
