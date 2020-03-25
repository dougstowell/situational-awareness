import world from 'echarts/map/json/world'
import york from '../src/assets/maps/json/york';
import leeds from '../src/assets/maps/json/leeds';
import bradford from '../src/assets/maps/json/bradford';

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
  },

  {
    url: '/sa/map/york',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: york
      }
    }
  },

  {
    url: '/sa/map/leeds',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: leeds
      }
    }
  },

  {
    url: '/sa/map/bradford',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: bradford
      }
    }
  }
]
