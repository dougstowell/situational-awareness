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
            <panel-group
              low-text="Low"
              low-end="156"
              avg-text="Avg"
              avg-end="14"
              high-text="High"
              high-end="10"
              @panelClick="onPanelClick"
            />
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
            <panel-group
              low-text="67-100%"
              low-end="158"
              avg-text="34-66%"
              avg-end="18"
              high-text="0-33%"
              high-end="4"
              @panelClick="onPanelClick"
            />
            <h5>Consented Pumping Stations</h5>
            <panel-group
              low-text="67-100%"
              low-end="54"
              avg-text="34-66%"
              avg-end="5"
              high-text="0-33%"
              high-end="1"
              @panelClick="onPanelClick"
            />
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
import PanelGroup from '@/components/Cards/PanelGroup'
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
    PanelGroup,
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
