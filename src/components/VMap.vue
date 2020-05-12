<template>
  <div id="map"></div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import "@supermap/iclient-leaflet";
import "leaflet/dist/leaflet";
import L from "leaflet";
import { Popover, Button, Input } from "element-ui";
export default {
  name: "vmap",
  data () {
    return {
      scenicLists: [],
      markerscenicList: [],
      markerscenicgroup: null,
      url: '',
      map: null,
      monitorLists: [],
      markermonitorList: [],
      markermonitorgroup: null
    };
  },
  created () {
    // this.$nextTick(() => {

    this.gissetting2d();
    // })
  },
  methods: {
    async gissetting2d () {
      await this.$http.get("/gissetting/2d").then(res => {
        let result = res.data.data;
        this.url = result.F_URL
        var fId = result.F_Id;
        this.$store.dispatch("setfId", fId);
        var map = L.map("map", {
          crs: L.CRS.EPSG4326,
          center: [39.94, 116.31],
          maxZoom: 24,
          zoom: 18,
          minZoom: 0,
          attributionControl: true
        });
        L.supermap.tiledMapLayer(result.F_URL).addTo(map);
        this.map = map
        this.$store.dispatch('setmap', this.map)
        this.getLists(map);
        // this.getmonitorLists(map)
      });
    },
    async getLists (map) {
      var fId = this.$store.state.fId;
      await this.$http.get("/gisscenicarea/getlist/" + fId).then(res => {
        this.scenicLists = res.data.data;
        console.log(this.scenicLists)
        this.$store.dispatch("setScenicLists", this.scenicLists);
        for (var i = 0; i < this.scenicLists.length; i++) {
          var latlng = L.latLng(this.scenicLists[i].F_YPoint * 1, this.scenicLists[i].F_XPoint * 1)
          var marker = L.marker(latlng, {
            title: this.scenicLists[i].F_Name,
            icon: L.icon({
              iconUrl: require("../assets/images/scenic_icon.png"),
              iconSize: [34, 42],
            }),
          }).addTo(map).bindPopup("<img src=" + this.scenicLists[i].F_Image + " /><h1>" + this.scenicLists[i].F_Name + "</h1><p>" + this.scenicLists[i].F_Remarks + "</p>")
          this.markerscenicList.push(marker)
        }
        this.markerscenicgroup = L.layerGroup(this.markerscenicList);
        this.map.addLayer(this.markerscenicgroup);
        this.$store.dispatch('setmarkerscenicgroup', this.markerscenicgroup)
      });
    },
    // async getmonitorLists (map) {
      getmonitorLists (map){
      var fId = this.$store.state.fId;
      //  this.$http.get("/gisscenicarea/getlist/" + fId).then(res => {
        // this.monitorLists = res.data.data;
        this.monitorLists = this.$store.state.scenicLists;
        for (var i = 0; i < this.monitorLists.length; i++) {
          console.log(this.$store.state.fVideo)
          var latlng = L.latLng(this.monitorLists[i].F_YPoint * 1, this.monitorLists[i].F_XPoint * 1)
          var marker1 = L.marker(latlng, {
            title: this.monitorLists[i].F_Name,
            icon: L.icon({
              iconUrl: require("../assets/images/jk_icon.png"),
              iconSize: [34, 42],
            }),
          }).addTo(map).bindPopup("<video width=358 height=200 controls><source src=" + this.$store.state.fVideo + " ></video/><h1>" + this.monitorLists[i].F_Name + "</h1><p>" + this.monitorLists[i].F_Remarks + "</p>")
          this.markermonitorList.push(marker1)
        }
        this.markermonitorgroup = L.layerGroup(this.markermonitorList);
        this.map.addLayer(this.markermonitorgroup);
        this.$store.dispatch('setmarkerscenicgroup', this.markermonitorgroup)
      // })
    },
  },
  components: {
    "el-popover": Popover
  }
};
</script>
<style lang="scss" scoped>
#map {
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>