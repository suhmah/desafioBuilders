import LightRainPNG from '../assets/light-rain.png';
import LightRainMiddlePNG from '../assets/light-rain-middle.png';
import LightRainNightPNG from '../assets/light-rain-night.png';

import RainingPNG from '../assets/raining.png';
import RainingNightPNG from '../assets/raining-night.png';
import RainingMiddlePNG from '../assets/raining-middle.png';

import HeavyRainingPNG from '../assets/heavy-raining.png';
import HeavyRainingMiddlePNG from '../assets/heavy-raining-middle.png';
import HeavyRainingNightPNG from '../assets/heavy-raining-night.png';

import WaterdropPNG from '../assets/waterdrop.png';
import WaterdropMiddlePNG from '../assets/waterdrop-middle.png';
import WaterdropNightPNG from '../assets/waterdrop-night.png';

import RainingAndThunderPNG from '../assets/raining-and-thunder.png';

import HeavyRainingAndThunderPNG from '../assets/heavy-raining-and-thunder.png';
import HeavyRainingAndThunderMiddlePNG from '../assets/heavy-raining-and-thunder-middle.png';
import HeavyRainingAndThunderNightPNG from '../assets/heavy-raining-and-thunder-night.png';

import ThunderPNG from '../assets/thunder.png';
import ThunderMiddlePNG from '../assets/thunder-middle.png';
import ThunderNightPNG from '../assets/thunder-night.png';

import HailstonePNG from '../assets/hailstone.png';
import HailstoneMiddlePNG from '../assets/hailstone-middle.png';
import HailstoneNightPNG from '../assets/hailstone-night.png';

import CloudPNG from '../assets/cloud.png';

import SunPNG from '../assets/sun.png';

import NightPNG from '../assets/night.png';

import FogPNG from '../assets/fog.png';
import FogMiddlePNG from '../assets/fog-middle.png';
import FogNightPNG from '../assets/fog-night.png';

import IcyFogPNG from '../assets/icy-fog.png';
import IcyFogMiddlePNG from '../assets/icy-fog-middle.png';
import IcyFogNightPNG from '../assets/icy-fog-night.png';

import MidSnowFastWindsPNG from '../assets/mid-snow-fast-winds.png';

import FreezingHeavyRainingPNG from '../assets/freezing-heavy-raining.png';
import FreezingHeavyRainingMiddlePNG from '../assets/freezing-heavy-raining-middle.png';
import FreezingHeavyRainingNightPNG from '../assets/freezing-heavy-raining-night.png';

import FreezingLightRainPNG from '../assets/freezing-light-rain.png';
import FreezingLightRainMiddlePNG from '../assets/freezing-light-rain-middle.png';
import FreezingLightRainNightPNG from '../assets/freezing-light-rain-night.png';

import FreezingRainingPNG from '../assets/freezing-raining.png';
import FreezingRainingNightPNG from '../assets/freezing-raining-night.png';
import FreezingRainingMiddlePNG from '../assets/freezing-raining-middle.png';

import BlizzardPNG from '../assets/blizzard.png';
import BlizzardMiddlePNG from '../assets/blizzard-middle.png';
import BlizzardNightPNG from '../assets/blizzard-night.png';

import SnowingPNG from '../assets/snowing.png';
import SnowingMiddlePNG from '../assets/snowing-middle.png';
import SnowingNightPNG from '../assets/snowing-night.png';

import SnowLightRainPNG from '../assets/snow-light-rain.png';
import SnowLightRainMiddlePNG from '../assets/snow-light-rain-middle.png';
import SnowLightRainNightPNG from '../assets/snow-light-rain-night.png';

import SnowHeavyRainingPNG from '../assets/snow-heavy-raining.png';
import SnowHeavyRainingMiddlePNG from '../assets/snow-heavy-raining-middle.png';
import SnowHeavyRainingNightPNG from '../assets/snow-heavy-raining-night.png';

import SnowWithThunderPNG from '../assets/snow-with-thunder.png';

import SnowPNG from '../assets/snow.png';

import SandDustCloudPNG from '../assets/sand-dust-cloud.png';

import VolcanicAshCloud from '../assets/volcanic-ash-cloud.png';
import {Color} from '../styles/colors';

import TornadoPNG from '../assets/tornado.png';

import SandDustWhirls from '../assets/sand-dust-whirls.png';

import Squalls from '../assets/squalls.png';

export const forecastConditionsIcons = (
  weatherCondition: string,
  isMiddle: boolean,
  isMorning: boolean,
) => {
  switch (
    weatherCondition.charAt(0).toUpperCase() + weatherCondition.slice(1)
  ) {
    case 'Chuvisco':
    case 'Chuva leve':
    case 'Chuva fraca':
    case 'Chuva e garoa':
    case 'Chuvisco irregular':
    case 'Chuva fraca irregular':
    case 'Garoa de intensidade leve':
      if (isMorning) {
        return {icon: LightRainPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: LightRainMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {icon: LightRainNightPNG, color: Color.status.night.background};
      }

    //
    case 'Chuva':
    case 'Chuva de banho':
    case 'Chuva moderada':
    case 'Tempestade irregular':
    case 'Períodos de chuva moderada':
    case 'Possibilidade de chuva irregular':
      if (isMorning) {
        return {icon: RainingPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {icon: RainingMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: RainingNightPNG, color: Color.status.night.background};
      }

    //
    case 'Chuva forte':
    case 'Chuva extrema':
    case 'Chuva torrencial':
    case 'Chuva muito forte':
    case 'Chuva forte e garoa':
    case 'Períodos de chuva forte':
    case 'Chuva de forte intensidade':
    case 'Garoa de forte intensidade':
      if (isMorning) {
        return {icon: HeavyRainingPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: HeavyRainingMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: HeavyRainingNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Aguaceiros fracos':
    case 'Aguaceiros moderados ou fortes':
    case 'Chuva de chuva de intensidade leve':
      if (isMorning) {
        return {icon: WaterdropPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: WaterdropMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {icon: WaterdropNightPNG, color: Color.status.night.background};
      }

    //
    case 'Chuva fraca irregular com trovoada':
    case 'Chuva torrencial':
    case 'Leve tempestade':
    case 'Trovoada com garoa':
    case 'Trovoada com chuva leve':
    case 'Trovoada com garoa leve':
    case 'Trovoada com garoa forte':
      return {icon: RainingAndThunderPNG, color: Color.status.night.background};

    //
    case 'Forte tempestade':
    case 'Trovoada com chuva':
    case 'Chuva moderada ou forte com trovoada':
    case 'Trovoada com chuva forte':
      if (isMorning) {
        return {
          icon: HeavyRainingAndThunderPNG,
          color: Color.status.light.background,
        };
      } else if (isMiddle) {
        return {
          icon: HeavyRainingAndThunderMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: HeavyRainingAndThunderNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Trovoada':
    case 'Possibilidade de trovoada':
      if (isMorning) {
        return {icon: ThunderPNG, color: Color.status.night.background};
      } else if (isMiddle) {
        return {icon: ThunderMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: ThunderNightPNG, color: Color.status.night.background};
      }

    //
    case 'Granizo':
    case 'Chuva de granizo':
    case 'Aguaceiros fracos com granizo':
    case 'Aguaceiros moderados ou fortes com granizo':
      if (isMorning) {
        return {icon: HailstonePNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: HailstoneMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {icon: HailstoneNightPNG, color: Color.status.night.background};
      }

    //
    case 'Nublado':
    case 'Encoberto':
    case 'Poucas nuvens':
    case 'Nuvens quebradas':
    case 'Nuvens dispersas':
    case 'Céu pouco nublado':
    case 'Parcialmente nublado':
      return {icon: CloudPNG, color: Color.status.night.background};
    case 'Sol':
      return {icon: SunPNG, color: Color.status.light.background};
    case 'Céu limpo':
      if (isMorning) {
        return {icon: CloudPNG, color: Color.status.night.background};
      } else if (isMiddle) {
        return {icon: CloudPNG, color: Color.status.middle.background};
      } else {
        return {icon: NightPNG, color: Color.status.night.background};
      }

    //
    case 'Neblina':
    case 'Nevoeiro':
    case 'Névoa':
      if (isMorning) {
        return {icon: FogPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {icon: FogMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: FogNightPNG, color: Color.status.night.background};
      }

    //
    case 'Nevoeiro gelado':
      if (isMorning) {
        return {icon: IcyFogPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {icon: IcyFogMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: IcyFogNightPNG, color: Color.status.night.background};
      }

    //
    case 'Rajadas de vento com neve':
      return {icon: MidSnowFastWindsPNG, color: 'red'};
    case 'Chuva congelante':
    case 'Chuva gelada moderada ou forte':
      if (isMorning) {
        return {
          icon: FreezingHeavyRainingPNG,
          color: Color.status.light.background,
        };
      } else if (isMiddle) {
        return {
          icon: FreezingHeavyRainingMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: FreezingHeavyRainingNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Chuvisco gelado':
    case 'Chuva fraca e gelada':
      if (isMorning) {
        return {
          icon: FreezingLightRainPNG,
          color: Color.status.light.background,
        };
      } else if (isMiddle) {
        return {
          icon: FreezingLightRainMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: FreezingLightRainNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Chuvisco forte gelado':
    case 'Possibilidade de chuvisco gelado irregular':
      if (isMorning) {
        return {icon: FreezingRainingPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: FreezingRainingMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: FreezingRainingNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Nevasca':
    case 'Chuva de neve':
      if (isMorning) {
        return {icon: BlizzardPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {icon: BlizzardMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: BlizzardNightPNG, color: Color.status.night.background};
      }

    //
    case 'Neve':
    case 'Neve fraca':
    case 'Queda de neve fraca':
    case 'Queda de neve moderada':
    case 'Queda de neve irregular e fraca':
    case 'Possibilidade de neve irregular':
    case 'Queda de neve moderada e irregular':
    case 'Possibilidade de neve molhada irregular':
      if (isMorning) {
        return {icon: SnowingPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {icon: SnowingMiddlePNG, color: Color.status.middle.background};
      } else {
        return {icon: SnowingNightPNG, color: Color.status.night.background};
      }

    //
    case 'Chuva fraca com neve':
    case 'Chuva fraca e neve':
    case 'Chuva de neve leve':
    case 'Aguaceiros fracos com neve':
    case 'Possibilidade de chuvisco gelado irregular':
      if (isMorning) {
        return {icon: SnowLightRainPNG, color: Color.status.light.background};
      } else if (isMiddle) {
        return {
          icon: SnowLightRainMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: SnowLightRainNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Chuva e neve':
    case 'Chuva forte de neve':
    case 'Aguaceiros fracos com neve':
    case 'Chuva forte ou moderada com neve':
    case 'Aguaceiros moderados ou fortes com neve':
      if (isMorning) {
        return {
          icon: SnowHeavyRainingPNG,
          color: Color.status.light.background,
        };
      } else if (isMiddle) {
        return {
          icon: SnowHeavyRainingMiddlePNG,
          color: Color.status.middle.background,
        };
      } else {
        return {
          icon: SnowHeavyRainingNightPNG,
          color: Color.status.night.background,
        };
      }

    //
    case 'Neve fraca irregular com trovoada':
    case 'Neve moderada ou forte com trovoada':
      return {icon: SnowWithThunderPNG, color: Color.status.light.background};
    //
    case 'Neve intensa':
    case 'Neve pesada':
    case 'Possibilidade de neve irregular':
    case 'Possibilidade de neve molhada irregular':
      return {icon: SnowPNG, color: Color.status.light.background};
    //
    case 'Pó':
    case 'Areia':
      return {icon: SandDustCloudPNG, color: Color.status.light.background};
    //
    case 'Cinza vulcanica':
      return {icon: VolcanicAshCloud, color: Color.status.night.background};
    //
    case 'Tornado':
      return {icon: TornadoPNG, color: Color.status.night.background};
    //
    case 'Confusão':
    case 'Redemoinhos de areia/poeira':
      //
      return {icon: SandDustWhirls, color: Color.status.night.background};
    //
    case 'Rajadas':
      return {icon: Squalls, color: Color.status.night.background};
    default:
      return {icon: CloudPNG, color: Color.status.night.background};
  }
};
