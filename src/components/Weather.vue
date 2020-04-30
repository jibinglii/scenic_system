<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="hover"
                  placement="right"
                  width="460"
                  v-model="visible"
                  title="天气"
                  popper-class="jian_weather">
        <p @click="visible = false">关闭</p>
        <iframe src="http://weather.seniverse.com/?token=baab943b-0200-4e73-ae33-c93686246f9a"
                id="_weather"
                 frameborder="0"
                 height="445"
                 width="100%"
                scrolling="no"></iframe>
        <!-- <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(item,index) in weathers" :key="index" :name="index">
            <template slot="title">
              <span>{{item.time}}</span>
              <img :src="item.imgUrl" alt />
              <span>{{item.temperature}}</span>
              <span>{{item.power}}</span>
            </template>
            <div class="content">
              <img :src="item.weathImg" alt class="left_img" />
              <div class="right">
                <h1>
                  {{item.maxtemperature}}
                  <span>{{item.des}}</span>
                </h1>
                <div class="bottom">
                  <div>
                    <img :src="item.temImg" alt />
                    {{item.mintemperature}}
                  </div>
                  <div>
                    <img :src="item.powImg" alt />
                    {{item.powerDes}}
                  </div>
                </div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse> -->
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
</template>

<script>
import { Popover, Button, Collapse, CollapseItem } from "element-ui";
export default {
  name: "weather",
  data () {
    return {
      visible: false,
      isshow: false,
      activeName: 0,
      img: require("../assets/images/weather.png"),
      activeImg: require("../assets/images/active_weather.png"),
      // weathers: [
      //   {
      //     time: "今天",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "明天",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "2月20日",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "2月20日",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "2月20日",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "2月20日",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   },
      //   {
      //     time: "2月20日",
      //     imgUrl: require("../assets/images/weather_h.png"),
      //     temperature: "11-20℃",
      //     power: "东南风微风",
      //     weathImg: require("../assets/images/clear.png"),
      //     des: "晴",
      //     temImg: require("../assets/images/rain.png"),
      //     maxtemperature: "20℃",
      //     mintemperature: "13%",
      //     powImg: require("../assets/images/wind.png"),
      //     powerDes: "8km/h"
      //   }
      // ]
    };
  },
  methods: {},
  components: {
    "el-popover": Popover,
    "el-button": Button,
    "el-collapse": Collapse,
    "el-collapse-item": CollapseItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-popover p {
  margin-top: -30px;
}
.img_div {
  img {
    margin-left: -15px;
    margin-top: -6px;
  }
}
.el-collapse-item__header {
  img {
    width: 30px;
  }
}

.el-collapse-item__content {
  margin-bottom: 0;
  .content {
    background: linear-gradient(to bottom, #28cdff 0%, #1b5eba 100%);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
    .left_img {
      width: 60px;
    }
    .right {
      color: #fff;
      h1 {
        color: #fff;
        font-size: 40px;
        font-weight: 100;
        margin-bottom: 0;
        span {
          font-size: 12px;
        }
      }
      div.bottom {
        display: flex;

        div {
          padding-right: 17px;
          img {
            width: 20px;
          }
        }
      }
    }
  }
}
.el-popover .popper__arrow {
  top: 105px !important;
}
</style>
