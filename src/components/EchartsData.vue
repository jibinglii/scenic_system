<template>
  <div>
    <div class="pie">
      <div class="top">
        <span>游戏类型</span>
        <span>关闭</span>
      </div>
      <div id="pie1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="float:left;width:100%;height: 200px"></div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/pie");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "echartsData",
  mounted() {
    this.initData();
  },
  methods: {
    //初始化数据
    initData() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main1"));
      // 绘制图表
      myChart.setOption({
        color: ["#00d0af", "#d90451", "#ffa200", "#4583fd"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          bottom: "bottom",
          itemGap: 30,
          itemWidth: 20, // 图例图形宽度
          itemHeight: 20,
          data: ["散步", "游玩", "聊天", "其他"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "45%"],
            center: ["50%", "40%"],
            // hoverOffset: 0,
            hoverAnimation: false,
            tooltip: {
              show: false
            },
            labelLine: {
              normal: {
                show: false,
                length: 0
              }
            },
            data: [
              { value: 335, name: "散步" },
              { value: 310, name: "游玩" },
              { value: 234, name: "聊天" },
              { value: 135, name: "其他" }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pie {
  background: rgba(256, 256, 256, 0.7);
  border-radius: 14px;
  padding: 15px;
  width: 375px;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
  }
  #pie1 {
    width: 100%;
    height: 200px;
  }
}
</style>