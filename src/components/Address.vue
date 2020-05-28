<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="click"
                  placement="right"
                  width="460"
                  v-model="visible"
                  title="景点设施"
                  popper-class="jian_address">
        <p @click="visible = false">关闭</p>
        <div class="address_item">
          <el-button v-for="(item,index) in lists"
                     :key="index"
                     @click.native="typeBtn(index)">
            <div class="imgs">
              <img :src="item.F_Image"
                   class="icon _icon" />
              <img :src="item.F_HighlightImage"
                   class="active_icon _icon" />
              <span :style="{color:item.F_Color}">{{item.F_Name}}</span>
            </div>
          </el-button>
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
      img: require("../assets/images/address.png"),
      activeImg: require("../assets/images/active_address.png"),
      lists: [],
      FId: [],
      map: null
    };
  },
  created () {
    this.gettypelist();
  },

  methods: {
    async gettypelist () {
      await this.$http.get("/scenicareaaround/gettypelist").then(res => {
        console.log(res);
        this.lists = res.data.data;
        for (var i = 0; i < this.lists.length; i++) {
          this.FId.push(this.lists[i].F_Id);
        }
        this.$store.dispatch('setF_Id', this.FId)
      });
    },
    typeBtn (index) {
      console.log(index)
      this.map = this.$store.state.map
      var markercsgroup = this.$store.state.markercsgroup
      var markerzxgroup = this.$store.state.markerzxgroup
      var markerwifigroup = this.$store.state.markerwifigroup
      var markerfdgroup = this.$store.state.markerfdgroup
      markercsgroup.clearLayers();
      markerzxgroup.clearLayers();
      markerwifigroup.clearLayers();
      markerfdgroup.clearLayers();
      if (index == 0) {
        this.$emit('parentgetListCs')
      }
      if (index == 1) {
        this.$emit('parentgetListZx')
      }
      if (index == 2) {
        this.$emit('parentgetListWIFI')
      }
      if (index == 3) {
        this.$emit('parentgetListFd')
      }
    },

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
      ._icon {
        width: 25px;
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
          // color: #fff !important;
        }
      }
    }
  }
}
</style>
