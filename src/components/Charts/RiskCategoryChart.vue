<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

var option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
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
    data: ['Consented', 'Not Consented']
  },
  series: [
    {
      name: 'High',
      type: 'bar',
      stack: 'stack1',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [32, 8]
    },
    {
      name: 'Average',
      type: 'bar',
      stack: 'stack1',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [12, 24]
    },
    {
      name: 'Low',
      type: 'bar',
      stack: 'stack1',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [106, 12]
    }
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
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption(option)
    }
  }
}
</script>
