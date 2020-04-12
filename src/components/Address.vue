<template>
  <div class="item">
    <div class="popover">
      <el-popover
        trigger="click"
        placement="right"
        width="460"
        v-model="visible"
        title="景点设施"
        popper-class="jian_address"
      >
        <p @click="visible = false">关闭</p>
        <div class="address_item">
          <el-button
            type="primary"
            plain
            v-for="(item,index) in lists"
            :key="index"
            :class="btn[index]"
          >
            <div class="imgs">
              <img :src="item.icon" class="icon" />
              <img :src="item.activeIcon" class="active_icon" />
              <span :style="{color:item.color}">{{item.name}}</span>
            </div>
          </el-button>
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
      img: require("../assets/images/address.png"),
      activeImg: require("../assets/images/active_address.png"),
      lists: [
        {
          activeIcon: require("../assets/images/activeIcon_01.png"),
          icon: require("../assets/images/icon_01.png"),
          name: "茶室",
          color: "#3c9525"
        },
        {
          activeIcon: require("../assets/images/activeIcon_02.png"),
          icon: require("../assets/images/icon_02.png"),
          name: "饭店",
          color: "#b2aa48"
        },
        {
          activeIcon: require("../assets/images/activeIcon_03.png"),
          icon: require("../assets/images/icon_03.png"),
          name: "票务中心",
          color: "#f98026"
        },
        {
          activeIcon: require("../assets/images/activeIcon_04.png"),
          icon: require("../assets/images/icon_04.png"),
          name: "WIFI",
          color: "#2a9cdc"
        },
        {
          activeIcon: require("../assets/images/activeIcon_05.png"),
          icon: require("../assets/images/icon_05.png"),
          name: "厕所",
          color: "#5ac03c"
        },
        {
          activeIcon: require("../assets/images/activeIcon_06.png"),
          icon: require("../assets/images/icon_06.png"),
          name: "停车场",
          color: "#413d84"
        },
        {
          activeIcon: require("../assets/images/activeIcon_07.png"),
          icon: require("../assets/images/icon_07.png"),
          name: "商店",
          color: "#fc25ee"
        }
      ],
      btn: ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7"]
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
.img_div {
  img {
    margin-left: -15px;
    margin-top: -2px;
  }
}
.el-popover p {
  margin-top: -30px;
}
.address_item {
  display: flex;
  flex-wrap: wrap;
  .el-button {
    border-radius: 14px;
    width: 93px;
    height: 45px;
    line-height: 40px;
    padding: 0;
    margin-left: 0 !important;
    margin-right: 7px;
    margin-top: 10px;
    margin-bottom: 5px;
    .imgs {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding-left: 5px;
      }

      .active_icon {
        display: none;
      }
      .icon {
        display: block;
      }
      &:hover {
        .active_icon {
          display: block;
        }
        .icon {
          display: none;
        }
        span {
          color: #fff !important;
        }
      }
    }
  }
  .btn1 {
    border: solid 3px #3c9525;
  }
  .btn1:hover {
    background: #3c9525;
  }
  .btn2 {
    border: solid 3px #b2aa48;
  }
  .btn2:hover {
    background: #b2aa48;
  }
  .btn3 {
    border: solid 3px #f98026;
  }
   .btn3:hover {
    background: #f98026;
  }
  .btn4 {
    border: solid 3px #2a9cdc;
  }
   .btn4:hover {
    background: #2a9cdc;
  }
  .btn5 {
    border: solid 3px #5ac03c;
  }
   .btn5:hover {
    background: #5ac03c;
  }
  .btn6 {
    border: solid 3px #413d84;
  }
   .btn6:hover {
    background: #413d84;
  }
  .btn7 {
    border: solid 3px #fc25ee;
  }
   .btn7:hover {
    background: #fc25ee;
  }
}
</style>
