<template>
  <div class="index_div">
    <v-map></v-map>
    <!-- <iframe src="../static/gettingStarted/f.html"
            width="100%"
            height="100%"></iframe> -->
    <div class="title_Div"
         :style="{'background-image':'url('+title_bg+')'}">
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
      <!-- <v-navigation></v-navigation> -->
      <!-- <v-statistics></v-statistics> -->
      <div class="item static">
        <div class="popover">
          <el-popover trigger="hover"
                      placement="right"
                      width="460"
                      v-model="visible"
                      title="数据统计"
                      popper-class="jian_statics">
            <p @click="visible = false">关闭</p>
            <div class="listDiv">
              <div class="list"
                   v-for="(item,index) in staticLists"
                   :key="index">
                <div class="top">
                  <h2>{{item.name}}</h2>
                  <div class="button_div">
                    <el-button @click="statiClick(item.id)">查看</el-button>
                  </div>
                </div>
              </div>
            </div>
            <el-button slot="reference"
                       class="img_div">
              <img :src="activeImg"
                   class="activeImg"
                   alt />
              <img :src="img"
                   class="img"
                   alt />
            </el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="echarts_right">
      <v-pack-data v-show="isPack"></v-pack-data>
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
// import Navigation from "../components/Navigation";
import Statistics from "../components/Statistics";
import packData from "../components/packData";
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
      isPack: false

    };
  },
  computed: {



  },
  methods: {
    statiClick (id) {
      if (id === 0) {
        this.isPack = !this.isPack
        console.log(this.isPack)
      }
    }
  },
  components: {
    "v-map": VMap,
    "v-search": Search,
    "v-weather": Weather,
    "v-sights": Sights,
    "v-address": Address,
    "v-monitor": Monitor,
    // "v-navigation": Navigation,
    "v-statistics": Statistics,
    "v-pack-data": packData,
    "el-popover": Popover,
    "el-button": Button,
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
.item.static {
  position: absolute;
  top: 100%;
}
.el-popover.jian_statics {
  .listDiv {
    .list {
      padding: 20px 0;

      .top {
        display: flex;
        justify-content: space-between;
        width: 100%;

        h2 {
          color: #fc6b00;
          font-size: 20px;
          margin-bottom: 0px;
          font-weight: 600;
        }

        .button_div {
          .el-button {
            padding: 8px 25px;
            font-size: 13px;
            border-radius: 10px;
            background: #7d7d7d;
            color: #fff;
            border: none;
          }

          .el-button:hover {
            background: #2581c9;
          }
        }
      }
    }
  }

  .img_div {
    img {
      margin-left: -8px;
      margin-top: 0px;
    }
  }

  .el-popover p {
    margin-top: -30px;
  }
}
</style>