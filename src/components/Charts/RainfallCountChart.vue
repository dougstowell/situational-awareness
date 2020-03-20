<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

var dataSets = {
  'No Rain': [
    [7, null, null, null],
    [3, null, null, null],
    [6, null, null, null]
  ],
  'Decreasing': [
    [null, null, null, 1],
    [null, null, null, 2],
    [null, null, null, 3]
  ],
  'Increasing': [
    [null, 4, 1, 7],
    [null, 2, 1, 7],
    [null, 4, 2, 3]
  ]
}

var buildOptions = index => {
  return {
    title: {
      text: 'Count of Weather Station by Rainfall Bracket and Trend',
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
      data: ['No Rain', 'Decreasing', 'Increasing']
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
      data: ['None', 'Low', 'Average', 'Very High']
    },
    series: [
      {
        name: 'No Rain',
        type: 'bar',
        stack: 'stack1',
        color: '#C8CBCC',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: dataSets['No Rain'][index]
      },
      {
        name: 'Decreasing',
        type: 'bar',
        stack: 'stack1',
        color: '#92CFDA',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: dataSets['Decreasing'][index]
      },
      {
        name: 'Increasing',
        type: 'bar',
        stack: 'stack1',
        color: '#00B5EF',
        label: {
          show: true,
          position: 'insideRight'
        },
        data: dataSets['Increasing'][index]
      }
    ]
  }
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
    },
    chartIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartIndex: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
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

      this.setOptions(0)
    },

    setOptions(index) {
      this.chart.setOption(buildOptions(index))
    }
  }
}
</script>
