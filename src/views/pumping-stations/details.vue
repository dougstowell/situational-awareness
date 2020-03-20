<template>
  <div class="app-container">
    <pump-availability-table />
  </div>
</template>

<script>
import PumpAvailabilityTable from '@/components/Tables/PumpAvailabilityTable'

export default {
  name: 'PumpDetails',
  components: {
    PumpAvailabilityTable
  }
}
</script>

<style lang="scss" scoped>
</style>
