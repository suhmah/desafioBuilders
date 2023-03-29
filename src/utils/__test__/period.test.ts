import {period} from '../period';

describe('Period', () => {
  describe('get period morning', () => {
    it('get period ', () => {
      const hour = 10;

      const item = {isMiddle: false, isMorning: true};

      expect(period(hour).isMiddle).toBe(item.isMiddle);
      expect(period(hour).isMorning).toBe(item.isMorning);
    });
  });
  describe('get period middle', () => {
    it('get period ', () => {
      const hour = 16;

      const item = {isMiddle: true, isMorning: false};

      expect(period(hour).isMiddle).toBe(item.isMiddle);
      expect(period(hour).isMorning).toBe(item.isMorning);
    });
  });
  describe('get period nigth', () => {
    it('get period ', () => {
      const hour = 19;

      const item = {isMiddle: false, isMorning: false};

      expect(period(hour).isMiddle).toBe(item.isMiddle);
      expect(period(hour).isMorning).toBe(item.isMorning);
    });
  });
});
