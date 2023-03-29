/* eslint-disable prettier/prettier */
import { Dimensions, PixelRatio  } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 375;

export default function normalize(size?: number,): number {
    const newSize =  size * wscale;
    return PixelRatio.roundToNearestPixel(newSize);

}
export const WIDTH = SCREEN_WIDTH;
export const HEIGHT = SCREEN_HEIGHT;
