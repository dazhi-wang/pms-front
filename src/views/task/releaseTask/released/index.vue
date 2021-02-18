<template>
  <div class="task">
    <div class="my-task-f">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="taskID" label="任务号" width="85">
        </el-table-column>
        <el-table-column prop="taskname" label="任务名称" width="250">
        </el-table-column>
        <el-table-column prop="operator" label="执行人员" width="100">
        </el-table-column>
        <el-table-column prop="manHour" label="工时" width="60">
        </el-table-column>
        <el-table-column prop="releasedate" label="发布时间" width="160">
        </el-table-column>
        <el-table-column prop="deadline" label="截止时间" width="160">
        </el-table-column>
        <el-table-column align="center" prop="status" label="状态" width="100">
        </el-table-column>
        <el-table-column align="left" prop="desc" label="备注">
        </el-table-column>
        <el-table-column align="center" prop="operation" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text">编辑</el-button>
            <el-button @click="remove(scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog class="dialog" title="编辑任务" :visible.sync="dialogVisible" top="50px" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="任务号" prop="taskID">
          <el-input v-model="ruleForm.taskID" readonly style="width: 70%;" placeholder="请输入6位任务号"></el-input>
        </el-form-item>
        <el-form-item label="任务名" prop="taskName">
          <el-input v-model="ruleForm.taskName" style="width: 70%;" placeholder="请输入任务名"></el-input>
        </el-form-item>

        <el-form-item label="任务执行者" prop="operator">
          <el-autocomplete popper-class="my-autocomplete" style="width: 70%;" v-model="ruleForm.operator" :fetch-suggestions="querySearch" placeholder="请输入内容" clearable @select="handleSelect">
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
            </template>
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="任务工时" prop="manHour" required>
          <el-input v-model="ruleForm.manHour" style="width: 70%;" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="任务截至时间" required>
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="ruleForm.date1" style="width: 70%;"></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="ruleForm.status" style="width: 70%">
            <el-option label="未开始" value="未开始">
            </el-option>
            <el-option label="进行中" value="进行中">
            </el-option>
            <el-option label="已完成" value="已完成">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" style="width: 70%;"  rows="4" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        taskID: '',
        taskName: '',
        operator: '',
        date1: '',
        manHour: '',
        type: [],
        status: '',
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
        operator: [
          { required: true, message: '请选择任务执行者', trigger: 'change' }
        ],
        manHour: [
          { required: true, message: '请输入任务工时', trigger: 'blur' }
        ],
        date1: [
          { required: true, message: '请选择完成日期', trigger: 'change' }
        ]
      },
      activeName: 'departmentFiles',
      show: 'staff',
      dialogVisible: false,
      // value: '',
      status: '',
      tableData: [{
        taskID: '000007',
        releasedate: '2016-05-02',
        deadline: '2016-05-11',
        manHour: '0.5天',
        operator: '王小虎1',
        desc: '巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉',
        taskname: '12任务完成情况',
        status: '未开始',
      }, {
        taskID: '000006',
        releasedate: '2016-05-02',
        deadline: '2016-05-02',
        operator: '王小虎2',
        manHour: '0.5H',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1517 弄',
        status: '未开始',
      }, {
        taskID: '000003',
        releasedate: '2016-05-02-24:59:59',
        deadline: '2016-05-02-24:59:59',
        operator: '王小虎3',
        manHour: '3h',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1519 弄',
        status: '进行中',
      }, {
        taskID: '000005',
        releasedate: '2016-05-02-24:59:59',
        deadline: '2016-05-02-24:59:59',
        operator: '王小虎4',
        manHour: '0.5天',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1516 弄',
        status: '未开始',
      }]
    }
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
    handleEdit(index, row) {
      this.ruleForm.taskID = row.taskID
      this.ruleForm.status = row.status
      this.ruleForm.desc = row.desc
      this.ruleForm.taskName = row.taskname
      this.ruleForm.operator = row.operator
      this.ruleForm.manHour = row.manHour
      this.ruleForm.date1 = row.deadline
      this.dialogVisible = true
      console.log(row)
      console.log(index, row);
    },
    remove(row) {
      this.$confirm('此任务将彻底删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }).then(() => {
        console.log(`删除${row.operator}`)
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    submitForm(formName) {
      console.log(this.ruleForm)
      
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          // alert('submit!');
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
.el-table .cell {
  white-space: nowrap;
}
.el-table td {
  padding: 0;
}
</style>
<style scoped>
.demo-ruleForm{
  width: 100%;
  padding-left: 80px;
  margin: 0 auto 0 auto;
}
.task {
  height: calc(100vh - 50px);
  /* display: flex; */
}
.dialog p {
  width: 25%;
  text-align: center;
  display: inline-block;
}
.my-task-f {
  width: 100%;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>