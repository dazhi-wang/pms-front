<template>
  <div class="leave-record">

    <el-table class="el-table" :data="tableData" style="width: 100%">
      <el-table-column prop="username" label="姓名" min-width="7%">
      </el-table-column>
      <el-table-column prop="userId" label="工号" min-width="8%">
      </el-table-column>
      <el-table-column prop="time" label="奖罚时间" min-width="9%">
      </el-table-column>
      <el-table-column prop="type" label="奖罚类型" min-width="8%">
      </el-table-column>
      <el-table-column prop="money" label="奖罚金额" min-width="8%">
      </el-table-column>
      <el-table-column prop="approver" label="操作人" min-width="7%">
      </el-table-column>
      <el-table-column prop="desc" label="备注" min-width="10%">
      </el-table-column>
      <el-table-column label="操作" min-width="8%">
        <template slot-scope="scope">
          <el-button type="text" @click=" detail(scope.$index, tableData, scope.row)">详细</el-button>
          <!-- <el-button type="text" @click=" change(scope.row)">修改</el-button> -->
          <el-button type="text" @click=" dele(scope.$index, tableData)">删除</el-button>

        </template>
      </el-table-column>
    </el-table>

    <el-dialog class="dialog" title="奖罚详细" center :visible.sync="dialogDetails" width="50%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm record-detail">
        <el-form-item label="姓名">
          <el-input v-model="ruleForm.username" readonly placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="工号">
          <el-input v-model="ruleForm.userId" readonly placeholder="工号"></el-input>
        </el-form-item>
        <el-form-item label="奖罚时间">
          <el-date-picker v-model="ruleForm.time" readonly type="date" placeholder="奖罚时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="奖罚类型">
          <el-input v-show="diasabledInput" v-model="ruleForm.type" readonly placeholder="奖罚类型"></el-input>
          <el-select v-show="!diasabledInput" :class="workTime" v-model="ruleForm.type" :readonly="diasabledInput" style="width: 100%;">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="奖罚金额">
          <el-input v-model="ruleForm.money" :class="workTime" :readonly="diasabledInput" placeholder="奖罚金额"></el-input>
        </el-form-item>
        <el-form-item label="操作人">
          <el-input v-model="ruleForm.approver" readonly placeholder="操作人"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-show="diasabledInput" v-model="ruleForm.desc" :class="workTime" :readonly="diasabledInput" placeholder="无" style="max-height: 100px;overflow: hidden;"></el-input>
          <el-input type="textarea" v-show="!diasabledInput" v-model="ruleForm.desc" :class="workTime" :readonly="diasabledInput" placeholder="请输入备注" style="max-height: 100px;overflow: hidden;">
          </el-input>
        </el-form-item>
        <el-form-item v-show="isbut" class="form-item-but" style="text-align: center;">
          <el-button @click="edit">编辑</el-button>
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
      editindex: {},
      workTime: '',
      isbut: true,
      options: [{
        value: '奖励',
        label: '奖励'
      }, {
        value: '罚款',
        label: '罚款'
      }],
      tableData: [{
        username: '王大郅',
        userId: '1008334',
        time: '2020-02-24',
        type: '罚款',
        money: '200',
        approver: '领导1',
        desc: '违反规定'
      }, {
        username: '王大郅',
        userId: '1008334t',
        time: '2020-02-24',
        type: '奖励',
        money: '200',
        approver: '领导1',
        desc: '证书奖励'
      }],
      ruleForm: {
        username: '',
        userId: '',
        time: '',
        type: '',
        money: '',
        approver: '',
        desc: ''
      },
    }
  },
  methods: {
    // edit() {
    //   this.diasabledInput = false
    //   this.workTime = 'work-time'
    // },
    edit() {
      this.dialogDetails = true
      this.diasabledInput = false
      this.workTime = 'work-time'
      
    },
    submitForm() {
      this.dialogDetails = false
      this.workTime = ''
      console.log(this.editindex)
      this.editindex.type = this.ruleForm.type
      this.editindex.money = this.ruleForm.money
      // row.type = this.ruleForm.type
      console.log(this.ruleForm.type)
    },
    detail(index, data, row) {
      this.editindex = data[index]
      this.dialogDetails = true
      this.diasabledInput = true
      this.workTime = ''
      this.ruleForm.username = row.username
      this.ruleForm.userId = row.userId
      this.ruleForm.time = row.time
      this.ruleForm.type = row.type
      this.ruleForm.approver = row.approver
      this.ruleForm.desc = row.desc
      this.ruleForm.money = row.money
      let str = row.time
      let strtime = str.substr(5, 2)
      let now = new Date().getMonth() + 1
      if (strtime == now) {
        this.isbut = true
      } else {
        this.isbut = false
        this.$message({
          message: '只能修改本月',
          type: 'warning'
        });
      }
    },
    dele(index, row) {
      console.log('删除')
      console.log(row[index].userId)
      row.splice(index, 1)
    }
  },

}
</script>

<style scoped>
</style>

<style>
.el-table .cell {
  white-space: nowrap;
}

.leave-record .el-table .el-button {
  padding: 0;
}

.leave-record .el-input {
  width: 50%;
}

.leave-record .dialog .el-form-item {
  margin-bottom: 10px;
}

.leave-record .el-input__inner,
.leave-record .el-textarea__inner {
  border: none;
}

.work-time .el-input__inner,
.leave-record .el-textarea__inner {
  border: 1px solid #dcdfe6;
}
</style>