<template>
  <div class="app-container">
    <el-row :gutter="40">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Risk Categorisation</span>
          </div>
          <div class="component-item">
            <pump-risk-bracket-count-chart />
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="16">
        <el-card>
          <div slot="header" class="clearfix">
            <span>Risk Locations</span>
          </div>
          <div class="component-item">
            <risk-score-location-chart />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PumpRiskBracketCountChart from '@/components/Charts/PumpRiskBracketCountChart'
import RiskScoreLocationChart from '@/components/Charts/RiskScoreLocationChart'

export default {
  name: 'Charts',
  components: {
    PumpRiskBracketCountChart,
    RiskScoreLocationChart
  }
}
</script>

<style lang="scss" scoped>

</style>
