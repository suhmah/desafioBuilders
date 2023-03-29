import React from 'react';
import {Image} from 'react-native';
import normalize from '../../utils/Normalize';

// import { Container } from './styles';

interface IProps {
  path: any;
  size?: number;
  height?: number;
  noSize?: boolean;
}

const IconImage: React.FC<IProps> = ({path, size, height, noSize}) => {
  return (
    <>
      {noSize ? (
        <Image source={path} />
      ) : (
        <Image
          style={{
            width: normalize(size) || normalize(30),
            height: normalize(height) || normalize(size) || normalize(30),
          }}
          source={path}
        />
      )}
    </>
  );
};

export default IconImage;
