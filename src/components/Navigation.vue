<template>
  <div class="item">
    <div class="popover">
      <el-popover
        trigger="click"
        placement="right"
        width="460"
        v-model="visible"
        title="游客导览"
        popper-class="jian_navigation"
      >
        <p @click="visible = false">关闭</p>
        <div class="listDiv">
          <div class="list" v-for="(item,index) in lists" :key="index">
            <div class="top">
              <h2>{{item.route}}</h2>
              <div class="button_div">
                <el-button>出发</el-button>
              </div>
            </div>
            <div class="bottom">
              <p>{{item.des}}</p>
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
      img: require("../assets/images/dh.png"),
      activeImg: require("../assets/images/active_dh.png"),
      lists: [
        {
          route: "1小时推荐路线",
          des:
            "紫竹院公园南门—双林寺塔遗址—绿毯诗韵—青莲岛—梅桥—荷花渡—茗缘阁—紫竹院公园南门"
        },
        {
          route: "2小时推荐路线",
          des:
            "紫竹院公园西南门—四君亭—梅桥—八宜茶舍—夕梯—跨海东征—福萌紫竹院—镜游亭—一得桥—紫竹院公园西南门"
        },
        {
          route: "2.5小时推荐路线",
          des:
            "紫竹院公园南门—双林寺塔遗址—绿毯诗韵—青莲岛—梅桥—荷花渡—茗缘阁—紫竹院公园南门"
        },
        {
          route: "3.5小时推荐路线",
          des:
            "紫竹院公园南门—双林寺塔遗址—绿毯诗韵—青莲岛—梅桥—荷花渡—茗缘阁—紫竹院公园南门"
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
.listDiv {
  .list {
    flex-wrap: wrap;
    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      h2 {
        color: #fc6b00;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 0px;
      }
      .button_div {
        .el-button {
          padding: 8px 25px;
          font-size: 13px;
          border-radius: 10px;
          background: #7d7d7d;
          color: #fff;
          border: none;
        }
        .el-button:hover {
          background: #2581c9;
        }
      }
    }
    .bottom {
      p {
        text-align: justify;
        margin-top: 10px;
      }
    }
  }
}
.img_div {
  img {
    margin-left: -4px;
    margin-top: -4px;
  }
}
.el-popover p {
  margin-top: -30px;
}
</style>
