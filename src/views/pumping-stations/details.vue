<template>
  <div class="app-container">
    <el-row :gutter="40">
      <el-col :xs="24" :sm="24" :lg="16">
        <h5>Pumping Station</h5>
        <asset-pump-availability-table @row-click="onRowClick" />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <template v-if="selectedStation">
          <h5>{{ pumpName }}</h5>
          <pump-availability-table :selected-station="selectedStation" />
        </template>
        <h5 v-else>Choose a station to show pump details</h5>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AssetPumpAvailabilityTable from '@/components/Tables/AssetPumpAvailabilityTable'
import PumpAvailabilityTable from '@/components/Tables/PumpAvailabilityTable'

export default {
  name: 'PumpDetails',

  components: {
    AssetPumpAvailabilityTable,
    PumpAvailabilityTable
  },

  data() {
    return {
      selectedStation: null
    }
  },

  computed: {
    pumpName() {
      return (this.selectedStation || {}).name
    }
  },

  methods: {
    onRowClick(row) {
      this.selectedStation = row
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
