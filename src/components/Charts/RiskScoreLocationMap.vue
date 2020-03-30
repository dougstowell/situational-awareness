<template>
  <div v-if="location" style="height: 600px; width: 100%;">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" />

      <l-circle-marker
        v-for="marker in lMarkers"
        :key="marker.name"
        :lat-lng="marker.lMarker"
        :color="marker.riskScore | riskScoreColorFilter"
      >
        <l-popup>
          <div>
            <h4>
              {{ marker.name }}
              <el-tag :type="marker.riskScore | riskScoreBracketFilter">{{ marker.riskScore }}</el-tag>
            </h4>
            <p>Pump is Available: Available</p>
            <p>Latitude: {{ marker.lat }}</p>
            <p>Longitude: {{ marker.lng }}</p>
            <p>Count of Pump: {{ marker.numberOfPumps }}</p>
            <p>Asset Type: {{ marker.assetType }}</p>
            <p>Is Consented: {{ marker.consented }}</p>
          </div>
        </l-popup>
      </l-circle-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LPopup, LCircleMarker } from 'vue2-leaflet';

export default {
  name: 'RiskScoreLocationMap',

  filters: {
    riskScoreBracketFilter(riskScore) {
      if (riskScore <= 20) {
        return 'success';
      }
      if (riskScore <= 60) {
        return 'warning';
      }

      return 'danger';
    },

    riskScoreColorFilter(riskScore) {
      if (riskScore <= 20) {
        return '#13ce66';
      }
      if (riskScore <= 60) {
        return '#ffba00';
      }

      return '#ff4949';
    }
  },

  components: {
    LMap,
    LTileLayer,
    LPopup,
    LCircleMarker
  },

  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '600px'
    },

    location: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      zoom: 10,
      center: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      withPopup: null,
      currentZoom: 11.5,
      currentCenter: null,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },

  computed: {
    lMarkers() {
      if (!this.location) {
        return [];
      }

      return this.location.markers.map(m => ({
        ...m,
        lMarker: latLng(m.lat, m.lng)
      }));
    }
  },

  watch: {
    location() {
      this.center = latLng(this.location.lat, this.location.lng);
      this.currentCenter = latLng(this.location.lat, this.location.lng);
      this.withPopup = latLng(this.location.lat, this.location.lng);
    }
  },

  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>

<style lang="scss" scoped>
.someExtraClass {
  background-color: aqua;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 0 20px 20px 20px;
  box-shadow: 5px 3px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
}
</style>
