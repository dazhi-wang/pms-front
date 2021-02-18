<template>
  <div class="release">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="任务号" prop="taskID">
        <el-input v-model="ruleForm.taskID" placeholder="请输入6位任务号"></el-input>
      </el-form-item>
      <el-form-item label="任务名" prop="taskName">
        <el-input v-model="ruleForm.taskName" placeholder="请输入任务名"></el-input>
      </el-form-item>
      <el-form-item label="任务执行者" prop="username">
        <el-autocomplete popper-class="my-autocomplete" style="width: 100%;" v-model="ruleForm.username" :fetch-suggestions="querySearch" placeholder="请输入内容" clearable @select="handleSelect">
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="任务工时" prop="manHour" required>
        <el-input v-model="ruleForm.manHour" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="任务截至时间" required>
        <!-- <el-col :span="11"> -->
        <el-form-item prop="date1">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
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
        value: '员工1',
        label: '员工1'
      }, {
        value: '员工2',
        label: '员工2'
      }, {
        value: '员工3',
        label: '员工3'
      }, {
        value: '员工4',
        label: '员工4'
      }, {
        value: '员工5',
        label: '员工5'
      }],
      value: '',
      ruleForm: {
        taskID: '',
        taskName: '',
        username: '',
        date1: '',
        manHour: '',
        type: [],
        desc: ''
      },
      rules: {
        taskID: [
          { required: true, message: '请输入任务号', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入6位任务号', trigger: 'blur' }
        ],
        taskName: [
          { required: true, message: '请输入任务名称', trigger: 'blur' },
        ],
        username: [
          { required: true, message: '请选择任务执行者', trigger: 'change' }
        ],
        manHour: [
          { required: true, message: '请输入任务工时', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择完成日期', trigger: 'change' }
        ]
      }
    };
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      //  let list = JSON.parse(localStorage.getItem('recent'))
      // let obj = []
      // if (typeof (localStorage.recent) != "undefined") {
      //   if (list.length != 0) {
      //     list.some((item, index, list) => {
      //       let val = { value: item }
      //       obj.push(val);
      //     })
      //   }
      // }
      // return obj
      return [
        { "value": "员工1" },
        { "value": "员工2" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
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
    }
  }
}
</script>
<style>
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete li .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
</style> 
<style scoped>
.release{
  margin: 20px;
}
.demo-ruleForm{
  width: 60%;
  margin: 50px auto 0 auto;
  border: 1px solid #DCDFE6;
  border-radius: 20px;
  padding: 90px 120px 30px 50px;
  background-color: rgba(61, 57, 128, 0.2);
}
</style>