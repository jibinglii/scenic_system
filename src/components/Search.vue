<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="click" placement="right-start" width="460" v-model="visible">
        <p @click="visible = false">关闭</p>
        <div style="text-align:center">
          <el-input placeholder="搜索" prefix-icon="el-icon-search" v-model="value"></el-input>
        </div>
        <div class="listDiv">
          <div class="list" v-for="(item,index) in lists" :key="index">
            <div class="left">
              <img :src="item.imgUrl" />
            </div>
            <div class="right">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="button_div">
                <el-button>查看地图</el-button>
                <el-button>实时监控</el-button>
              </div>
            </div>
          </div>
        </div>

        <el-button slot="reference" class="img_div">
          <img :src="activeImg" class="activeImg" alt />
          <img :src="img" class="img" alt />
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { Popover, Button, Input } from "element-ui";
export default {
  name: "search",
  data() {
    return {
      visible: false,
      isshow: false,
      value: "",
      img: require("../assets/images/search.png"),
      activeImg: require("../assets/images/active_search.png"),
      lists: [
        {
          imgUrl: require("../assets/images/scenic.png"),
          name: "澄鲜湖",
          intro:
            "澄鲜湖位于紫竹院公园内,南长河北岸。湖沿岸绿柳或隔岸观景,或行舟于湖中。与不远处的高楼林立相比,有一种“结庐在人境,而无车马喧"
        },
        {
          imgUrl: require("../assets/images/scenic.png"),
          name: "澄鲜湖",
          intro:
            "澄鲜湖位于紫竹院公园内,南长河北岸。湖沿岸绿柳或隔岸观景,或行舟于湖中。与不远处的高楼林立相比,有一种“结庐在人境,而无车马喧"
        },
        {
          imgUrl: require("../assets/images/scenic.png"),
          name: "澄鲜湖",
          intro:
            "澄鲜湖位于紫竹院公园内,南长河北岸。湖沿岸绿柳或隔岸观景,或行舟于湖中。与不远处的高楼林立相比,有一种“结庐在人境,而无车马喧"
        }
      ]
    };
  },
  methods: {},
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
