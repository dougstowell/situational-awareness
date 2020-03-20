import Mock from 'mockjs'

export default [
  {
    url: '/sa/pump-availability/list',
    type: 'get',
    response: _ => {

      return {
        code: 20000,
        data: {
          total: 40,
          'items|40': [{
            name: '@title(3)',
            'consented|1': ['Consented', 'Not Consented'],
            riskScore: '@natural(0, 100)',
            nhrAlarmsDurationLessThanFive: '@natural(0, 3)',
            nhrAlarmsDurationThreeToFive: '@natural(0, 3)',
            nhrAlarmsDurationGreaterThanFive: '@natural(0, 3)',
            availablePumps: '@natural(1, 5)',
            unavailablePumps: '@natural(1, 5)',
            timestamp: Mock.Random.date('yyyy-MM-dd A HH:mm:ss'),
            'pumps|4': [{
              name: '@word()',
              tagName: '@word()',
              'tagValue|1': ['Available', 'Unavailable'],
              availablePumps: '@natural(1, 5)',
              unavailablePumps: '@natural(1, 5)'
            }]
          }]
        }
      }
    }
  }
]
