<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sewage Pumping Station Availability Percentage</span>
            </div>
            <div class="component-item">
              <consented-pump-availability-percent-chart />
            </div>
          </el-card>
        </div>

        <div class="chart-wrapper">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sewage Pumping Station Availability Count</span>
            </div>
            <div class="component-item">
              <consented-pump-availability-count-chart />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sewage Pumping Station Availability Percentage</span>
            </div>
            <div class="component-item">
              <pump-availability-percent-chart />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ConsentedPumpAvailabilityPercentChart from '@/components/Charts/ConsentedPumpAvailabilityPercentChart'
import ConsentedPumpAvailabilityCountChart from '@/components/Charts/ConsentedPumpAvailabilityCountChart'
import PumpAvailabilityPercentChart from '@/components/Charts/PumpAvailabilityPercentChart'

export default {
  name: 'Charts',
  components: {
    ConsentedPumpAvailabilityPercentChart,
    ConsentedPumpAvailabilityCountChart,
    PumpAvailabilityPercentChart
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 40px;
}
</style>
