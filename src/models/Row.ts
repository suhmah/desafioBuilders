export interface IRow {
  justify?:
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-evenly';
  align?:
    | 'space-around'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-evenly';

  vertical?: number;
  horizontal?: number;
  marginTop?: number;
  marginBottom?: number;
}
