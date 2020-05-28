<template>
  <div class="item">
    <div class="popover">
      <el-popover trigger="click"
                  placement="right"
                  width="460"
                  v-model="visible"
                  title="数据统计"
                  popper-class="jian_statics">
        <p @click="visible = false">关闭</p>
        <div class="listDiv">
          <div class="list"
               v-for="(item,index) in lists"
               :key="index">
            <div class="top">
              <h2>{{item.name}}</h2>
              <div class="button_div">
                <el-button @click="statiClick(item.id)">查看</el-button>
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
      img: require("../assets/images/data.png"),
      activeImg: require("../assets/images/active_data.png"),
      lists: [
        {
          name: "停车场数据",
          id: 0
        },
        {
          name: "票务数据",
          id: 1
        },
        {
          name: "环境监测",
          id: 2
        }
      ]
    };
  },
  methods: {
    statiClick (id) {
      console.log(id);
      if (id === 0) {
        this.$store.state.isTicketShow1 = false;
        this.$store.state.isTicketShow2 = false;
        this.$store.state.isMonitorShow1 = false;
        this.$store.state.isMonitorShow2 = false;
        this.$store.state.isMonitorShow3 = false;
        if ((this.$store.state.isPack = !this.$store.state.isPack)) {
          this.$store.state.isPackShow1 = true;
          this.$store.state.isPackShow2 = true;
          this.$store.state.isPackShow3 = true;
        }
        return;
      }
      if (id === 1) {
        this.$store.state.isPackShow1 = false;
        this.$store.state.isPackShow2 = false;
        this.$store.state.isPackShow3 = false;
        this.$store.state.isMonitorShow1 = false;
        this.$store.state.isMonitorShow2 = false;
        this.$store.state.isMonitorShow3 = false;
        if ((this.$store.state.isTicket = !this.$store.state.isTicket)) {
          this.$store.state.isTicketShow1 = true;
          this.$store.state.isTicketShow2 = true;
        }
        return;
      }
      if (id === 2) {
        this.$store.state.isTicketShow1 = false;
        this.$store.state.isTicketShow2 = false;
        this.$store.state.isPackShow1 = false;
        this.$store.state.isPackShow2 = false;
        this.$store.state.isPackShow3 = false;
        if ((this.$store.state.isMonitor = !this.$store.state.isMonitor)) {
          this.$store.state.isMonitorShow1 = true;
          this.$store.state.isMonitorShow2 = true;
          this.$store.state.isMonitorShow3 = true;
        }
        return;
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
.listDiv {
  .list {
    padding: 20px 0;
    .top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      h2 {
        color: #fc6b00;
        font-size: 20px;
        margin-bottom: 0px;
        font-weight: 600;
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
  }
}
.img_div {
  img {
    margin-left: -8px;
    margin-top: 0px;
  }
}
.el-popover p {
  margin-top: -30px;
}
</style>
