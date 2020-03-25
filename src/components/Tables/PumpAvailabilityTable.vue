<template>
  <el-table
    :data="list"
    stripe
    show-summary
    :summary-method="getTotals"
    style="width: 100%;"
  >
    <el-table-column label="Pump Name" prop="name" />
    <el-table-column label="Tag Name" prop="tagName" />
    <el-table-column label="Tag Value" prop="tagValue" />

    <el-table-column label="Available" prop="availablePumps" align="center" />
    <el-table-column
      label="Unavailable"
      prop="unavailablePumps"
      align="center"
    />
  </el-table>
</template>

<script>
export default {
  props: {
    selectedStation: {
      type: Object,
      default: null
    }
  },

  computed: {
    list() {
      return (this.selectedStation || {}).pumps || [];
    }
  },

  methods: {
    getTotals(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Total';
          return;
        }
        if (index === 1 || index === 2 || index === 8) {
          sums[index] = null;
          return;
        }

        const values = (data || []).map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = 'N/A';
        }
      });

      return sums;
    }
  }
};
</script>
