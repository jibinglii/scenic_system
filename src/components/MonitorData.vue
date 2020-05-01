<template>
  <div>
    <div class="bar" v-show="$store.state.isMonitorShow1">
      <div class="top">
        <span>周</span>
        <span @click="close()" class="close">关闭</span>
      </div>
      <div id="mainMonitor1" style="width:100%;height: 200px"></div>
    </div>
    <div class="bar" v-show="$store.state.isMonitorShow2">
      <div class="top">
        <span>月</span>
        <span @click="close2()" class="close">关闭</span>
      </div>
      <div id="mainMonitor2" style="width:100%;height: 200px"></div>
    </div>
    <div class="bar" v-show="$store.state.isMonitorShow3">
      <div class="top">
        <span>年</span>
        <span @click="close3()" class="close">关闭</span>
      </div>
      <div id="mainMonitor3" style="width:100%;height: 200px"></div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "bar",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initMonitorData();
      this.initMonitorData2();
      this.initMonitorData3();
    });
  },
  methods: {
    close() {
      this.$store.state.isMonitorShow1 = false;
    },
    close2() {
      this.$store.state.isMonitorShow2 = false;
    },
    close3() {
      this.$store.state.isMonitorShow3 = false;
    },

    //初始化数据
    initMonitorData() {
      // 基于准备好的dom，初始化echarts实例
      var mainMonitor1 = echarts.init(document.getElementById("mainMonitor1"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/HuanJiangJianCeChat", {
          params: {
            type: 0
          }
        })
        .then(res => {
          console.log(res);
          // 绘制图表
          mainMonitor1.setOption({
            color: ["#58e7ff", "#febb05"],
            title: {
              text: "μg/m3",
              textStyle: {
                fontSize: 16,
                fontWeight: "500",
                color: "#7a7b7b"
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              y: "top",
              x: "right",
              itemGap: 10,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["PM10", "PM2.5"]
            },

            xAxis: {
              type: "category",
              boundaryGap: false,
              axisTick: {
                show: false,
                lineStyle: {
                  color: "#808080"
                }
              },
              data: res.data.data.days
            },
            yAxis: {
              type: "value",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            series: [
              {
                name: "PM10",
                type: "line",
                stack: "",
                data: res.data.data.pm10
              },
              {
                name: "PM2.5",
                type: "line",
                stack: "",
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.pm25
              }
            ]
          });
        });
    },
    initMonitorData2() {
      // 基于准备好的dom，初始化echarts实例
      var mainMonitor2 = echarts.init(document.getElementById("mainMonitor2"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/HuanJiangJianCeChat", {
          params: {
            type: 1
          }
        })
        .then(res => {
          console.log(res);
          // 绘制图表
          mainMonitor2.setOption({
            color: ["#58e7ff", "#febb05"],
            title: {
              text: "μg/m3",
              textStyle: {
                fontSize: 16,
                fontWeight: "500",
                color: "#7a7b7b"
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              y: "top",
              x: "right",
              itemGap: 10,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["PM10", "PM2.5"]
            },

            xAxis: {
              type: "category",
              boundaryGap: false,
              axisTick: {
                show: false,
                lineStyle: {
                  color: "#808080"
                }
              },
              data: res.data.data.days
            },
            yAxis: {
              type: "value",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            series: [
              {
                name: "PM10",
                type: "line",
                stack: "",
                data: res.data.data.pm10
              },
              {
                name: "PM2.5",
                type: "line",
                stack: "",
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.pm25
              }
            ]
          });
        });
    },
    initMonitorData3() {
      // 基于准备好的dom，初始化echarts实例
      var mainMonitor3 = echarts.init(document.getElementById("mainMonitor3"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/HuanJiangJianCeChat", {
          params: {
            type: 2
          }
        })
        .then(res => {
          console.log(res);
          // 绘制图表
          mainMonitor3.setOption({
            color: ["#58e7ff", "#febb05"],
            title: {
              text: "μg/m3",
              textStyle: {
                fontSize: 16,
                fontWeight: "500",
                color: "#7a7b7b"
              }
            },
            tooltip: {
              trigger: "axis"
            },
            legend: {
              y: "top",
              x: "right",
              itemGap: 10,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["PM10", "PM2.5"]
            },

            xAxis: {
              type: "category",
              boundaryGap: false,
              axisTick: {
                show: false,
                lineStyle: {
                  color: "#808080"
                }
              },
              data: res.data.data.days
            },
            yAxis: {
              type: "value",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              }
            },
            series: [
              {
                name: "PM10",
                type: "line",
                stack: "",
                data: res.data.data.pm10
              },
              {
                name: "PM2.5",
                type: "line",
                stack: "",
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.pm25
              }
            ]
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.bar {
  background: rgba(256, 256, 256, 0.7);
  border-radius: 14px;
  padding: 15px;
  width: 320px;
  height: 225px;
  overflow: hidden;
  margin: 10px 0;
  .top {
    font-size: 16px;
    text-align: right;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .close {
      cursor: pointer;
    }
  }
}
</style>