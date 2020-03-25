<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts';
import resize from './mixins/resize';
import { york, leeds, bradford } from '@/api/map';

var options = {
  title: {
    text: 'Percentage of Pump Availability by Is Consented',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 14
    }
  },
  geo: {
    map: 'york',
    roam: true
  },
  series: []
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
      default: '600px'
    },

    map: {
      type: String,
      default: 'York'
    }
  },

  data() {
    return {
      chartData: null,
      chart: null
    };
  },

  watch: {
    map() {
      this.initChart();
    }
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
      if (this.chart) {
        this.chart.dispose();
        this.chart = null;
      }

      if (this.map.toLowerCase() === 'york') {
        york().then(response => {
          echarts.registerMap('york', response.data);

          this.chart = echarts.init(this.$el);
          this.chart.setOption(options);
        });

        return;
      }

      if (this.map.toLowerCase() === 'bradford') {
        bradford().then(response => {
          echarts.registerMap('york', response.data);

          this.chart = echarts.init(this.$el);
          this.chart.setOption(options);
        });

        return;
      }

      leeds().then(response => {
        echarts.registerMap('york', response.data);

        this.chart = echarts.init(this.$el);
        this.chart.setOption(options);
      });
    }
  }
};
</script>
