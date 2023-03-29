export interface IContainer {
  backgroundBottom?: string;
  color?: string;
  statusBar?: IStatusBar;
  children: any;
  noScroll?: boolean;
  testID?: string;
}

interface IStatusBar {
  background: string;
  barStyle: 'dark-content' | 'light-content';
}
