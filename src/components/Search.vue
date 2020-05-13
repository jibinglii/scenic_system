<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="click"
                  placement="right-start"
                  width="460"
                  v-model="visible">
        <p @click="visible = false">关闭</p>
        <div style="text-align:center">
          <el-input placeholder="搜索"
                    prefix-icon="el-icon-search"
                    clearable
                    v-model="searchText"
                    @change="onChange"></el-input>
        </div>
        <div class="listDiv">
          <div class="list"
               v-for="(item,index) in lists"
               :key="index"
               v-show="searchText">
            <div class="left">
              <img :src="item.F_Image" />
            </div>
            <div class="right">
              <h3>{{item.F_Name}}</h3>
              <p>{{item.F_Remarks}}</p>
              <div class="button_div">
                <el-button @click.native="viewMapClick(item.F_Id)">查看地图</el-button>
                <!-- <el-button>实时监控</el-button> -->
              </div>
            </div>
          </div>
          <div v-show="isShow"
               style="text-align:center">未搜索到指定内容</div>
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
import { Popover, Button, Input } from "element-ui";
export default {
  name: "search",
  data () {
    return {
      visible: false,
      isShow: false,
      searchText: "",
      img: require("../assets/images/search.png"),
      activeImg: require("../assets/images/active_search.png"),
      lists: [],
      map: null,
      F_Id: []
    };
  },
  methods: {
    onChange () {
      this.getListSearch()
    },
    async getListSearch () {
      var keyword = this.searchText
      console.log(keyword)
      await this.$http.get("/scenicareaaround/getlistforsearch/" + keyword).then(res => {
        console.log(res)
        this.lists = res.data.data

        if (res.data.data.length === 0) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      });
    },
    viewMapClick (F_Id) {
      this.map = this.$store.state.map
      for (var i = 0; i < this.lists.length; i++) {
        if (F_Id === this.lists[i].F_Id) {
          this.map.panTo([this.lists[i].F_XPoint, this.lists[i].F_YPoint]);
        }
      }
    }
  },
  components: {
    "el-popover": Popover,
    "el-button": Button,
    "el-input": Input
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.listDiv {
  height: 400px;
}
.popper__arrow {
  top: 25px !important;
}
</style>
