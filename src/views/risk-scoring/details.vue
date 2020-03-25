<template>
  <div class="app-container">
    <asset-pump-risk-score-table />
  </div>
</template>

<script>
import AssetPumpRiskScoreTable from '@/components/Tables/AssetPumpRiskScoreTable';

export default {
  name: 'RiskScoreDetails',
  components: {
    AssetPumpRiskScoreTable
  }
};
</script>

<style lang="scss" scoped></style>
