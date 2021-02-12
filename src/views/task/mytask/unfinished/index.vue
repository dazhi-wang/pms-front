<template>
  <div class="task">
    <div class="my-task-f">
      <el-table :data="tableData" style="width: 100%" @cell-click="handle">
        <el-table-column prop="taskID" label="任务号" width="85">
        </el-table-column>
        <el-table-column prop="filename" label="任务名称">
        </el-table-column>
        <el-table-column prop="upname" label="下发人" width="100">
        </el-table-column>
        <el-table-column prop="releasedate" label="下发时间" width="160">
        </el-table-column>
        <el-table-column prop="finishdate" label="完成时间" width="160">
        </el-table-column>
        <el-table-column align="center" prop="status" label="状态" width="150">
        </el-table-column>
      </el-table>
      <el-dialog class="dialog" title="任务状态更新" :visible.sync="dialogVisible" width="30%">
        <p>任务号：</p>
        <el-input v-model="itemtaskID" style="width: 65%" readonly></el-input>
        <p>任务状态：</p>
        <el-select v-model="value"  style="width: 65%">
          <el-option label="未开始" value="未开始">
          </el-option>
          <el-option label="进行中" value="进行中">
          </el-option>
          <el-option label="已完成" value="已完成">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'departmentFiles',
      show: 'staff',
      dialogVisible: false,
      itemtaskID: '',
      value: '',
      status: '',
      tableData: [{
        taskID: '00000007',
        releasedate: '2016-05-02-24:59:59',
        finishdate: '2016-05-02-24:59:59',
        date: '2016-05-02-24:59:59',
        upname: '王小虎1',
        filename: '12任务完成情况',
        status: '未开始',
      }, {
        taskID: '00000006',
        releasedate: '2016-05-02-24:59:59',
        finishdate: '2016-05-02-24:59:59',
        upname: '王小虎2',
        filename: '上海市普陀区金沙江路 1517 弄',
        status: '未开始',
      }, {
        taskID: '00000003',
        releasedate: '2016-05-02-24:59:59',
        finishdate: '2016-05-02-24:59:59',
        upname: '王小虎3',
        filename: '上海市普陀区金沙江路 1519 弄',
        status: '进行中',
      }, {
        taskID: '00000005',
        releasedate: '2016-05-02-24:59:59',
        finishdate: '2016-05-02-24:59:59',
        upname: '王小虎4',
        filename: '上海市普陀区金沙江路 1516 弄',
        status: '未开始',
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handle(row, column, event, cell) {
      this.itemtaskID = row.taskID
      this.value = row.status
      this.dialogVisible = true
      console.log(row)
      console.log(column)
      console.log(event.style.display)
      console.log(cell)
    },
    remove(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true,
      }).then(() => {
        console.log(`删除${row.upname}`)
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
    download(row) {
      console.log(`下载${row.upname}`);
    },
    print(row) {
      console.log(`打印${row.upname}`)
    }
  }
}
</script>

<style>
.el-table td {
  padding: 0;
}
</style>
<style scoped>
.task {
  height: calc(100vh - 50px);
  /* display: flex; */
}
.dialog p{
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