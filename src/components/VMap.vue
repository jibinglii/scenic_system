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
      markermonitorgroup: null,
      csList: [],
      zxList: [],
      wifiList: [],
      fdList: [],
      map: null,
      markercsList: [],
      markerzxList: [],
      markerwifiList: [],
      markerfdList: [],
      markercsgroup: null,
      markerzxgroup: null,
      markerwifigroup: null,
      markerfdgroup: null,
    };
  },
  created () {
    this.gissetting2d();
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
        // this.getListCs(map)
        // this.getListZx(map)
        // this.getListWIFI(map)
        // this.getListFd(map)
      });
    },
    async getLists (map) {
      var fId = this.$store.state.fId;
      await this.$http.get("/gisscenicarea/getlist/" + fId).then(res => {
        this.scenicLists = res.data.data;
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
    getmonitorLists (map) {
      var fId = this.$store.state.fId;
      this.monitorLists = this.$store.state.scenicLists;
      for (var i = 0; i < this.monitorLists.length; i++) {
        // console.log(this.$store.state.fVideo)
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
    },
    async getListCs (map) {
      var keyword = this.$store.state.F_Id[0]
      await this.$http
        .get("/scenicareaaround/getlist/" + keyword)
        .then(res => {
          this.csList = res.data.data;
          for (var i = 0; i < this.csList.length; i++) {
            var latlng = L.latLng(
              this.csList[i].F_XPoint * 1,
              this.csList[i].F_YPoint * 1
            );
            var marker0 = L.marker(latlng, {
              title: this.csList[i].F_Name,
              icon: L.icon({
                iconUrl: require("../assets/images/cs.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup("<img src=" + this.csList[i].F_Image + " /><h1>" + this.csList[i].F_Name + "</h1><p>" + this.csList[i].F_Remarks + "</p>");
            this.markercsList.push(marker0);
          }
          this.markercsgroup = L.layerGroup(this.markercsList);
          this.map.addLayer(this.markercsgroup);
          this.$store.dispatch("setmarkercsgroup", this.markercsgroup);
        });
    },
    async getListZx (map) {
      var keyword = this.$store.state.F_Id[1]
      await this.$http
        .get("/scenicareaaround/getlist/" + keyword)
        .then(res => {
          this.zxList = res.data.data;
          for (var i = 0; i < this.zxList.length; i++) {
            var latlng = L.latLng(
              this.zxList[i].F_XPoint * 1,
              this.zxList[i].F_YPoint * 1
            );
            var marker1 = L.marker(latlng, {
              title: this.zxList[i].F_Name,
              icon: L.icon({
                iconUrl: require("../assets/images/zx.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup("<img src=" + this.zxList[i].F_Image + " /><h1>" + this.zxList[i].F_Name + "</h1><p>" + this.zxList[i].F_Remarks + "</p>");
            this.markerzxList.push(marker1);
          }
          this.markerzxgroup = L.layerGroup(this.markerzxList);
          this.map.addLayer(this.markerzxgroup);
          this.$store.dispatch("setmarkerzxgroup", this.markerzxgroup);
        });
    },
    async getListWIFI (map) {
      var keyword = this.$store.state.F_Id[2]
      await this.$http
        .get("/scenicareaaround/getlist/" + keyword)
        .then(res => {
          this.wifiList = res.data.data;
          for (var i = 0; i < this.wifiList.length; i++) {
            var latlng = L.latLng(
              this.wifiList[i].F_XPoint * 1,
              this.wifiList[i].F_YPoint * 1
            );
            var marker2 = L.marker(latlng, {
              title: this.wifiList[i].F_Name,
              icon: L.icon({
                iconUrl: require("../assets/images/wifi.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup("<img src=" + this.wifiList[i].F_Image + " /><h1>" + this.wifiList[i].F_Name + "</h1><p>" + this.wifiList[i].F_Remarks + "</p>");
            this.markerwifiList.push(marker2);
          }
          this.markerwifigroup = L.layerGroup(this.markerwifiList);
          this.map.addLayer(this.markerwifigroup);
          this.$store.dispatch("setmarkerwifigroup", this.markerwifigroup);
        });
    },
    async getListFd (map) {
      var keyword = this.$store.state.F_Id[3]
      await this.$http
        .get("/scenicareaaround/getlist/" + keyword)
        .then(res => {
          this.fdList = res.data.data;
          for (var i = 0; i < this.fdList.length; i++) {
            var latlng = L.latLng(
              this.fdList[i].F_XPoint * 1,
              this.fdList[i].F_YPoint * 1
            );
            var marker3 = L.marker(latlng, {
              title: this.fdList[i].F_Name,
              icon: L.icon({
                iconUrl: require("../assets/images/fd.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup("<img src=" + this.fdList[i].F_Image + " /><h1>" + this.fdList[i].F_Name + "</h1><p>" + this.fdList[i].F_Remarks + "</p>");
            this.markerfdList.push(marker3);
          }
          this.markerfdgroup = L.layerGroup(this.markerfdList);
          this.map.addLayer(this.markerfdgroup);
          this.$store.dispatch("setmarkerfdgroup", this.markerfdgroup);
        });
    }
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