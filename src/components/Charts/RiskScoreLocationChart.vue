<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import { world } from '@/api/map'

var options = {
  title: {
    text: 'Percentage of Pump Availability by Is Consented',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    }
  },
  geo: {
    map: 'world',
    roam: true
  },
  series: [

  ]
}

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '600px'
    }
  },

  data() {
    return {
      chartData: null,
      chart: null
    }
  },

  mounted() {
    this.initChart()
  },

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },

  methods: {
    initChart() {
      world()
        .then(response => {
          echarts.registerMap('world', response.data)

          this.chart = echarts.init(this.$el)
          this.chart.setOption(options)
        })
    }
  }
}
</script>
