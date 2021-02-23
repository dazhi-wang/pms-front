<template>
  <div class="leave-record">
    <el-table class="el-table" :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="userId" label="工号" width="120">
      </el-table-column>
      <el-table-column prop="statrtime" label="休假开始时间" width="120">
      </el-table-column>
      <el-table-column prop="endtime" label="休假结束时间" width="120">
      </el-table-column>
      <el-table-column prop="type" label="休假类型" width="120">
      </el-table-column>
      <el-table-column prop="approver" label="审批人" width="120">
      </el-table-column>
      <el-table-column prop="state" label="审批状态" width="120">
      </el-table-column>
      <el-table-column prop="daynum" label="休假时长/(天)" width="120">
      </el-table-column>
      <el-table-column label="操作" width="120">
        <template slot-scope="scope">
          <el-button type="text" @click=" detail(scope.row)">详细</el-button>
          <el-button v-if="scope.row.state == '未审批'" type="text" @click=" change(scope.row)">修改</el-button>
          <el-button v-if="scope.row.state == '已审批'" type="text" @click=" delete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog class="dialog" title="打卡详细" center :visible.sync="dialogDetails" top="20px" width="50%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm record-detail">
        <el-form-item label="姓名">
          <el-input v-model="ruleForm.username" readonly placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="ruleForm.userId" readonly placeholder="工号"></el-input>
        </el-form-item>

        <el-form-item label="休假开始时间">
          <el-date-picker v-show="!diasabledInput" v-model="ruleForm.statrtime" :class="workTime" type="date"
            placeholder="休假开始时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-input v-show="diasabledInput" :class="workTime" v-model="ruleForm.statrtime" :readonly="diasabledInput"
            placeholder="休假开始时间"></el-input>
        </el-form-item>

        <el-form-item label="休假结束时间">
          <el-date-picker v-show="!diasabledInput" v-model="ruleForm.endtime" :class="workTime" type="date" placeholder="休假结束时间"
            format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-input v-show="diasabledInput" :class="workTime" v-model="ruleForm.endtime" :readonly="diasabledInput"
            placeholder="休假结束时间"></el-input>
        </el-form-item>

        <el-form-item label="休假类型">
          <el-input v-model="ruleForm.type" readonly placeholder="休假类型"></el-input>
        </el-form-item>

        <el-form-item label="审批人">
          <el-input v-model="ruleForm.approver" readonly placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="审批状态">
          <el-input v-model="ruleForm.state" readonly placeholder="审批状态"></el-input>
        </el-form-item>
        <el-form-item v-show="diasabledInput" label="休假时长">
          <el-input v-model="ruleForm.daynum" readonly placeholder="休假时长"></el-input>
        </el-form-item>
        <el-form-item v-show="isbut" class="form-item-but" style="text-align: center;">
          <!-- <el-button @click="edit">编辑</el-button> -->
          <el-button type="primary" @click="submitForm('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        diasabledInput: true,
        dialogDetails: false,
        workTime: '',
        isbut: false,
        tableData: [{
          username: '王大郅',
          userId: '1008334',
          statrtime: '2020-02-24',
          endtime: '2020-02-29',
          type: '事假',
          approver: '领导1',
          state: '未审批',
          daynum: '3',
        }, {
          username: '王大郅',
          userId: '1008334',
          statrtime: '2020-02-24',
          endtime: '2020-02-29',
          type: '事假',
          approver: '领导1',
          state: '已审批',
          daynum: '3',
        }],
        ruleForm: {
          username: '',
          userId: '',
          statrtime: '',
          endtime: '',
          type: '',
          approver: '',
          state: '',
          daynum: ''
        },
      }
    },
    methods: {
      // edit() {
      //   this.diasabledInput = false
      //   this.workTime = 'work-time'
      // },
      change(row){
        this.isbut = true
        this.dialogDetails = true
        this.diasabledInput = false
        this.workTime = 'work-time'
        this.ruleForm.username = row.username
        this.ruleForm.userId = row.userId
        this.ruleForm.statrtime = row.statrtime
        this.ruleForm.endtime = row.endtime
        this.ruleForm.type = row.type
        this.ruleForm.approver = row.approver
        this.ruleForm.state = row.state
        // this.ruleForm.daynum = row.daynum
      },
      submitForm() {
        this.dialogDetails = false
        this.workTime = ''
        console.log(this.ruleForm)
      },
      detail(row) {
        this.isbut = false
        this.dialogDetails = true
        this.diasabledInput = true
        this.workTime = ''
        this.ruleForm.username = row.username
        this.ruleForm.userId = row.userId
        this.ruleForm.statrtime = row.statrtime
        this.ruleForm.endtime = row.endtime
        this.ruleForm.type = row.type
        this.ruleForm.approver = row.approver
        this.ruleForm.state = row.state
        this.ruleForm.daynum = row.daynum

      },
      DateDiff(sDate1, sDate2) {
        var aDate, oDate1, oDate2, iDays
        aDate = sDate1.split("-")
        oDate1 = new Date(aDate[0], aDate[1], aDate[2])    //转换为12-18-2006格式  
        aDate = sDate2.split("-")
        oDate2 = new Date(aDate[0], aDate[1], aDate[2])
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数  
        return iDays
      },
    },

  }
</script>

<style scoped>
</style>

<style>
  .leave-record .el-table .el-button {
    padding: 0;
  }

  .leave-record .el-input {
    width: 50%;
  }

  .leave-record .el-input__inner {
    border: none;
  }

  .work-time .el-input__inner {
    border: 1px solid #DCDFE6;
  }
</style>