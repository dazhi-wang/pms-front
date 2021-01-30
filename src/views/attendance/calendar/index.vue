<template>
  <div class="lookForMonth_wrapper">
    <div class="lookForMonth_top">
      <div class="selectDate">
        <div>{{year}} 年 {{month}} 月</div>
        <div class="upDownSelect">
          <div class="upDownSelect_item" @click="dateUp"></div>
          <div class="upDownSelect_item" @click="dateDown"></div>
        </div>
      </div>
    </div>
    <div class="calendar" :style="calendarStyle">
      <div v-for="(item,index) in calendarData" class="calendar_item" :key='index' :class="{ash:item.color==='ash',date:index>6&&item.color!=='ash'}">
        <div class="today" v-if="item.label == bday && byear===year && month === bmonth &&item.color!=='ash'">
          <p class="dateEdit">{{item.label}}<i class="el-icon-edit-outline" v-if="item.color!=='ash'&&index>=7"></i></p>
          <p v-if="index>6 &&  index%7 != 0 && index != 6 && index!=13 && index!=20 && index!=27 && index!=34 && index!=41 && index!=48">工作</p>
          <p v-else-if="index>6">休息</p>
        </div>
        <!-- <div v-else-if="index<7||(index>=7&&item.color=='ash')||(index%7 != 0&& index != 6 && index!=13 && index!=20 && index!=27 && index!=34 && index!=41 && index!=48)"> -->
          <div v-else-if="index<7||(index%7 != 0&& index != 6 && index!=13 && index!=20 && index!=27 && index!=34 && index!=41 && index!=48)">
          <p class="dateEdit">{{item.label}}<i class="el-icon-edit-outline" v-if="item.color!=='ash'&&index>=7"></i></p>
          <p v-if="index>6 &&  index%7 != 0 && index != 6 && index!=13 && index!=20 && index!=27 && index!=34 && index!=41 && index!=48">工作</p>
          <p v-else-if="index>6">休息</p>
      </div>
       <div v-else class="week">
          <p class="dateEdit">{{item.label}}<i class="el-icon-edit-outline" v-if="item.color!=='ash'&&index>=7"></i></p>
          <p v-if="index>6 && index%7 != 0 && index != 6 && index!=13 && index!=20 && index!=27 && index!=34 && index!=41 && index!=48">工作</p>
          <p v-else-if="index>6">休息</p>
      </div>
      </div>
      

    </div>
  </div>
</template>
<script>
export default {
  name: "lookForMonth",
  data: () => {
    return {
      calendarData: [{ label: "日" }, { label: "一" }, { label: "二" }, { label: "三" }, { label: "四" }, { label: "五" }, { label: "六" }], //日历循环渲染数据
      year: 0, //当前日期年
      month: 0, //当前日期月数
      date: 0, //当前日期号数
      day: -1, //当前星期几
      byear: 0,
      bmonth: 0,
      bday: 0
    };
  },
  filters: {
  },
  computed: {
    // 根据当月日期详情更改日历表格高度
    calendarStyle() {
      if (this.calendarData.length > 42) {
        return "height: 600px;";
      } else {
        return "height: 500px;";
      }
    },

  },
  async created() {
    // 获取当前日期数据
    this.getNow();
    // 获取当前月份一号的时间戳
    let firstTime = +new Date(this.year, this.month - 1, 1, 0, 0, 0)
    this.getCalendarDate();   // 给calendarData添加当月数据

  },
  mounted() {
  },
  methods: {
    // 获取当前时间
    getNow() {
      let now = new Date()
      this.year = +now.getFullYear()
      this.month = +now.getMonth() + 1
      this.date = +now.getDate()
      this.day = +now.getDay()
      this.byear = +now.getFullYear()
      this.bmonth = now.getMonth() + 1
      this.bday = now.getDate()

    },
    // 获取每个月的天数
    monthDay(month) {
      if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31
      } else if ([4, 6, 9, 11].includes(month)) {
        return 30
      } else if (month === 2) {
        //  判断当年是否为闰年
        if (
          (this.year % 4 === 0 && this.year % 100 !== 0) ||
          this.year % 400 === 0
        ) {
          return 29
        } else {
          return 28
        }
      }
    },
    // 给calendarData添加当月数据
    getCalendarDate() {
      // 获取当前月份一号星期几
      let firstDay = new Date(this.year + "-" + this.month + "-" + "01").getDay();
      this.calendarData = [{ label: "日" }, { label: "一" }, { label: "二" }, { label: "三" }, { label: "四" }, { label: "五" }, { label: "六" }];
      let num = parseInt(firstDay);
      let nowDays = this.monthDay(this.month);
      let lastMonth = this.month - 1 > 0 ? this.month - 1 : 12;
      let lastDays = this.monthDay(lastMonth);
      //   循环添加上一个月数据
      for (let i = 0; i < num; i++) {
        this.calendarData.push({ label: lastDays - num + i + 1, color: 'ash' });
      }
      // 循环添加当月数据
      for (let i = 0; i < nowDays; i++) {
        this.calendarData.push({ label: i + 1 });
      }
      // 循环添加下一个月数据
      if (this.calendarData.length % 7 !== 0) {
        let surplusDay = 7 - (this.calendarData.length % 7);
        for (let i = 0; i < surplusDay; i++) {
          this.calendarData.push({ label: i + 1, color: 'ash' });
        }
      }
      this.loading = false
    },
    // 将日期调上
    dateUp() {
      this.month--;
      if (this.month <= 0) {
        this.year--;
        this.month = 12;
      }
      this.getCalendarDate();   // 给calendarData添加当月数据
    },
    // 将日期调下
    dateDown() {
      this.month++;
      if (this.month > 12) {
        this.year++;
        this.month = 1;
      }
      this.getCalendarDate();   // 给calendarData添加当月数据
    },
  }
};
</script>
<style lang="scss" scoped>
.lookForMonth_wrapper {
  padding: 20px;
  width: 741px;
  margin: auto;
}
.lookForMonth_top {
  margin-bottom: 20px;
  overflow: hidden;
  .selectTeacher {
    float: left;
  }
  .selectDate {
    height: 30px;
    line-height: 30px;
    float: right;
    display: flex;
    .upDownSelect {
      display: flex;
      flex-direction: column;
      margin-top: -2px;
      margin-left: 5px;
      .upDownSelect_item {
        width: 0;
        height: 0;
        border: 7px solid transparent;
        cursor: pointer;
      }
      .upDownSelect_item:nth-child(1) {
        border-bottom: 7px solid #666;
        margin-bottom: 5px;
        &:hover {
          border-bottom: 7px solid skyblue;
        }
      }
      .upDownSelect_item:nth-child(2) {
        border-top: 7px solid #666;
        &:hover {
          border-top: 7px solid skyblue;
        }
      }
    }
  }
}
/* 日历表样式=======================================↓ */
.calendar {
  width: 701px;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  .calendar_item {
    box-sizing: border-box;
    width: 100px;
    height: 86px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .today{
      padding-top: 12px;
    background-color: rgb(166, 142, 177); 
    width:100%; 
    height:100%;
    }
    .week{
      padding-top: 12px;
    background-color: rgb(212, 221, 236,0.1); 
    width:100%; 
    height:100%;
    }
    p {
      margin: 10px;
    }
    &.date:hover {
      background: #eee;
    }
    .status {
      margin-top: 10px;
      &.textBlue {
        color: blue;
      }
      &.textRed {
        color: brown;
      }
    }
    .el-icon-edit-outline {
      cursor: pointer;
      margin-left: 7px;
    }
  }
  .ash {
    color: gainsboro;
  }
  .dateEdit {
    margin: 3px;
    // margin-bottom: 10px;
  }
}
</style>