import {device, element, by, waitFor} from 'detox';

const config = {
  launchArgs: {detoxPrintBusyIdleResources: 'YES'},
  permissions: {
    location: 'always',
  },
};
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp(config);
  });

  it('get my location', async () => {
    await element(by.id('onPress')).tap();
  });
  it('scroll home', async () => {
    await element(by.id('scroll', 0.5, 0.5)).scroll(100, 'down');
    await element(by.id('scroll', 0.5, 0.5)).scroll(100, 'up');
  });
  it('search city', async () => {
    await element(by.id('navigateSearch')).tap();
    await element(by.id('searchCity')).replaceText('São Paulo');
    await element(by.id('searchCity')).typeText('\n');
    await element(by.id('sendCity')).tap();
  });
  it('holback location', async () => {
    await element(by.id('reload')).tap();
    await element(by.id('navigateSearch')).tap();

    await element(by.id('getMyLocation')).tap();
  });
  it('view next five days', async () => {
    await element(by.id('scroll', 0.5, 0.5)).scroll(100, 'down');

    await element(by.id('onPressNavigate')).tap();
    await element(by.id('onPressGoback')).tap();
  });
  it('view all items Tomorrow', async () => {
    const list = by.id('AllTowmorrowList');

    const myId = by.id('getId6');

    await waitFor(element(myId).atIndex(0))
      .toBeVisible()
      .whileElement(list)
      .scroll(300, 'right', 0.5, 0.5);
    await element(myId).atIndex(0).tap();

    await element(by.id('onPressGoback')).tap();
    await element(by.id('scroll', 0.5, 0.5)).scroll(100, 'up');
  });
});
