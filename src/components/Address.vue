<template>
  <div class="item">
    <div class="popover">
      <el-popover
        trigger="hover"
        placement="right"
        width="460"
        v-model="visible"
        title="景点设施"
        popper-class="jian_address"
      >
        <p @click="visible = false">关闭</p>
        <div class="address_item">
          <el-button
            v-for="(item,index) in lists"
            :key="index"
            @click.native="typeBtn(index)"
            plain
          >
            <div class="imgs">
              <img :src="item.F_Image" class="icon _icon" />
              <img :src="item.F_HighlightImage" class="active_icon _icon" />
              <span :style="{color:item.F_Color}">{{item.F_Name}}</span>
            </div>
          </el-button>
        </div>
        <el-button slot="reference" class="img_div">
          <img :src="activeImg" class="activeImg" alt />
          <img :src="img" class="img" alt />
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { Popover, Button } from "element-ui";
export default {
  name: "search",
  data() {
    return {
      visible: false,
      isshow: false,
      img: require("../assets/images/address.png"),
      activeImg: require("../assets/images/active_address.png"),
      lists: [],
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
      FId: []
    };
  },
  created() {
    this.gettypelist();
    this.getListCs(this.map);
    this.getListZx(this.map);
    this.getListWIFI(this.map);
    this.getListFd(this.map);
  },
  methods: {
    async gettypelist() {
      await this.$http.get("/scenicareaaround/gettypelist").then(res => {
        console.log(res);
        this.lists = res.data.data;
        for (var i = 0; i < this.lists.length; i++) {
          this.FId.push(this.lists[i].F_Id);
        }
        console.log(this.FId);
      });
    },
    typeBtn(index) {
      this.map = this.$store.state.map;
      this.markerzxgroup.clearLayers();
      this.markerwifigroup.clearLayers();
      this.markerfdgroup.clearLayers();
      this.markercsgroup.clearLayers();
      if (index === 0) {
        // this.markerzxgroup.clearLayers();
        // this.markerwifigroup.clearLayers();
        // this.markerfdgroup.clearLayers();
        this.getListCs(this.map);
      }
      if (index === 1) {
        // this.markercsgroup.clearLayers();
        // this.markerwifigroup.clearLayers();
        // this.markerfdgroup.clearLayers();
        this.getListZx(this.map);
      }
      if (index === 2) {
        // this.markerzxgroup.clearLayers();
        // this.markercsgroup.clearLayers();
        // this.markerfdgroup.clearLayers();
        this.getListWIFI(this.map);
      }
      if (index === 3) {
        // this.markercsgroup.clearLayers();
        // this.markerwifigroup.clearLayers();
        // this.markerzxgroup.clearLayers();
        this.getListFd(this.map);
      }
    },
    async getListCs(map) {
      await this.$http
        .get("/scenicareaaround/getlist/" + this.FId[0])
        .then(res => {
          this.csList = res.data.data;
          for (var i = 0; i < this.csList.length; i++) {
            var latlng = L.latLng(
              this.csList[i].F_XPoint * 1,
              this.csList[i].F_YPoint * 1
            );
            var marker0 = L.marker(latlng, {
              icon: L.icon({
                iconUrl: require("../assets/images/cs.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup(this.csList[i].F_Name);
            this.markercsList.push(marker0);
          }
          this.markercsgroup = L.layerGroup(this.markercsList);
          this.map.addLayer(this.markercsgroup);
          this.$store.dispatch("setmarkercsgroup", this.markercsgroup);
        });
    },
    async getListZx(map) {
      await this.$http
        .get("/scenicareaaround/getlist/" + this.FId[1])
        .then(res => {
          this.zxList = res.data.data;
          for (var i = 0; i < this.zxList.length; i++) {
            var latlng = L.latLng(
              this.zxList[i].F_XPoint * 1,
              this.zxList[i].F_YPoint * 1
            );
            var marker1 = L.marker(latlng, {
              icon: L.icon({
                iconUrl: require("../assets/images/zx.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup(this.zxList[i].F_Name);
            this.markerzxList.push(marker1);
          }
          this.markerzxgroup = L.layerGroup(this.markerzxList);
          this.map.addLayer(this.markerzxgroup);
          this.$store.dispatch("setmarkerzxgroup", this.markerzxgroup);
        });
    },
    async getListWIFI(map) {
      await this.$http
        .get("/scenicareaaround/getlist/" + this.FId[2])
        .then(res => {
          this.wifiList = res.data.data;
          for (var i = 0; i < this.wifiList.length; i++) {
            var latlng = L.latLng(
              this.wifiList[i].F_XPoint * 1,
              this.wifiList[i].F_YPoint * 1
            );
            var marker2 = L.marker(latlng, {
              icon: L.icon({
                iconUrl: require("../assets/images/wifi.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup(this.wifiList[i].F_Name);
            this.markerwifiList.push(marker2);
          }
          this.markerwifigroup = L.layerGroup(this.markerwifiList);
          this.map.addLayer(this.markerwifigroup);
          this.$store.dispatch("setmarkerwifigroup", this.markerwifigroup);
        });
    },
    async getListFd(map) {
      await this.$http
        .get("/scenicareaaround/getlist/" + this.FId[3])
        .then(res => {
          this.fdList = res.data.data;
          for (var i = 0; i < this.fdList.length; i++) {
            var latlng = L.latLng(
              this.fdList[i].F_XPoint * 1,
              this.fdList[i].F_YPoint * 1
            );
            var marker3 = L.marker(latlng, {
              icon: L.icon({
                iconUrl: require("../assets/images/fd.png"),
                iconSize: [30, 38]
              })
            })
              .addTo(map)
              .bindPopup('fffffffffff');
            this.markerfdList.push(marker3);
          }
          this.markerfdgroup = L.layerGroup(this.markerfdList);
          this.map.addLayer(this.markerfdgroup);
          this.$store.dispatch("setmarkerfdgroup", this.markerfdgroup);
        });
    }
  },
  components: {
    "el-popover": Popover,
    "el-button": Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img_div {
  img {
    margin-left: -15px;
    margin-top: -2px;
  }
}
.el-popover p {
  margin-top: -30px;
}
.address_item {
  display: flex;
  flex-wrap: wrap;
  .el-button {
    border-radius: 14px;
    width: 93px;
    height: 45px;
    line-height: 40px;
    padding: 0;
    margin-left: 0 !important;
    margin-right: 7px;
    margin-top: 10px;
    margin-bottom: 5px;
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding-left: 5px;
      }
      ._icon {
        width: 25px;
      }
      .active_icon {
        display: none;
      }
      .icon {
        display: block;
      }
      &:hover {
        .active_icon {
          display: block;
        }
        .icon {
          display: none;
        }
        span {
          // color: #fff !important;
        }
      }
    }
  }
}
</style>
