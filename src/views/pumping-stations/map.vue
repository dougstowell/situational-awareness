<template>
  <div class="app-container">
    <el-row :gutter="20">
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
            <el-dropdown style="float: right;" @command="onMapMenuClick">
              <span class="el-dropdown-link">
                {{ location }}
                <i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="York">York</el-dropdown-item>
                <el-dropdown-item command="Leeds">Leeds</el-dropdown-item>
                <el-dropdown-item command="Bradford">Bradford</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="component-item">
            <risk-score-location-chart :map="location" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RiskCategoryChart from '@/components/Charts/RiskCategoryChart';
import RiskScoreLocationChart from '@/components/Charts/RiskScoreLocationChart';

export default {
  name: 'Charts',

  components: {
    RiskCategoryChart,
    RiskScoreLocationChart
  },

  data() {
    return {
      location: 'York'
    };
  },

  methods: {
    onMapMenuClick(location) {
      this.location = location;
    }
  }
};
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 40px;
}
</style>
