import styled from 'styled-components/native';
import {IText} from '../../models/Text';
import normalize from '../../utils/Normalize';

export const Text = styled.Text.attrs({allowFontScaling: false})<IText>`
  color: ${props => props.color};
  font-size: ${props => normalize(props?.size) || normalize(12)}px;
  font-weight: ${props => props.weight || 400};
  font-family: ${props => props.fontFamily || 'Overpass-Medium'};
  font-variant: lining-nums;
`;
