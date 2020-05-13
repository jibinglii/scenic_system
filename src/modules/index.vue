<template>
  <div class="index_div">
    <v-map ref="mychild"></v-map>
    <div class="title_Div"
         :style="{'background-image':'url('+title_bg+')'}">
      <h2>景区一张图数据管理系统</h2>
      <span>
        在园人数：
        <i>{{ticketData.ZaiYuanCount}}</i>人
      </span>
      <span>
        进园人数：
        <i>{{ticketData.RuYuanCount}}</i>人
      </span>
      <span>
        实时售票数：
        <i>{{ticketData.ShiShiShouPiao}}</i>人
      </span>
    </div>
    <div class="list_div">
      <v-search @mouseenter.native="mouseSearch"></v-search>
      <v-weather></v-weather>
      <v-sights @mouseenter.native="mouseSight"></v-sights>
      <v-address @mouseenter.native="mouseAddress"
                 @parentgetListCs="childgetListCs"
                 @parentgetListZx="childgetListZx"
                 @parentgetListWIFI="childgetListWIFI"
                 @parentgetListFd="childgetListFd"></v-address>
      <v-monitor @mouseenter.native="mouseMonitor"></v-monitor>
      <v-navigation></v-navigation>
      <v-statistics></v-statistics>
    </div>
    <div class="echarts_right">
      <v-pack-data v-show="$store.state.isPack"></v-pack-data>
      <v-ticket-data v-show="$store.state.isTicket"></v-ticket-data>
      <v-monitor-data v-show="$store.state.isMonitor"></v-monitor-data>
    </div>
  </div>
</template>
<script>
import { Popover, Button } from "element-ui";
import VMap from "../components/VMap";
import Search from "../components/Search";
import Weather from "../components/Weather";
import Sights from "../components/Sights";
import Address from "../components/Address";
import Monitor from "../components/Monitor";
import Navigation from "../components/Navigation";
import Statistics from "../components/Statistics";
import packData from "../components/packData";
import TicketData from "../components/TicketData";
import MonitorData from "../components/MonitorData";
export default {
  name: "index",
  data () {
    return {
      title_bg: require("../assets/images/title_bg.png"),
      visible: false,
      isshow: false,
      img: require("../assets/images/data.png"),
      activeImg: require("../assets/images/active_data.png"),
      staticLists: [
        {
          name: "停车场数据",
          id: 0
        },
        {
          name: "票务数据",
          id: 1
        },
        {
          name: "环境监测",
          id: 2
        }
      ],
      ticketData: {
        ZaiYuanCount: "",
        RuYuanCount: "",
        ShiShiShouPiao: ""
      },
      map: null
    };
  },
  created () {
    this.ticketDatas();
  },
  methods: {
    childgetListCs () {
      this.$refs.mychild.getListCs(this.map);
    },
    childgetListZx () {
      this.$refs.mychild.getListZx(this.map);
    },
    childgetListWIFI () {
      this.$refs.mychild.getListWIFI(this.map);
    },
    childgetListFd () {
      this.$refs.mychild.getListFd(this.map);
    },
    mouseSearch () {
      this.map = this.$store.state.map;
      this.$refs.mychild.getListCs(this.map);
      this.$refs.mychild.getListZx(this.map);
      this.$refs.mychild.getListWIFI(this.map);
      this.$refs.mychild.getListFd(this.map);
    },
    mouseSight () {
      this.map = this.$store.state.map;
      this.$refs.mychild.getLists(this.map);
      var markercsgroup = this.$store.state.markercsgroup;
      var markerzxgroup = this.$store.state.markerzxgroup;
      var markerwifigroup = this.$store.state.markerwifigroup;
      var markerfdgroup = this.$store.state.markerfdgroup;
      markercsgroup.clearLayers();
      markerzxgroup.clearLayers();
      markerwifigroup.clearLayers();
      markerfdgroup.clearLayers();
    },
    mouseMonitor () {
      this.map = this.$store.state.map;
      this.$refs.mychild.getmonitorLists(this.map);
      var markercsgroup = this.$store.state.markercsgroup;
      var markerzxgroup = this.$store.state.markerzxgroup;
      var markerwifigroup = this.$store.state.markerwifigroup;
      var markerfdgroup = this.$store.state.markerfdgroup;
      markercsgroup.clearLayers();
      markerzxgroup.clearLayers();
      markerwifigroup.clearLayers();
      markerfdgroup.clearLayers();
    },
    mouseAddress () {
      var markerscenicgroup = this.$store.state.markerscenicgroup;
      markerscenicgroup.clearLayers();
      this.map = this.$store.state.map;
      this.$refs.mychild.getListCs(this.map);
      this.$refs.mychild.getListZx(this.map);
      this.$refs.mychild.getListWIFI(this.map);
      this.$refs.mychild.getListFd(this.map);
    },
    async ticketDatas () {
      await this.$http
        .get("http://119.3.248.197:8086/api/mobile/PiaoWuShuJu")
        .then(res => {
          console.log(res);
          this.ticketData.ShiShiShouPiao = res.data.data.ShiShiShouPiao;
          this.ticketData.ShiShiJianPiao = res.data.data.ShiShiJianPiao;
          this.ticketData.RuYuanCount = res.data.data.RuYuanCount;
          this.ticketData.ZaiYuanCount = res.data.data.ZaiYuanCount;
        });
    }
  },
  components: {
    "v-map": VMap,
    "v-search": Search,
    "v-weather": Weather,
    "v-sights": Sights,
    "v-address": Address,
    "v-monitor": Monitor,
    "v-navigation": Navigation,
    "v-statistics": Statistics,
    "v-pack-data": packData,
    "v-ticket-data": TicketData,
    "v-monitor-data": MonitorData,
    "el-popover": Popover,
    "el-button": Button
  }
};
</script>
<style scoped lang="scss">
.index_div {
  iframe {
    position: fixed;
    left: 0;
    top: 0;
  }

  .title_Div {
    width: 636px;
    height: 114px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 9999;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    padding: 10px 0 10px;
    h2 {
      color: #fff;
      font-size: 32px;
      margin-bottom: 5px;
    }
    span {
      font-weight: 100;
      padding-right: 10px;
      i {
        font-style: normal;
        font-size: 18px;
      }
    }
  }
  .popover {
    z-index: 9999;
    position: absolute;
    top: 50%;
  }
  .list_div {
    z-index: 9999;
    position: absolute;
    top: 24%;
    left: 3%;
  }
  .echarts_right {
    position: absolute;
    top: 11%;
    right: 1%;
    z-index: 9999;
    ._div {
      margin-bottom: 10px;
    }
  }
}
</style>