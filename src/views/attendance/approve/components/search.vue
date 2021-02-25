<template>
  <div class="search">
    <el-form :inline="true" :model="searchForm" ref="searchForm" label-width="100px" class="demo-form-inline"
      size="mini">

      <el-form-item label="申请人">
        <el-input v-model="searchForm.username" placeholder="请输入申请人"></el-input>
      </el-form-item>
      <el-form-item label="休假类型">
        <el-select v-model="searchForm.type" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="审批状态">
        <el-select v-model="searchForm.state" placeholder="请选择">
          <el-option value="未审批">未审批</el-option>
          <el-option value="未通过">未通过</el-option>
          <el-option value="已通过">已通过</el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('searchForm')">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>
<script>

  export default {
    name: 'Search',
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
        } ,{
          value: '年假',
          label: '年假'
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
        searchForm: {
          type: '',
          username: '',
          state: '',
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert(this.searchForm.type);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style>
  .search .el-form {
    margin: 0 auto;
  }
</style>
<style scoped>
  .search {
    display: flex;
    width: 100%;
    margin: 20px auto 0 auto;
  }
</style>