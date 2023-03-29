import React from 'react';
import {Svg, G, Path} from 'react-native-svg';
import normalize from '../utils/Normalize';

// import { Container } from './styles';

const ArrowDown: React.FC = () => {
  return (
    <Svg
      fill="white"
      viewBox="0 0 1024 1024"
      width={normalize(20)}
      height={normalize(20)}>
      <G id="SVGRepo_bgCarrier" stroke-width="0" />
      <G
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" />
      </G>
    </Svg>
  );
};

export default ArrowDown;
