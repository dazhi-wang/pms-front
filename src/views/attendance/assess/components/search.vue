<template>
  <div class="search">
    <el-form :inline="true" :model="searchForm" ref="searchForm" label-width="100px" class="demo-form-inline" size="mini">
      <el-form-item label="姓名" prop="username">
        <el-autocomplete popper-class="my-autocomplete" style="width: 100%;" v-model="searchForm.username" :fetch-suggestions="querySearch" placeholder="请输入内容" clearable @select="handleSelect">
          <template slot-scope="{ item }">
            <div class="name">{{ item.value }}</div>
          </template>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="工号" prop="userId">
        <el-input v-model="searchForm.userId" placeholder="请输入工号"></el-input>
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
        searchForm: {
          username: '',
          userId: '',
        },
      }
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert(this.searchForm.username);
            alert(this.searchForm.userId);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .search {
    width: 50%;
    text-align: center;
    margin: 20px auto 0 auto;
  }
</style>