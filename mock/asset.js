import Mock from 'mockjs';

var lng = [
  -0.9043473410000,
  -1.1002682710000,
  -1.1022900440000,
  -1.1128999970000,
  -0.9760981040000,
  -0.9764581910000,
  -0.9745242390000,
  -1.0679881950000,
  -1.0679881950000,
  -1.0606575060000,
  -1.1022693150000,
  -1.0287075000000,
  -1.1049412120000,
  -1.1060537520000,
  -0.9437369760000,
  -1.0052365410000,
  -1.0443084570000,
  -0.9718265280000
];

var lat = [
  54.1303436600000,
  53.9817340600000,
  53.9841579600000,
  53.9742959800000,
  53.9629171000000,
  53.9587946100000,
  53.9804665000000,
  53.9823150300000,
  53.9823150300000,
  53.9943289000000,
  53.9255107400000,
  53.9599473000000,
  53.9892469600000,
  53.9771753500000,
  54.0166287600000,
  53.9938561700000,
  54.0381604200000,
  53.9909415700000
];

const buildMarkers = (times, latOffset = 0, lngOffset = 0) => {
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push({
      name: '@title(3)',
      lat: lat[Math.floor(Math.random() * lat.length)] - latOffset,
      lng: lng[Math.floor(Math.random() * lng.length)] - lngOffset,
      riskScore: '@natural(0, 100)',
      numberOfPumps: '@natural(1, 5)',
      'consented|1': ['Consented', 'Not Consented'],
      assetType: 'SPS'
    });
  }

  return result;
}

export default [
  {
    url: '/sa/pump-availability/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          total: 40,
          'items|40': [
            {
              name: '@title(3)',
              'consented|1': ['Consented', 'Not Consented'],
              riskScore: '@natural(0, 100)',
              nhrAlarmsDurationLessThanFive: '@natural(0, 3)',
              nhrAlarmsDurationThreeToFive: '@natural(0, 3)',
              nhrAlarmsDurationGreaterThanFive: '@natural(0, 3)',
              availablePumps: '@natural(1, 5)',
              unavailablePumps: '@natural(1, 5)',
              timestamp: Mock.Random.date('yyyy-MM-dd A HH:mm:ss'),
              'pumps|4': [
                {
                  name: '@word()',
                  tagName: '@word()',
                  'tagValue|1': ['Available', 'Unavailable'],
                  availablePumps: '@natural(1, 5)',
                  unavailablePumps: '@natural(1, 5)'
                }
              ]
            }
          ]
        }
      };
    }
  },
  {
    url: '/sa/pump-score/list',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          'York': {
            name: 'York',
            lat: 53.958332,
            lng: -1.080278,
            markers: buildMarkers(18)
          },
          'Leeds': {
            name: 'Leeds',
            lat: 53.801277,
            lng: -1.548567,
            markers: buildMarkers(7, 0.15, 0.5)
          },
          'Bradford': {
            name: 'Bradford',
            lat: 53.799999,
            lng: -1.75,
            markers: buildMarkers(13, 0.15, 0.75)
          }
        }
      };
    }
  }
];
