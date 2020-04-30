<template>
  <div>
    <div class="scroller" v-show="isshow">
      <div class="top">
        <span>驻留时间分析</span>
        <span @click="close()" class="close">关闭</span>
      </div>
      <div class="progess">
        <p>0-1小时</p>
        <div>
          <el-progress :percentage="50" :format="format" :show-text="false" color="#00d0af"></el-progress>
          <span>25888人</span>
        </div>
      </div>
      <div class="progess">
        <p>1-2小时</p>
        <div>
          <el-progress :percentage="30" :format="format" :show-text="false" color="#00d0af"></el-progress>
          <span>25888人</span>
        </div>
      </div>
      <div class="progess">
        <p>2-3小时</p>
        <div>
          <el-progress :percentage="60" :format="format" :show-text="false" color="#00d0af"></el-progress>
          <span>25888人</span>
        </div>
      </div>
      <div class="progess">
        <p>3小时以上</p>
        <div>
          <el-progress :percentage="50" :format="format" :show-text="false" color="#00d0af"></el-progress>
          <span>25888人</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Progress } from "element-ui";
export default {
  name: "scrollbar",
 data(){
    return{
     isshow:true
    }
  },
  methods: {
     close(){
      this.isshow = false
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  },
  components: {
    "el-progress": Progress
  }
};
</script>
<style lang="scss" scoped>
.scroller {
  background: rgba(256, 256, 256, 0.7);
  border-radius: 14px;
  padding: 15px;
  width: 300px;
  margin: 10px 0;
  .top {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
     .close{
      cursor: pointer;
    }
  }
  .progess {
    text-align: left;
    font-size: 12px;
    padding-top: 4px;
    p {
      margin-bottom: 0;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-progress {
        width: 200px;
      }
    }
  }
}
</style>