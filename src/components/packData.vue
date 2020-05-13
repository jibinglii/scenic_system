<template>
  <div>
    <div class="bar"
         v-show="$store.state.isPackShow1">
      <div class="top">
        <span @click="close()"
              class="close">关闭</span>
      </div>
      <div id="main1"
           style="width:300px;height: 200px"></div>
    </div>
    <div class="bar"
         v-show="$store.state.isPackShow2">
      <div class="top">
        <span @click="close2()"
              class="close">关闭</span>
      </div>
      <div id="main2"
           style="width:300px;height: 200px"></div>
    </div>
    <div class="bar"
         v-show="$store.state.isPackShow3">
      <div class="top">
        <span @click="close3()"
              class="close">关闭</span>
      </div>
      <div id="main3"
           style="width:300px;height: 200px"></div>
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
  data () {
    return {

    };
  },
  mounted () {
    this.$nextTick(() => {
      this.initData();
      this.initData2();
      this.initData3();
    });
  },
  methods: {
    close () {
      this.$store.state.isPackShow1 = false;
    },
    close2 () {
      this.$store.state.isPackShow2 = false;
    },
    close3 () {
      this.$store.state.isPackShow3 = false;
    },

    //初始化数据
    initData () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/TingCheChangShiYongLv", {
          params: {
            type: 0
          }
        })
        .then(res => {
          // 绘制图表
          myChart.setOption({
            color: ["#1d64bd", "#e6a23c"],
            title: {
              text: "停车场使用率（%）",
              textStyle: {
                fontSize: 13,
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
              itemGap: 8,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["停车数量", "环比(周)"]
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
              data: res.data.data.weekdays
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
                name: "停车数量",
                type: "bar",
                stack: "",
                smooth: true,
                barWidth: 10,
                data: res.data.data.shuliang
              },
              {
                name: "环比(周)",
                type: "line",
                stack: "",
                smooth: true,
                symbolSize: 0, //拐点图形大小
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.huanbi
              }
            ]
          });
        });
    },
    initData2 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main2"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/TingCheChangShiYongLv", {
          params: {
            type: 1
          }
        })
        .then(res => {
          // 绘制图表
          myChart.setOption({
            color: ["#1d64bd", "#e6a23c"],
            title: {
              text: "停车场使用率（%）",
              textStyle: {
                fontSize: 13,
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
              itemGap: 8,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["停车数量", "环比(月)"]
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
              data: res.data.data.weekdays
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
                name: "停车数量",
                type: "bar",
                stack: "",
                smooth: true,
                barWidth: 10,
                data: res.data.data.shuliang
              },
              {
                name: "环比(月)",
                type: "line",
                stack: "",
                smooth: true,
                symbolSize: 0, //拐点图形大小
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.huanbi
              }
            ]
          });
        });
    },
    initData3 () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main3"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/TingCheChangShiYongLv", {
          params: {
            type: 2
          }
        })
        .then(res => {
          // 绘制图表
          myChart.setOption({
            color: ["#1d64bd", "#e6a23c"],
            title: {
              text: "停车场使用率（%）",
              textStyle: {
                fontSize: 13,
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
              itemGap: 8,
              textStyle: {
                color: "#9c9e9e" //---所有图例的字体颜色
              },
              data: ["停车数量", "环比(年)"]
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
              data: res.data.data.weekdays
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
                name: "停车数量",
                type: "bar",
                stack: "",
                smooth: true,
                barWidth: 10,
                data: res.data.data.shuliang
              },
              {
                name: "环比(年)",
                type: "line",
                stack: "",
                smooth: true,
                symbolSize: 0, //拐点图形大小
                lineStyle: {
                  width: 2,
                  type: "dashed"
                },
                data: res.data.data.huanbi
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
    font-size: 14px;
    text-align: right;
    margin-bottom: 10px;
    .close {
      cursor: pointer;
    }
  }
}
</style>