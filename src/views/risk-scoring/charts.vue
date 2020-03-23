<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sewage Pumping Station Categorisation</span>
            </div>
            <div class="component-item">
              <pump-risk-bracket-count-chart />
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16">
        <div class="chart-wrapper">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Sewage Pumping Station Results</span>
            </div>
            <div class="component-item">
              <pump-risk-score-chart />
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PumpRiskBracketCountChart from '@/components/Charts/PumpRiskBracketCountChart'
import PumpRiskScoreChart from '@/components/Charts/PumpRiskScoreChart'

export default {
  name: 'Charts',
  components: {
    PumpRiskBracketCountChart,
    PumpRiskScoreChart
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 40px;
}
</style>
