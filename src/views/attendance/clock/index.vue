<template>
  <div id="clock">
    <div class="c-up">
      <div :class="clockClass">
        <p class="text">
          {{ year }}年 {{ month }} 月 {{ date }} 日</br>
          星期{{ day }}
          {{ time }}
        </p>
        <el-button class="clockbut" type="text" v-show="workInbut" @click="clockIn">上班打卡</el-button>
        <el-button class="clockbut" type="text" v-show="workOutbut" @click="clockOut">下班打卡</el-button>
      </div>
    </div>
    
    <el-divider content-position="center">今日打卡</el-divider>
    <div class="c-list">
      <div class="l-left">
        <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
          <el-table-column prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="150">
          </el-table-column>
          <el-table-column prop="time" label="打卡时间">
          </el-table-column>
          <el-table-column label="打卡地点">
          </el-table-column>
          <el-table-column prop="state" label="打卡状态" width="100">
          </el-table-column>
          <el-table-column prop="type" label="打卡类型" width="100">
          </el-table-column>
        </el-table>
      </div>
      <div class="l-right">
        <p class="lr-title">今日工作时长</p>
        <div class="lr-down">
          <p class="p1">5.5</p>
          <p class="p2">小时</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var icnow = new Date();
  const days = ['天', '一', '二', '三', '四', '五', '六']; // 星期数组
  export default {
    data() {
      return {
        clockClass: 'c-clock-green',
        workOutbut: '',
        workInbut: '',
        workInlog: false,
        workOutlog: false,
        year: icnow.getFullYear(),
        month: icnow.getMonth() + 1,
        date: icnow.getDate(),
        day: days[icnow.getDay()],
        time: icnow.toTimeString().substring(0, 8),
        timer: null,
        tableData: [
          {
            date: '2016-05-04',
            name: '王小虎1',
            time: '10:00:23',
            state: '迟到',
            type: '上班'
          },
          {
            date: '2016-05-03',
            name: '王小虎2',
            time: '19:00:23',
            state: '正常',
            type: '下班'
          }]
      }
    },
    watch: {

    },
    created() {
      this.init1()
      this.init()
    },
    methods: {
      init1(){
        this.workOutbut = false
        this.workInbut = true
      },
      init() {
        // this.workOutbut = false
        // this.workInbut = true
        let day = icnow.getDay()
        let time = icnow.getHours()
        if (day != 0 && day != 6) { //工作日
          if (time < 8) { //8点之前
            if (this.workInbut == true) {
              this.clockClass = 'c-clock-green'
            } else if (this.workOutbut == true) {
              this.clockClass = 'c-clock-red'
            }
          } else if (time >= 8 && time < 18) { //8点到17点之间
            if (this.workInbut == true) {
              this.clockClass = 'c-clock-red'
            } else if (this.workOutbut == true && this.workOutlog == true) {
              this.clockClass = 'c-clock-red'
            } else if (this.workOutbut == true && this.workOutlog == false) {
              this.clockClass = 'c-clock-green'
            }
          } else if (time > 17) {//17点之后
            if (this.workInbut == true && this.workInlog == false) {
              this.clockClass = 'c-clock-red'
            } else if (this.workInbut == true && this.workInlog == true) {
              this.clockClass = 'c-clock-green'
            } else if (this.workOutbut == true && this.workOutlog == true) {
              this.clockClass = 'c-clock-green'
            } else if (this.workOutbut == true && this.workOutlog == false) {
              this.clockClass = 'c-clock-green'
            }
          }
        } else { //周六周日
          if (this.workInbut == true && this.workInlog == false) {
            this.clockClass = 'c-clock-green'
          } else if (this.workInbut == true && this.workInlog == true) {
            this.clockClass = 'c-clock-green'
          } else if (this.workOutbut == true && this.workOutlog == true) {
            this.clockClass = 'c-clock-green'
          } else if (this.workOutbut == true && this.workOutlog == false) {
            this.clockClass = 'c-clock-green'
          }
        }
      },
      clockIn() {
        this.workInlog = true
        this.workOutbut = true
        this.workInbut = false
        this.init()
      },
      clockOut() {
        this.workOutlog = true
        // this.workOutbut = true
        // this.workInbut = false
        this.init()
      },
      //记录背景色
      tableRowClassName({ row, rowIndex }) {
        if (row.state === "正常") {
          return 'success-row';
        } else {
          return 'warning-row';
        }
        return '';
      },
      // 自动计时
      autoMove() {
        this.timer = setInterval(() => {
          let nowdata = new Date()
          this.year = nowdata.getFullYear()
          this.month = nowdata.getMonth() + 1
          this.date = nowdata.getDate()
          this.day = days[nowdata.getDay()]
          this.time = nowdata.toTimeString().substring(0, 8)
        }, 1000)
      },
    },
    mounted() {
      this.autoMove();
    }
  }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  #clock .el-button--text {
    color: #409EFF;
    background: 0 0;
    padding-left: 0;
    padding-right: 0;
    font-size: 20px;
}.el-button+.el-button {
    margin-left: 0;
}
</style>
<style scope>
  .c-clock-green {
    width: 300px;
    height: 300px;
    line-height: 50px;
    border-radius: 100%;
    margin: 40px auto;
    background: rgb(165, 255, 75);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    box-shadow: 0px 5px 20px rgb(124, 252, 0);
  }
  .c-clock-red {
    width: 300px;
    height: 300px;
    line-height: 50px;
    border-radius: 100%;
    margin: 40px auto;
    background: rgb(255, 75, 75);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    box-shadow: 0px 5px 20px rgb(255, 75, 75);
  }
  .clockbut{
    position: absolute;
    bottom: 20px;
    left: calc(50% - 40px)
  }
  .c-clock .text {
    height: 100px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
  .c-list {
    display: flex;
  }
  .l-left {
    width: 70%;
  }
  .l-right {
    width: 30%;
  }
  .lr-title{
    width: 100%;
    text-align: center;
  }
  .lr-down{
    width: 100px;
    margin: 20px auto;
    text-align: center;
  }
  .lr-down .p1,
  .lr-down .p2{
    display: inline;
    margin: 0;
    padding: 0;
  }
  .lr-down .p1{
    font-size: 25px;
  }
  .lr-down .p2{
    font-size: 18px;
  }
</style>