<template>
  <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
    <el-form-item label="任务号">
      <el-input v-model="ruleForm.taskID" readonly placeholder="任务号"></el-input>
    </el-form-item>
    <el-form-item label="任务名称">
      <el-input v-model="ruleForm.taskName" readonly placeholder="任务名称"></el-input>
    </el-form-item>
    <el-form-item label="任务执行者">
      <el-input v-model="ruleForm.operator" readonly placeholder="任务执行者"></el-input>
    </el-form-item>
    <el-form-item label="任务指派人">
      <el-input v-model="ruleForm.issuer" readonly placeholder="任务指派人"></el-input>
    </el-form-item>
    <el-form-item label="任务工时">
      <el-input v-model="ruleForm.manHour" readonly placeholder="工时"></el-input>
    </el-form-item>
    <el-form-item label="发布时间" >
      <el-input v-model="ruleForm.releasedate" readonly placeholder="发布时间"></el-input>
    </el-form-item>
    <el-form-item label="截止时间" >
      <el-input v-model="ruleForm.deadline" readonly placeholder="截止时间"></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-input readonly v-model="ruleForm.status"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" readonly v-model="ruleForm.desc"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'detail',
  props: ["data"],
  data() {
    return {
      ruleForm: {
        taskID: '',
        taskName: '',
        operator: '',
        date1: '',
        manHour: '',
        issuer: '',
        desc: ''
      },

    }
  },
  methods:{
      show(){
          this.ruleForm.taskID = this.data.taskID
          this.ruleForm.taskName = this.data.taskname
          this.ruleForm.operator = this.data.operator
          this.ruleForm.issuer = this.data.issuer
          this.ruleForm.manHour = this.data.manHour
          this.ruleForm.releasedate = this.data.releasedate
          this.ruleForm.deadline = this.data.deadline
          this.ruleForm.status = this.data.status
          this.ruleForm.desc = this.data.desc
      },
  clear(){
    this.ruleForm.taskID = ''
          this.ruleForm.taskName = ''
          this.ruleForm.operator = ''
          this.ruleForm.issuer = ''
          this.ruleForm.manHour = ''
          this.ruleForm.releasedate = ''
          this.ruleForm.deadline = ''
          this.ruleForm.status = ''
          this.ruleForm.desc = ''
  }
  }
}
</script>