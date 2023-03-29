import normalize, {SCREEN_WIDTH} from '..';

describe('Normalize', () => {
  test('value was passed', () => {
    const wscale = SCREEN_WIDTH / 375;
    const isValue = 10 * wscale;

    expect(normalize(10)).toBe(isValue);
  });
});
