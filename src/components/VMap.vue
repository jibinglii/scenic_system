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
  props: ["lng", "lat"],
  data () {
    return {
      url: "",
      mapOptions: {
        center: [39.94, 116.31],
        zoom: 18,
        crs: L.CRS.EPSG4326
      },

    };
  },
  mounted () {
    this.gissetting2d()
  },
  methods: {
    async gissetting2d () {
      await this.$http.get('/gissetting/2d').then(res => {
        let result = res.data.data
        this.url = result.F_URL
        console.log(res)
        localStorage.setItem('Fid', res.data.data.F_Id)
      })
    },
  }
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