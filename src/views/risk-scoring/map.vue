<template>
  <div class="app-container">
    <el-row :gutter="20">
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
import PumpRiskBracketCountChart from '@/components/Charts/PumpRiskBracketCountChart';
import RiskScoreLocationChart from '@/components/Charts/RiskScoreLocationChart';

export default {
  name: 'Charts',

  components: {
    PumpRiskBracketCountChart,
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

<style lang="scss" scoped></style>
