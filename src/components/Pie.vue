<template>
  <div>
    <div class="pie" v-show="isshow">
      <div class="top">
        <span>游戏类型</span>
        <span @click="close()" class="close">关闭</span>
      </div>
      <div id="pie1">
        <div id="main1" style="width:100%;height: 200px"></div>
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
  name: "pie",
  data(){
    return{
     isshow:true
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    close(){
      this.isshow = false
    },
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
          top: "75%",
          left: "35%",
          itemGap:15,
          itemWidth: 12, // 图例图形宽度
          itemHeight: 12,
          padding:5,
          data: ["散步", "游玩", "聊天", "其他"]
        },
        series: [
          {
            name: "游戏类型",
            type: "pie",
            radius: ["40%", "45%"],
            center: ["50%", "40%"],
            selectedMode: 'single',
            hoverAnimation: false,
            tooltip: {
              show: true
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
  width: 300px;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .close{
      cursor: pointer;
    }
  }
  #pie1 {
    width: 100%;
    height: 200px;
  }
}
</style>