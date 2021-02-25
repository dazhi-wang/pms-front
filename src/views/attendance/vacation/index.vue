<template>
  <div class="vacation">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="休假申请" name="1">
        <apply></apply>
      </el-collapse-item>
      <el-collapse-item title="假期余额" name="2">
       <balance></balance>
      </el-collapse-item>
      <el-collapse-item title="休假申请记录" name="3">
        <search></search>
        <record></record>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>
<script>
import Apply from './components/apply'
import Balance from './components/balance'
import Record from './components/record'
import Search from './components/search'
export default {
  components: {
    Apply,
    Balance,
    Record,
    Search
  },
  data() {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange(val) {
      console.log(this.time)
      console.log(val);
    }
  }
}
</script>

<style scoped>
.vacation {
  min-width: 800px;
}
</style>
<style >
.vacation .el-collapse-item__content{
padding-bottom: 0;
}
.vacation .el-collapse-item__header,
.vacation .el-collapse-item__header.is-active {
  font-family: 'KaiTi';
  font-size: 17px;
  padding: 0 10px;
  background-color: rgb(223, 219, 219);
  border: 1px solid rgb(190, 187, 187);
}
</style>