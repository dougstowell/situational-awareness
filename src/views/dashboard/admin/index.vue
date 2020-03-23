<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Sewage Pumping Station Risk</span>
            <el-dropdown style="float: right;" @command="onRiskScoringMenuClick">
              <span class="el-dropdown-link">
                Action<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="chart">Chart View</el-dropdown-item>
                <el-dropdown-item command="map">Map View</el-dropdown-item>
                <el-dropdown-item command="detail">Detail View</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="component-item">
            <panel-group-risk @panelClick="onPanelClick" />
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Pump Availability</span>

            <el-dropdown style="float: right;" @command="onPumpAvailabilityMenuClick">
              <span class="el-dropdown-link">
                Action<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="chart">Chart View</el-dropdown-item>
                <el-dropdown-item command="map">Map View</el-dropdown-item>
                <el-dropdown-item command="detail">Detail View</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="component-item">
            <h5>All Pumping Stations</h5>
            <panel-group-availability-all @panelClick="onPanelClick" />

            <h5>Consented Pumping Stations</h5>
            <panel-group-availability-consented @panelClick="onPanelClick" />
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Alarms</span>

            <el-dropdown style="float: right;" @command="onAlarmMenuClick">
              <span class="el-dropdown-link">
                Action<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="chart">Chart View</el-dropdown-item>
                <el-dropdown-item command="map">Map View</el-dropdown-item>
                <el-dropdown-item command="detail">Detail View</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="component-item">
            <alarm-count-chart />
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Rainfall</span>

            <el-dropdown style="float: right;" @command="onRainfallMenuClick">
              <span class="el-dropdown-link">
                Action<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="chart">Chart View</el-dropdown-item>
                <el-dropdown-item command="map">Map View</el-dropdown-item>
                <el-dropdown-item command="detail">Detail View</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="component-item">
            <rainfall-count-chart :chart-index="panelIndex" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelGroupRisk from '@/components/Cards/PanelGroupRisk'
import PanelGroupAvailabilityAll from '@/components/Cards/PanelGroupAvailabilityAll'
import PanelGroupAvailabilityConsented from '@/components/Cards/PanelGroupAvailabilityConsented'
import AlarmCountChart from '@/components/Charts/AlarmCountChart'
import RainfallCountChart from '@/components/Charts/RainfallCountChart'

var menuClick = (router, type, command) => {
  if (command === 'chart') {
    router.push(`/${type}/charts`)
    return
  }

  if (command === 'map') {
    router.push(`/${type}/map`)
    return
  }

  router.push(`/${type}/details`)
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroupRisk,
    PanelGroupAvailabilityAll,
    PanelGroupAvailabilityConsented,
    AlarmCountChart,
    RainfallCountChart
  },
  data() {
    return {
      panelIndex: 0
    }
  },
  methods: {
    onPanelClick(index) {
      this.panelIndex = index
    },

    onRiskScoringMenuClick(command) {
      menuClick(this.$router, 'risk-scoring', command)
    },

    onPumpAvailabilityMenuClick(command) {
      menuClick(this.$router, 'pumping-stations', command)
    },

    onAlarmMenuClick(command) {
      menuClick(this.$router, 'alarms', command)
    },

    onRainfallMenuClick(command) {
      menuClick(this.$router, 'rainfall', command)
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-bottom: 40px;
}

.table-card {
  margin-bottom: 40px;
}
</style>
