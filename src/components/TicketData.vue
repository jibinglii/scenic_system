<template>
  <div>
    <div class="bar" v-show="$store.state.isTicketShow1">
      <div class="top">
        <span>景区票务</span>
        <span @click="close()" class="close">关闭</span>
      </div>
      <div id="mainTicket1" style="width:100%;height: 200px"></div>
    </div>
    <div class="bar" v-show="$store.state.isTicketShow2">
      <div class="top">
        <span>景区客流量</span>
        <span @click="close2()" class="close">关闭</span>
      </div>
      <div id="mainTicket2" style="width:100%;height: 200px"></div>
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
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initTicketData();
      this.initTicketData2();
    });
  },
  methods: {
    close() {
      this.$store.state.isTicketShow1 = false;
    },
    close2() {
      this.$store.state.isTicketShow2 = false;
    },

    //初始化数据
    initTicketData() {
      // 基于准备好的dom，初始化echarts实例
      var mainTicket1 = echarts.init(document.getElementById("mainTicket1"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/JingQuPiaoWu")
        .then(res => {
          console.log(res);
          // 绘制图表
          mainTicket1.setOption({
            color: ["#58e7ff", "#febb05"],
            title: {
              text: "票数（万张）",
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
              data: ["售票票数", "环比（去年）"]
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
              data: res.data.data.month
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
                name: "售票票数",
                type: "bar",
                stack: "",
                smooth: true,
                barWidth: 10,
                data: res.data.data.shuliang
              },
              {
                name: "环比（去年）",
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
    initTicketData2() {
      // 基于准备好的dom，初始化echarts实例
      var mainTicket2 = echarts.init(document.getElementById("mainTicket2"));
      this.$http
        .get("http://119.3.248.197:8086/api/mobile/JingQuKeLiuLiang")
        .then(res => {
          console.log(res);
          // 绘制图表
          mainTicket2.setOption({
            color: ["#58e7ff", "#febb05"],
            title: {
              text: "票数（万张）",
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
              data: ["售票票数", "环比（去年）"]
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
              data: res.data.data.month
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
                name: "售票票数",
                type: "bar",
                stack: "",
                smooth: true,
                barWidth: 10,
                data: res.data.data.shuliang
              },
              {
                name: "环比（去年）",
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