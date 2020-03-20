<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(0)">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-warning-outline card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            High
          </div>
          <count-to :start-val="0" :end-val="10" :duration="1000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(1)">
        <div class="card-panel-icon-wrapper icon-message">
          <i class="el-icon-remove-outline card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Average
          </div>
          <count-to :start-val="0" :end-val="14" :duration="1000" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(2)">
        <div class="card-panel-icon-wrapper icon-money">
          <i class="el-icon-circle-check card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Low
          </div>
          <count-to :start-val="0" :end-val="156" :duration="3200" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    onPanelClick(index) {
      this.$emit('panelClick', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #f4516c;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #40c9c6;
      }
    }

    .icon-people {
      color: #f4516c;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #40c9c6;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
