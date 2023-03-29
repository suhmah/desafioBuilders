import formatter from '../formatter';

describe('Formatter', () => {
  it('Formate Date', () => {
    const date = '2014-04-23T09:54:51';

    const formated = '23/04/14';

    expect(formatter.formatDate(`${date}`)).toBe(formated);
  });
});
