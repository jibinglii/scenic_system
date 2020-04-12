<template>
  <div class="index_div">
    <v-map></v-map>
    <div class="title_Div" :style="{'background-image':'url('+title_bg+')'}">
      <h2>景区一张图数据管理系统</h2>
      <span>
        在园人数：
        <i>954</i>人
      </span>
      <span>
        进园人数：
        <i>954</i>人
      </span>
      <span>
        出园人数：
        <i>954</i>人
      </span>
    </div>
    <div class="list_div">
      <v-search></v-search>
      <v-weather></v-weather>
      <v-sights></v-sights>
      <v-address></v-address>
      <v-monitor></v-monitor>
      <v-navigation></v-navigation>
      <v-statistics></v-statistics>
    </div>
    <div class="echarts_right">
      <v-echarts></v-echarts>
    </div>
  </div>
</template>
<script>
import VMap from "../components/VMap";
import Search from "../components/Search";
import Weather from "../components/Weather";
import Sights from "../components/Sights";
import Address from "../components/Address";
import Monitor from "../components/Monitor";
import Navigation from "../components/Navigation";
import Statistics from "../components/Statistics";
import EchartsData from "../components/EchartsData";
export default {
  name: "index",
  data() {
    return {
      title_bg: require("../assets/images/title_bg.png"),
      visible: false
    };
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
    "v-echarts": EchartsData
  }
};
</script>
<style scoped lang="scss">
.index_div {
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
    top: 20%;
    right: 5%;
    z-index: 999;
  }
}
</style>