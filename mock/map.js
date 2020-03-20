import world from 'echarts/map/json/world'

export default [
  {
    url: '/sa/map/world',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: world
      }
    }
  }
]
