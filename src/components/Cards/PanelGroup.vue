<template>
  <el-row :gutter="20" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(0)">
        <div class="card-panel-icon-wrapper icon-high">
          <i class="el-icon-warning-outline card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ highText }}
          </div>
          <count-to :start-val="highStart" :end-val="highEnd" :duration="durationMs" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(1)">
        <div class="card-panel-icon-wrapper icon-avg">
          <i class="el-icon-remove-outline card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ avgText }}
          </div>
          <count-to :start-val="avgStart" :end-val="avgEnd" :duration="durationMs" class="card-panel-num" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="onPanelClick(2)">
        <div class="card-panel-icon-wrapper icon-low">
          <i class="el-icon-circle-check card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            {{ lowText }}
          </div>
          <count-to :start-val="lowStart" :end-val="lowEnd" :duration="durationMs" class="card-panel-num" />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to';

export default {
  components: {
    CountTo
  },
  props: {
    lowText: {
      type: String,
      default: ''
    },
    lowStart: {
      type: Number,
      default: 0
    },
    lowEnd: {
      type: Number,
      default: 0
    },
    avgText: {
      type: String,
      default: ''
    },
    avgStart: {
      type: Number,
      default: 0
    },
    avgEnd: {
      type: Number,
      default: 0
    },
    highText: {
      type: String,
      default: ''
    },
    highStart: {
      type: Number,
      default: 0
    },
    highEnd: {
      type: Number,
      default: 0
    },
    durationMs: {
      type: Number,
      default: 1000
    }
  },

  methods: {
    onPanelClick(index) {
      this.$emit('panelClick', index);
    }
  }
};
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

      .icon-high {
        background: #f4516c;
      }

      .icon-avg {
        background: #36a3f7;
      }

      .icon-low {
        background: #40c9c6;
      }
    }

    .icon-high {
      color: #f4516c;
    }

    .icon-avg {
      color: #36a3f7;
    }

    .icon-low {
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
      font-size: 38px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 12px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 18px;
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
