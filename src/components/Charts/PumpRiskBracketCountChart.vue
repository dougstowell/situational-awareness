<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

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
      this.chart = echarts.init(this.$el)

      this.chart.setOption({
        title: {
          text: 'Count of Sewage Pumping Station by Risk Bracket',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          top: 25,
          padding: 10,
          data: ['High', 'Average', 'Low']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['Low', 'Average', 'High']
        },
        series: [
          {
            name: 'High',
            type: 'bar',
            stack: 'stack1',
            color: '#741617',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [null, null, 8]
          },
          {
            name: 'Average',
            type: 'bar',
            stack: 'stack1',
            color: '#C8CBCC',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [null, 12, null]
          },
          {
            name: 'Low',
            type: 'bar',
            stack: 'stack1',
            color: '#005742',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [160, null, null]
          }
        ]
      })
    }
  }
}
</script>
