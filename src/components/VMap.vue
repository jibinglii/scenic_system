<template>
  <div id="main">
    <sm-web-map :map-options="mapOptions">
      <sm-tile-layer :url="url"></sm-tile-layer>
    </sm-web-map>
  </div>
</template>
<script>
export default {
  name: "vmap",
  data() {
    return {
      url:
        "http://119.3.248.197:8090/iserver/services/map-new-2D/rest/maps/YXX@data",
      mapOptions: {
        center: [39.94, 116.31],
        zoom: 18,
        crs: L.CRS.EPSG4326
      }
    };
  },
 
};
</script>
<style scoped>
#main {
  margin: 0;
  overflow: hidden;
  background: #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}
</style>