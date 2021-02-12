<template>
  <div class="download-file">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="部门内部文件" name="departmentFiles">
        <div class="f-d-down">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="filename" label="文件名称">
            </el-table-column>
            <el-table-column prop="upname" label="上传者" width="100">
            </el-table-column>
            <el-table-column prop="date" label="上传时间" width="150">
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template slot-scope="scope">
                <el-button v-if="show == 'staff'" @click="download(scope.row)" title="下载" type="text"><i class="el-icon-download"></i></el-button>
                <el-button v-if="show == 'staff'" @click="print(scope.row)" type="text">打印</el-button>
                <el-button @click="remove(scope.row)" type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="公司内部文件" name="internalDocuments">
        <div class="f-d-down">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="filename" label="文件名称">
            </el-table-column>
            <el-table-column prop="upname" label="上传者" width="100">
            </el-table-column>
            <el-table-column prop="date" label="上传时间" width="150">
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template slot-scope="scope">
                <el-button v-if="show == 'staff'" @click="download(scope.row)" title="下载" type="text"><i class="el-icon-download"></i></el-button>
                <el-button v-if="show == 'staff'" @click="print(scope.row)" type="text">打印</el-button>
                <el-button v-if="show =='admin'" @click="remove(scope.row)" type="text">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'departmentFiles',
      show: 'staff',
      tableData: [{
        date: '2016-05-02',
        upname: '王小虎1',
        filename: '12任务完成情况'
      }, {
        date: '2016-05-04',
        upname: '王小虎2',
        filename: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        upname: '王小虎3',
        filename: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        upname: '王小虎4',
        filename: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    remove(row){
      
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
.download-file {
  height: calc(100vh - 50px);
  /* display: flex; */
}
.f-d-up {
  height: 50px;
  width: 100%;
}
.f-d-down {
  /* height: 50%; */
  width: 100%;
  /* border: 1px solid rgb(151, 144, 144); */
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>