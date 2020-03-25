<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts';
import resize from './mixins/resize';

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
      default: '400px'
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);

      this.chart.setOption({
        title: {
          text: 'Percentage of Pump Availability by Is Consented',
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
          data: ['Consented', 'Not Consented']
        },
        series: [
          {
            name: 'Not Consented',
            type: 'bar',
            stack: 'stack1',
            color: '#004C6C',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [null, 94]
          },
          {
            name: 'Consented',
            type: 'bar',
            stack: 'stack1',
            color: '#004C6C',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [90, null]
          }
        ]
      });
    }
  }
};
</script>
