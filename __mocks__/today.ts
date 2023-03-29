export const mockData = {
  data: {
    coord: {
      lon: 10.99,
      lat: 44.34,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'céu limpo',
        icon: '01n',
      },
    ],
    base: 'stations',
    main: {
      temp: 4.19,
      feels_like: 4.19,
      temp_min: 3.71,
      temp_max: 4.41,
      pressure: 1019,
      humidity: 49,
      sea_level: 1019,
      grnd_level: 930,
    },
    visibility: 10000,
    wind: {
      speed: 0.67,
      deg: 283,
      gust: 1.01,
    },
    clouds: {
      all: 2,
    },
    dt: 1679962149,
    sys: {
      type: 2,
      id: 2004688,
      country: 'IT',
      sunrise: 1679979917,
      sunset: 1680025018,
    },
    timezone: 7200,
    id: 3163858,
    name: 'Zocca',
    cod: 200,
  },
  city: 'araguaína',
  country: 'Brasil',
  adress: ' Rua 10',
};
export const mockDataNotToday = {
  city: 'araguaína',
  country: 'Brasil',
  adress: ' Rua 10',
};

export const ListMock = {
  dt: 1679994000,
  main: {
    temp: 5.05,
    feels_like: 5.05,
    temp_min: 5.05,
    temp_max: 7.33,
    pressure: 1023,
    sea_level: 1023,
    grnd_level: 936,
    humidity: 47,
    temp_kf: -2.28,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'céu limpo',
      icon: '01d',
    },
  ],
  clouds: {
    all: 0,
  },
  wind: {
    speed: 1.27,
    deg: 16,
    gust: 1.31,
  },
  visibility: 10000,
  pop: 0,
  sys: {
    pod: 'd',
  },
  dt_txt: new Date(),
};
export const ListArrayMock = [
  {
    dt: 1679994000,
    main: {
      temp: 5.05,
      feels_like: 5.05,
      temp_min: 5.05,
      temp_max: 7.33,
      pressure: 1023,
      sea_level: 1023,
      grnd_level: 936,
      humidity: 47,
      temp_kf: -2.28,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'céu limpo',
        icon: '01d',
      },
    ],
    clouds: {
      all: 0,
    },
    wind: {
      speed: 1.27,
      deg: 16,
      gust: 1.31,
    },
    visibility: 10000,
    pop: 0,
    sys: {
      pod: 'd',
    },
    dt_txt: new Date(),
  },
];

export const forescast = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1679983200,
      main: {
        temp: 0.84,
        feels_like: 0.84,
        temp_min: 0.84,
        temp_max: 1.53,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 933,
        humidity: 57,
        temp_kf: -0.69,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'céu limpo',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.9,
        deg: 237,
        gust: 0.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-28 06:00:00',
    },
    {
      dt: 1679994000,
      main: {
        temp: 5.05,
        feels_like: 5.05,
        temp_min: 5.05,
        temp_max: 7.33,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 936,
        humidity: 47,
        temp_kf: -2.28,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'céu limpo',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.27,
        deg: 16,
        gust: 1.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-28 09:00:00',
    },
    {
      dt: 1680004800,
      main: {
        temp: 9.96,
        feels_like: 8.92,
        temp_min: 9.96,
        temp_max: 9.96,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 936,
        humidity: 37,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'céu limpo',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.3,
        deg: 23,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-28 12:00:00',
    },
    {
      dt: 1680015600,
      main: {
        temp: 10.1,
        feels_like: 8.24,
        temp_min: 10.1,
        temp_max: 10.1,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 936,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 1.43,
        deg: 45,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-28 15:00:00',
    },
    {
      dt: 1680026400,
      main: {
        temp: 4.9,
        feels_like: 4.9,
        temp_min: 4.9,
        temp_max: 4.9,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 936,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 0.94,
        deg: 153,
        gust: 1.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-28 18:00:00',
    },
    {
      dt: 1680037200,
      main: {
        temp: 3.47,
        feels_like: 1.24,
        temp_min: 3.47,
        temp_max: 3.47,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 937,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 2.34,
        deg: 207,
        gust: 2.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-28 21:00:00',
    },
    {
      dt: 1680048000,
      main: {
        temp: 2.27,
        feels_like: -0.65,
        temp_min: 2.27,
        temp_max: 2.27,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 937,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'algumas nuvens',
          icon: '02n',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.85,
        deg: 205,
        gust: 3.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-29 00:00:00',
    },
    {
      dt: 1680058800,
      main: {
        temp: 1.69,
        feels_like: -1.13,
        temp_min: 1.69,
        temp_max: 1.69,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 936,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'céu limpo',
          icon: '01n',
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 2.62,
        deg: 202,
        gust: 3.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-29 03:00:00',
    },
    {
      dt: 1680069600,
      main: {
        temp: 3.02,
        feels_like: 1.02,
        temp_min: 3.02,
        temp_max: 3.02,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 937,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03d',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 2.04,
        deg: 203,
        gust: 3.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-29 06:00:00',
    },
    {
      dt: 1680080400,
      main: {
        temp: 8.85,
        feels_like: 8.85,
        temp_min: 8.85,
        temp_max: 8.85,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 938,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.2,
        deg: 203,
        gust: 2.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-29 09:00:00',
    },
    {
      dt: 1680091200,
      main: {
        temp: 10.92,
        feels_like: 9.43,
        temp_min: 10.92,
        temp_max: 10.92,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 937,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.28,
        deg: 207,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-29 12:00:00',
    },
    {
      dt: 1680102000,
      main: {
        temp: 10.95,
        feels_like: 9.59,
        temp_min: 10.95,
        temp_max: 10.95,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 936,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.09,
        deg: 187,
        gust: 2.69,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-29 15:00:00',
    },
    {
      dt: 1680112800,
      main: {
        temp: 6.42,
        feels_like: 4.81,
        temp_min: 6.42,
        temp_max: 6.42,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 936,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.23,
        deg: 179,
        gust: 3.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-29 18:00:00',
    },
    {
      dt: 1680123600,
      main: {
        temp: 5.24,
        feels_like: 2.78,
        temp_min: 5.24,
        temp_max: 5.24,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 937,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 3.02,
        deg: 199,
        gust: 5.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-29 21:00:00',
    },
    {
      dt: 1680134400,
      main: {
        temp: 4.79,
        feels_like: 2.17,
        temp_min: 4.79,
        temp_max: 4.79,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 936,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.11,
        deg: 191,
        gust: 5.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-30 00:00:00',
    },
    {
      dt: 1680145200,
      main: {
        temp: 4.76,
        feels_like: 2.45,
        temp_min: 4.76,
        temp_max: 4.76,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 936,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.7,
        deg: 198,
        gust: 4.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-30 03:00:00',
    },
    {
      dt: 1680156000,
      main: {
        temp: 5.83,
        feels_like: 4.03,
        temp_min: 5.83,
        temp_max: 5.83,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 936,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.33,
        deg: 197,
        gust: 3.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-30 06:00:00',
    },
    {
      dt: 1680166800,
      main: {
        temp: 9.19,
        feels_like: 8.5,
        temp_min: 9.19,
        temp_max: 9.19,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 936,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.72,
        deg: 182,
        gust: 3.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-30 09:00:00',
    },
    {
      dt: 1680177600,
      main: {
        temp: 9.8,
        feels_like: 8.92,
        temp_min: 9.8,
        temp_max: 9.8,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 935,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.05,
        deg: 190,
        gust: 3.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-30 12:00:00',
    },
    {
      dt: 1680188400,
      main: {
        temp: 11.41,
        feels_like: 10.25,
        temp_min: 11.41,
        temp_max: 11.41,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 933,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.82,
        deg: 211,
        gust: 4.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-30 15:00:00',
    },
    {
      dt: 1680199200,
      main: {
        temp: 6.99,
        feels_like: 6.15,
        temp_min: 6.99,
        temp_max: 6.99,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 932,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.56,
        deg: 232,
        gust: 3.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-30 18:00:00',
    },
    {
      dt: 1680210000,
      main: {
        temp: 5.57,
        feels_like: 3.3,
        temp_min: 5.57,
        temp_max: 5.57,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 932,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 59,
      },
      wind: {
        speed: 2.85,
        deg: 205,
        gust: 4.43,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-30 21:00:00',
    },
    {
      dt: 1680220800,
      main: {
        temp: 4.88,
        feels_like: 2.58,
        temp_min: 4.88,
        temp_max: 4.88,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 931,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 2.72,
        deg: 199,
        gust: 4.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-31 00:00:00',
    },
    {
      dt: 1680231600,
      main: {
        temp: 4.59,
        feels_like: 2.3,
        temp_min: 4.59,
        temp_max: 4.59,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 929,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 82,
      },
      wind: {
        speed: 2.63,
        deg: 202,
        gust: 4.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-31 03:00:00',
    },
    {
      dt: 1680242400,
      main: {
        temp: 5.59,
        feels_like: 3.52,
        temp_min: 5.59,
        temp_max: 5.59,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 928,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 2.6,
        deg: 202,
        gust: 4.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-31 06:00:00',
    },
    {
      dt: 1680253200,
      main: {
        temp: 9.86,
        feels_like: 8.89,
        temp_min: 9.86,
        temp_max: 9.86,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 926,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 2.17,
        deg: 178,
        gust: 5.18,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-31 09:00:00',
    },
    {
      dt: 1680264000,
      main: {
        temp: 9.99,
        feels_like: 9.79,
        temp_min: 9.99,
        temp_max: 9.99,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 924,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 91,
      },
      wind: {
        speed: 1.36,
        deg: 200,
        gust: 5.31,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-31 12:00:00',
    },
    {
      dt: 1680274800,
      main: {
        temp: 9.82,
        feels_like: 9.82,
        temp_min: 9.82,
        temp_max: 9.82,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 922,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.26,
        deg: 213,
        gust: 3.16,
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-03-31 15:00:00',
    },
    {
      dt: 1680285600,
      main: {
        temp: 7.43,
        feels_like: 6.69,
        temp_min: 7.43,
        temp_max: 7.43,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 922,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.52,
        deg: 199,
        gust: 3.15,
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-31 18:00:00',
    },
    {
      dt: 1680296400,
      main: {
        temp: 6.44,
        feels_like: 4.98,
        temp_min: 6.44,
        temp_max: 6.44,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 921,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 2.07,
        deg: 200,
        gust: 3.49,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-03-31 21:00:00',
    },
    {
      dt: 1680307200,
      main: {
        temp: 6.18,
        feels_like: 4.81,
        temp_min: 6.18,
        temp_max: 6.18,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 920,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04n',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 1.93,
        deg: 190,
        gust: 2.86,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-01 00:00:00',
    },
    {
      dt: 1680318000,
      main: {
        temp: 6.47,
        feels_like: 5.07,
        temp_min: 6.47,
        temp_max: 6.47,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 918,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '03n',
        },
      ],
      clouds: {
        all: 46,
      },
      wind: {
        speed: 2.01,
        deg: 197,
        gust: 2.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-01 03:00:00',
    },
    {
      dt: 1680328800,
      main: {
        temp: 7.16,
        feels_like: 6.6,
        temp_min: 7.16,
        temp_max: 7.16,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 917,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 1.35,
        deg: 200,
        gust: 3.12,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-04-01 06:00:00',
    },
    {
      dt: 1680339600,
      main: {
        temp: 9.15,
        feels_like: 8.83,
        temp_min: 9.15,
        temp_max: 9.15,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 917,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nublado',
          icon: '04d',
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 1.37,
        deg: 170,
        gust: 3.71,
      },
      visibility: 10000,
      pop: 0.3,
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-04-01 09:00:00',
    },
    {
      dt: 1680350400,
      main: {
        temp: 10.67,
        feels_like: 9.59,
        temp_min: 10.67,
        temp_max: 10.67,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 915,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.17,
        deg: 169,
        gust: 3.15,
      },
      visibility: 10000,
      pop: 0.54,
      rain: {
        '3h': 0.46,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-04-01 12:00:00',
    },
    {
      dt: 1680361200,
      main: {
        temp: 9.83,
        feels_like: 9.83,
        temp_min: 9.83,
        temp_max: 9.83,
        pressure: 998,
        sea_level: 998,
        grnd_level: 913,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.11,
        deg: 81,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0.91,
      rain: {
        '3h': 1.78,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2023-04-01 15:00:00',
    },
    {
      dt: 1680372000,
      main: {
        temp: 6.35,
        feels_like: 4.8,
        temp_min: 6.35,
        temp_max: 6.35,
        pressure: 998,
        sea_level: 998,
        grnd_level: 912,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.15,
        deg: 260,
        gust: 3.8,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        '3h': 4.8,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-01 18:00:00',
    },
    {
      dt: 1680382800,
      main: {
        temp: 4.21,
        feels_like: 4.21,
        temp_min: 4.21,
        temp_max: 4.21,
        pressure: 998,
        sea_level: 998,
        grnd_level: 912,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.26,
        deg: 210,
        gust: 1.36,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        '3h': 4.48,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-01 21:00:00',
    },
    {
      dt: 1680393600,
      main: {
        temp: 4.48,
        feels_like: 2.75,
        temp_min: 4.48,
        temp_max: 4.48,
        pressure: 998,
        sea_level: 998,
        grnd_level: 912,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'chuva leve',
          icon: '10n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.01,
        deg: 277,
        gust: 2.71,
      },
      visibility: 10000,
      pop: 0.78,
      rain: {
        '3h': 0.38,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-02 00:00:00',
    },
    {
      dt: 1680404400,
      main: {
        temp: 4.68,
        feels_like: 2.54,
        temp_min: 4.68,
        temp_max: 4.68,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 913,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'chuva moderada',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.48,
        deg: 356,
        gust: 6.34,
      },
      visibility: 7958,
      pop: 0.91,
      rain: {
        '3h': 7.69,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2023-04-02 03:00:00',
    },
  ],
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lat: 44.34,
      lon: 10.99,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
    sunrise: 1679979917,
    sunset: 1680025018,
  },
};
export const mockSucces = {
  loading: false,
  loadingToday: false,
  data: forescast,
  country: 'brasil',
  city: 'rio',
  adress: 'rua b',
  week: {
    data: [
      {
        dt: 1679983200,
        main: {
          temp: 0.84,
          feels_like: 0.84,
          temp_min: 0.84,
          temp_max: 1.53,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 933,
          humidity: 57,
          temp_kf: -0.69,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 0.9,
          deg: 237,
          gust: 0.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-03-28 06:00:00',
      },
    ],
    period: {
      isMiddle: false,
      isMorning: true,
    },
  },
};
