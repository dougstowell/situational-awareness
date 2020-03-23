<template>
  <div class="dashboard-telemetry-container">
    <div class="clearfix">
      <pan-thumb :image="avatar" style="float: left">
        Your roles:
        <span v-for="item in roles" :key="item" class="pan-info-roles">{{ item }}</span>
      </pan-thumb>
      <div class="info-container">
        <span class="display_name">{{ name }}</span>
        <span style="font-size:20px;padding-top:20px;display:inline-block;">Telemetry Dashboard</span>
      </div>
    </div>

    <el-row :gutter="10" style="margin-top: 20px;">
      <el-col :xs="24" :sm="24" :lg="16">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Sewage Pumping Station Risk</span>
          </div>
          <div class="component-item">
            <panel-group-risk />
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>All Pumping Station Availability</span>
          </div>
          <div class="component-item">
            <panel-group-availability-all />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import PanelGroupRisk from '@/components/Cards/PanelGroupRisk'
import PanelGroupAvailabilityAll from '@/components/Cards/PanelGroupAvailabilityAll'

export default {
  name: 'DashboardTelemetry',
  components: {
    PanThumb,
    PanelGroupRisk,
    PanelGroupAvailabilityAll
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-telemetry-container {
    background-color: #e3e3e3;
    min-height: 100vh;
    padding: 50px 60px 0px;
    .pan-info-roles {
      font-size: 12px;
      font-weight: 700;
      color: #333;
      display: block;
    }
    .info-container {
      position: relative;
      margin-left: 190px;
      height: 150px;
      line-height: 200px;
      .display_name {
        font-size: 48px;
        line-height: 48px;
        color: #212121;
        position: absolute;
        top: 25px;
      }
    }
  }
</style>
