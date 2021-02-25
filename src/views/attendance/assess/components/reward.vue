<template>
  <div class="reward">
    <el-form :model="ruleForm" :rules="rules1" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="username" required>
        <el-autocomplete popper-class="my-autocomplete" style="width: 100%;" v-model="ruleForm.username" :fetch-suggestions="querySearch" placeholder="请输入内容" clearable @select="handleSelect">
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="工号" prop="userId" required>
        <el-input v-model="ruleForm.userId" placeholder="请输入工号"></el-input>
      </el-form-item>
      <el-form-item label="奖罚类型" prop="type" required>
        <el-select v-model="ruleForm.type" placeholder="请选择" style="width:100%">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="奖罚金额" prop="money" required>
        <el-input v-model="ruleForm.money" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="desc" required>
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
        value: '罚款',
        label: '罚款'
      }, {
        value: '奖励',
        label: '奖励'
      }],
      value: '',
      ruleForm: {
        username: '',
        userId: '',
        type: '',
        money: '',
        desc: ''
      },
      rules1: {
        username: [
          { required: true, message: '请选择任务执行者', trigger: 'change' }
        ],
        userId: [
          { required: true, message: '请输入员工号', trigger: 'change' },
          { min: 6, max: 6, message: '请输入6位员工号', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请输入奖罚类型', trigger: 'change' }
        ],
        money: [
          { required: true, message: '请输入金额', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写备注', trigger: 'change' }
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
.reward {
  margin: 20px;
}
.demo-ruleForm {
  width: 60%;
  margin: 50px auto 0 auto;
  border: 1px solid #dcdfe6;
  border-radius: 20px;
  padding: 90px 120px 30px 50px;
  background-color: rgba(61, 57, 128, 0.2);
}
</style>