<template>
  <div class="app-container">
    <el-row :gutter="40">
      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Pump Risk Category</span>
          </div>
          <div class="component-item">
            <risk-category-chart />
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Pump Risk Score Locations</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RiskCategoryChart from '@/components/Charts/RiskCategoryChart'

export default {
  name: 'Charts',
  components: {
    RiskCategoryChart
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 40px;
}
</style>
