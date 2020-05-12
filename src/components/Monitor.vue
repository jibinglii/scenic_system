<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="hover"
                  placement="right"
                  width="460"
                  v-model="visible"
                  title="实时监控"
                  popper-class="jian_monitor">
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
                <el-button @click.native="monitorBtn(item.F_Id)">查看</el-button>
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
      isshow: false,
      img: require("../assets/images/jk.png"),
      activeImg: require("../assets/images/active_jk.png"),

      markermonitorList: [],
      markermonitorgroup: null,
      map: null,
      videoList: [],
      f_video: ''
    };
  },
  created () {

  },
  methods: {
    monitorBtn (F_Id) {

      this.map = this.$store.state.map
      var scenicLists = this.$store.state.scenicLists
      for (var i = 0; i < scenicLists.length; i++) {
        if (F_Id === scenicLists[i].F_Id) {
          this.map.panTo([scenicLists[i].F_YPoint, scenicLists[i].F_XPoint]);
          this.videoLists(F_Id)
        }
      }
    },
    async videoLists (F_Id) {
      await this.$http.get('gisscenicarea/getvideolist/' + F_Id).then(res => {
        this.videoList = res.data.data
        console.log(res)
        for (var i = 0; i < this.videoList.length; i++) {
          this.f_video = this.videoList[i].F_Video
          this.$store.dispatch('setfVideo', this.f_video)
        }

      })
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
.el-popover p {
  margin-top: -30px;
}
.button_div {
  text-align: right;
  padding-right: 10px;
}
.img_div {
  img {
    margin-left: -11px;
    margin-top: -4px;
  }
}
</style>
