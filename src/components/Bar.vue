<template>
  <div>
    <div class="bar"
         v-show="isshow">
      <div class="top">
        <span>人流分析</span>
        <span @click="close()"
              class="close">关闭</span>
      </div>
      <div id="bar2">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main2"
             style="width:100%;height: 180px"></div>
      </div>
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
      isshow: true
    }
  },
  mounted () {
    this.initData();
  },
  methods: {
    close () {
      this.isshow = false
    },
    //初始化数据
    initData () {
      // 基于准备好的dom，初始化echarts实例
      var myChart2 = echarts.init(document.getElementById("main2"));
      // 绘制图表
      myChart2.setOption({
        title: {
          text: "单位：人",
          x: "right",
          y: "10px",
          textStyle: {
            fontSize: 14,
            fontWeight: "200",
            color: "#666"
          } // 主标题文字颜色
        },
        color: ["#267abb"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "9点",
              "10点",
              "11点",
              "12点",
              "13点",
              "14点",
              "15点",
              "16点",
              "18点",
              "18点"
            ],
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "30%",

            data: [100, 500, 200, 800, 600, 350, 220, 750, 458, 920]
          }
        ]
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
  width: 300px;
  margin: 10px 0;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .close {
      cursor: pointer;
    }
  }
  #bar2 {
    width: 100%;
    height: 180px;
  }
}
</style>