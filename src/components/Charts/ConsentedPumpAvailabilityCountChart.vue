<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts';
import resize from './mixins/resize';

var option = {
  title: {
    text: 'Count of Pump by Is Consented and Pump Is Available',
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
    data: ['Available', 'Unavailable']
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
    data: ['Not Consented', 'Consented']
  },
  series: [
    {
      name: 'Available',
      type: 'bar',
      stack: 'stack1',
      color: '#33BE9D',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [240, 140]
    },
    {
      name: 'Unavailable',
      type: 'bar',
      stack: 'stack1',
      color: '#FD625E',
      label: {
        show: true,
        position: 'insideRight'
      },
      data: [14, 7]
    }
  ]
};

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

      this.chart.setOption(option);
    }
  }
};
</script>
