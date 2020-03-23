<template>
  <el-table
    :data="list"
    stripe
    show-summary
    :summary-method="getTotals"
    style="width: 100%;"
  >
    <el-table-column label="Station Name" prop="name" sortable min-width="180" />

    <el-table-column
      label="Consented"
      sortable
      prop="consented"
      :filters="[
        {
          text: 'Consented', value: 'Consented'
        },
        {
          text: 'Not Consented', value: 'Not Consented'
        }
      ]"
      :filter-method="filterConsented"
      filter-placement="bottom-end"
      align="center"
    >
      <template slot-scope="{row}">
        <i v-if="row.consented === 'Consented'" class="el-icon-circle-check" />
        <i v-else class="el-icon-circle-close" />
      </template>
    </el-table-column>

    <el-table-column label="Risk Score" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.riskScore | riskScoreBracketFilter">
          {{ row.riskScore }}
        </el-tag>
      </template>
    </el-table-column>

    <el-table-column label="NHR Alarms Duration < 5 Days" prop="nhrAlarmsDurationLessThanFive" align="center" />
    <el-table-column label="NHR Alarms Duration 3-5 Days" prop="nhrAlarmsDurationThreeToFive" align="center" />
    <el-table-column label="NHR Alarms Duration > 5 Days" prop="nhrAlarmsDurationGreaterThanFive" align="center" />

    <el-table-column label="Available Pumps" prop="availablePumps" align="center" />
    <el-table-column label="Unavailable Pumps" prop="unavailablePumps" align="center" />

    <el-table-column label="Pump Avail %" align="center">
      <template slot-scope="{row}">
        {{ row.availablePumps / (row.availablePumps + row.unavailablePumps) | toPercentage }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { pumpAvailabilityList } from '@/api/asset'

export default {
  filters: {
    riskScoreBracketFilter(riskScore) {
      if (riskScore <= 20) {
        return 'success'
      }
      if (riskScore <= 60) {
        return 'warning'
      }

      return 'danger'
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      pumpAvailabilityList().then(response => {
        this.list = response.data.items
      })
    },
    filterConsented(value, row) {
      return row.consented === value
    },

    getTotals(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = 'Total'
          return
        }
        if (index === 1 || index === 2 || index === 8) {
          sums[index] = null
          return
        }

        const values = (data || []).map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>
