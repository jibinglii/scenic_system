<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="click"
                  placement="right"
                  width="460"
                  v-model="visible"
                  title="景点游玩"
                  popper-class="jian_sights">
        <p @click="visible = false">关闭</p>
        <div class="listDiv">
          <div class="list"
               v-for="(item,index) in $store.state.scenicLists"
               :key="index">
            <div class="left">
              <img :src="item.F_Image" />
            </div>
            <div class="right">
              <h3>{{item.F_Name}}</h3>
              <p>{{item.F_Remarks}}</p>
              <div class="button_div">
                <el-button @click="popupBtn(item.F_Id)">查看地图</el-button>
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
</template>

<script>
import { Popover, Button } from "element-ui";
export default {
  name: "search",
  data () {
    return {
      visible: false,
      img: require("../assets/images/jd.png"),
      activeImg: require("../assets/images/active_jd.png"),
      scenic: [],
      map: null
    };
  },
  mounted () {

  },
  methods: {
    popupBtn (id) {
      this.map = this.$store.state.map
      console.log(this.map)
      console.log(id)
      var scenicLists = this.$store.state.scenicLists
      for (var i = 0; i < scenicLists.length; i++) {
        if (id === scenicLists[i].F_Id) {
          this.map.panTo([scenicLists[i].F_YPoint, scenicLists[i].F_XPoint]);
        }
      }
    }
  },
  components: {
    "el-popover": Popover,
    "el-button": Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img_div {
  img {
    margin-left: -11px;
    margin-top: -6px;
  }
}
.el-popover p {
  margin-top: -30px;
}
.button_div {
  text-align: right;
  padding-right: 10px;
}
</style>
