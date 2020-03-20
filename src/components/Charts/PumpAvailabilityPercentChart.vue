<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import { pumpAvailabilityList } from '@/api/asset'

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
      default: '935px'
    }
  },
  data() {
    return {
      chartData: null,
      chart: null
    }
  },
  mounted() {
    this.fetchData()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    fetchData() {
      pumpAvailabilityList()
        .then(response => {
          this.chartData = response

          this.initChart()
        })
    },
    initChart() {
      this.chart = echarts.init(this.$el)

      const items = (this.chartData.data.items || []).sort((a, b) => {
        return a.pumpAvailabilityPercentage - b.pumpAvailabilityPercentage
      }).reverse().map(c => ({
        name: c.name,
        pumpAvailabilityPercentageVal: c.pumpAvailabilityPercentage * 100
      }))

      this.chart.setOption({
        title: {
          text: 'Percentage of Pump Availability by Sewage Pumping Station Name',
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
          data: items.map(c => c.name)
        },
        series: items.map((c, i) => {
          const data = new Array(items.length).fill(null)
          data[i] = c.pumpAvailabilityPercentageVal

          return {
            name: c.name,
            type: 'bar',
            stack: 'stack1',
            color: '#004C6C',
            data: data
          }
        })
      })
    }
  }
}
</script>
