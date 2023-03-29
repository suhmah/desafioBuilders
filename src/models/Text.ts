export interface IText {
  color?: string;
  size?: number;
  textAlign?: 'center' | 'left' | 'right' | 'justify';
  weight?: number;
  textDecoration?: boolean;
  upcase?: boolean;
  fontFamily?:
    | 'Overpass-Black'
    | 'Overpass-BlackItalic'
    | 'Overpass-Bold'
    | 'Overpass-BoldItalic'
    | 'Overpass-ExtraLight'
    | 'Overpass-ExtraLight'
    | 'Overpass-ExtraLight'
    | 'Overpass-Light'
    | 'Overpass-Italic'
    | 'Overpass-LightItalic'
    | 'Overpass-Medium'
    | 'Overpass-MediumItalic'
    | 'Overpass-Regular'
    | 'Overpass-SemiBold'
    | 'Overpass-SemiBoldItalic'
    | 'Overpass-Thin'
    | 'Overpass-ThinItalic';
}
