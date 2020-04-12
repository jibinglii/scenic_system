<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="hover" placement="right" width="460" v-model="visible" title="实时监控" popper-class="jian_monitor">
        <p @click="visible = false">关闭</p>
        <div class="listDiv">
          <div class="list" v-for="(item,index) in lists" :key="index">
            <div class="left">
              <img :src="item.imgUrl" />
            </div>
            <div class="right">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="button_div">
                <el-button>查看</el-button>
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
import { Popover, Button } from "element-ui";
export default {
  name: "search",
  data() {
    return {
      visible: false,
      isshow: false,
      img: require("../assets/images/jk.png"),
      activeImg: require("../assets/images/active_jk.png"),
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
    "el-button": Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-popover p {
  margin-top: -30px;
}
.button_div{
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
