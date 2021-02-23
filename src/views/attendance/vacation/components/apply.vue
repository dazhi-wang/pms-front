<template>
  <div class="apply">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-form" size="mini">
      <div class="f-upitem">
        <el-form-item label="休假类型" prop="vacationType">
          <el-select v-model="ruleForm.vacationType" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="休假时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="text-align: center;">到</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker v-model="ruleForm.date2" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd" style="width: 100%;">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-col :span="11">
          <el-form-item label="持续天数" prop="daynum">
            <el-input v-model="daynum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="审批人" prop="approver">
            <el-input v-model="ruleForm.approver"></el-input>
          </el-form-item>
        </el-col>
      </div>
      <el-form-item label="请假原因(500字)：" prop="desc" style="width: 80%; margin-left: 30px;">
        <el-input type="textarea" v-model="ruleForm.desc" placeholder="请输入请假原因(不超过500字)"
          style="max-height: 150px;overflow: hidden;"></el-input>
      </el-form-item>
      <!-- <el-form-item label="政策说明：" prop="desc" style="width: 80%; margin-left: 30px;">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [{
          value: '事假',
          label: '事假'
        }, {
          value: '病假',
          label: '病假'
        }, {
          value: '产假',
          label: '产假'
        }, {
          value: '陪产假',
          label: '陪产假'
        }, {
          value: '婚嫁',
          label: '婚嫁'
        }, {
          value: '丧家',
          label: '丧家'
        }],
        ruleForm: {
          vacationType: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          approver: ''
        },
        // daynum: '',
        rules: {
          vacationType: [
            { required: true, message: '请选择休假类型', trigger: 'blur' },
          ],
          daynum: [
            { required: true, message: '请输入请假天数', trigger: 'blur' },
          ],
          date1: [
            { required: true, message: '请选择开始日期', trigger: 'change' }
          ],
          date2: [
            { required: true, message: '请选择结束日期', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请输入请假原因', trigger: 'blur' },
            { max: 500, message: '长度不能超过500 个字符', trigger: 'blur' }
          ],
          approver: [
            { required: true, message: '请输入审批人', trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
      daynum() {
        if (this.ruleForm.date2 != '' && this.ruleForm.date2 != '')
          return this.DateDiff(this.ruleForm.date1, this.ruleForm.date2)
      }
    },
    methods: {
      DateDiff(sDate1, sDate2) {
        var aDate, oDate1, oDate2, iDays
        aDate = sDate1.split("-")
        oDate1 = new Date(aDate[0], aDate[1], aDate[2])    //转换为12-18-2006格式  
        aDate = sDate2.split("-")
        oDate2 = new Date(aDate[0], aDate[1], aDate[2])
        iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数  
        return iDays
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  }
</script>
<style>
  .apply {
    margin-top: 20px;
  }

  .apply .el-form-item--mini.el-form-item {
    margin-bottom: 15px;
  }

  .apply .el-form-item {
    margin-bottom: 15px;
  }
</style>
<style scoped>
  .apply {
    max-height: 500px;
    overflow: auto;
  }

  .apply .f-upitem {
    width: 87%;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 30px;
  }
</style>