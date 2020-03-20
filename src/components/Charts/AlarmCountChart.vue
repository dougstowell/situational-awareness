<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

var option = {
  title: {
    text: 'Count of Alarm by Alarm Priority and State',
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
    data: ['Noted', 'Noted Cleared', 'Noted High Rainfall', '3-4 Unacknowledged', '0-2 Unacknowledged']
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
    data: ['4', '3', '2', '1', '0']
  },
  series: [
    {
      name: 'Noted',
      type: 'bar',
      stack: 'stack1',
      color: '#FFE900',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [1, 4, 12, null, null]
    },
    {
      name: 'Noted Cleared',
      type: 'bar',
      stack: 'stack1',
      color: '#00AE84',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [null, 3, 4, null, null]
    },
    {
      name: 'Noted High Rainfall',
      type: 'bar',
      stack: 'stack1',
      color: '#000000',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [null, 3, 14, null, null]
    },
    {
      name: '3-4 Unacknowledged',
      type: 'bar',
      stack: 'stack1',
      color: '#FFB800',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [null, 16, null, null, null]
    },
    {
      name: '0-2 Unacknowledged',
      type: 'bar',
      stack: 'stack1',
      color: '#E82C2E',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [null, null, 17, 1, 3]
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
      default: '300px'
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

      this.chart.setOption(option)
    }
  }
}
</script>
