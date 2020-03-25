<template>
  <div style="height: 600px; width: 100%;">
    <l-map
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div>
            I am a popup
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
  name: 'Example',

  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
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

    lat: {
      type: Number,
      default: 53.958332
    },

    long: {
      type: Number,
      default: -1.080278
    }
  },

  data() {
    return {
      zoom: 10,
      center: latLng(this.lat, this.long),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(this.lat, this.long),
      currentZoom: 11.5,
      currentCenter: latLng(this.lat, this.long),
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },

  watch: {
    lat() {
      this.center = latLng(this.lat, this.long);
      this.currentCenter = latLng(this.lat, this.long);
      this.withPopup = latLng(this.lat, this.long);
    },
    long() {
      this.center = latLng(this.lat, this.long);
      this.currentCenter = latLng(this.lat, this.long);
      this.withPopup = latLng(this.lat, this.long);
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
