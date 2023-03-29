import {Color} from '../../styles/colors';
import {forecastConditionsIcons} from '../forecastIcon';
import {period} from '../period';

describe('forecastIcon', () => {
  describe('test case chuvisco and corresponding', () => {
    const state = 'chuvisco';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuva and corresponding', () => {
    const state = 'Chuva';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });

  describe('test case Chuva forte and corresponding', () => {
    const state = 'Chuva forte';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Aguaceiros fracos and corresponding', () => {
    const state = 'Aguaceiros fracos';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuva fraca irregular com trovoada and corresponding', () => {
    const state = 'Chuva fraca irregular com trovoada';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Forte tempestade and corresponding', () => {
    const state = 'Forte tempestade';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Trovoada and corresponding', () => {
    const state = 'Trovoada';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Nublado and corresponding', () => {
    const state = 'Nublado';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Neblina and corresponding', () => {
    const state = 'Neblina';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Nevoeiro gelado and corresponding', () => {
    const state = 'Nevoeiro gelado';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Rajadas de vento com neve and corresponding', () => {
    const state = 'Rajadas de vento com neve';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe('red');
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe('red');
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe('red');
      });
    });
  });
  describe('test case Chuvisco gelado and corresponding', () => {
    const state = 'Chuvisco gelado';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuvisco forte gelado and corresponding', () => {
    const state = 'Chuvisco forte gelado';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Nevasca and corresponding', () => {
    const state = 'Nevasca';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Neve and corresponding', () => {
    const state = 'Neve';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuva fraca com neve and corresponding', () => {
    const state = 'Chuva fraca com neve';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuva e neve and corresponding', () => {
    const state = 'Chuva e neve';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Neve fraca irregular com trovoada and corresponding', () => {
    const state = 'Neve fraca irregular com trovoada';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
  });
  describe('test case Neve intensa and corresponding', () => {
    const state = 'Neve intensa';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
  });
  describe('test case Pó and corresponding', () => {
    const state = 'Pó';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
  });
  describe('test case Cinza vulcanica and corresponding', () => {
    const state = 'Cinza vulcanica';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Tornado and corresponding', () => {
    const state = 'Tornado';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Confusão and corresponding', () => {
    const state = 'Confusão';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Rajadas and corresponding', () => {
    const state = 'Rajadas';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case default and corresponding', () => {
    const state = 'default';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Chuva congelante and corresponding', () => {
    const state = 'Chuva congelante';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Sol and corresponding', () => {
    const state = 'Sol';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
  });
  describe('test case Granizo and corresponding', () => {
    const state = 'Granizo';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.light.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
  describe('test case Céu limpo and corresponding', () => {
    const state = 'Céu limpo';
    describe('test morning,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(15).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
    describe('test middle,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(16).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.middle.background);
      });
    });
    describe('test nigth,', () => {
      it('Formate Date', () => {
        const forescat = forecastConditionsIcons(
          state,
          period(18).isMiddle,
          period(18).isMorning,
        ).color;

        expect(forescat).toBe(Color.status.night.background);
      });
    });
  });
});
