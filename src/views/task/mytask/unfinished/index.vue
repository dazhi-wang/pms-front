<template>
  <div class="task">
    <div class="my-task-f">
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="taskID" label="任务号" width="85">
        </el-table-column>
        <el-table-column prop="taskname" label="任务名称" width="120">
        </el-table-column>
        <el-table-column prop="operator" label="执行人员" width="100">
        </el-table-column>
        <el-table-column prop="issuer" label="指派人" width="80">
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
        <el-table-column align="center" prop="operation" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click=" detail(scope.row)" type="text">查看</el-button>
            <el-button @click="handle(scope.row)" type="text">更新状态</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog class="dialog" title="任务状态更新" :visible.sync="dialogVisible" width="30%">

        <el-form :model="form" ref="form" label-width="120px" class="demo-form">
          <el-form-item label="任务号">
            <el-input v-model="form.taskID" readonly placeholder="请输入6位任务号"></el-input>
          </el-form-item>
          <el-form-item label="任务名">
            <el-input v-model="form.taskName" readonly placeholder="请输入任务名"></el-input>
          </el-form-item>

          <el-form-item label="任务状态">
            <el-select v-model="form.status" style="width: 100%">
              <el-option label="未开始" value="未开始">
              </el-option>
              <el-option label="进行中" value="进行中">
              </el-option>
              <el-option label="已完成" value="已完成">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="text-align: center;">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitForm('form')">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog class="dialog" title="任务查看" center :visible.sync="dialogDetails" top="20px" @close='closeDialog' width="60%">
        <detail ref="detail" :data="sondata"></detail>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import detail from '../detail.vue'
export default {
  components: {
    detail
  },
  data() {
    return {
      activeName: 'departmentFiles',
      show: 'staff',
      dialogVisible: false,
      dialogDetails: false,
      itemtaskID: '',
      value: '',
      status: '',
      sondata: [],
      form: {
        taskID: '',
        taskName: '',
        status: ''
      },
      tableData: [{
        taskID: '000007',
        releasedate: '2016-05-02',
        deadline: '2016-05-11',
        manHour: '0.5天',
        operator: '王小虎1',
        issuer: '领导1',
        desc: '巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉',
        taskname: '12任务完成情况',
        status: '未开始',
      }, {
        taskID: '000006',
        releasedate: '2016-05-02',
        deadline: '2016-05-02',
        operator: '王小虎2',
        manHour: '0.5H',
        issuer: '领导1',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1517 弄',
        status: '未开始',
      }, {
        taskID: '000003',
        releasedate: '2016-05-02-24:59:59',
        deadline: '2016-05-02-24:59:59',
        operator: '王小虎3',
        manHour: '3h',
        issuer: '领导1',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1519 弄',
        status: '进行中',
      }, {
        taskID: '000005',
        releasedate: '2016-05-02-24:59:59',
        deadline: '2016-05-02-24:59:59',
        operator: '王小虎4',
        issuer: '领导1',
        manHour: '0.5天',
        desc: '巴拉巴拉',
        taskname: '上海市普陀区金沙江路 1516 弄',
        status: '未开始',
      }]
    }
  },
  methods: {
    handle(row) {
      this.form.taskID = row.taskID
      this.form.taskName = row.taskname
      this.form.status = row.status
      this.dialogVisible = true
    },
    remove(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }).then(() => {
        console.log(`删除${row.issuer}`)
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dialogVisible = false
          console.log(this.form)
          // alert('submit!');

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    detail(row) {
      this.sondata = row
      this.dialogDetails = true
      this.$nextTick(()=>{
        this.$refs.detail.show()
      })
    },
    closeDialog() {
      this.$refs.detail.clear()
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
.task {
  height: calc(100vh - 50px);
  padding-right: 10px;
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