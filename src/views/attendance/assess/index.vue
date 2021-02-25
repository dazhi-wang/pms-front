<template>
  <div class="assess">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="奖罚登记" name="1">
        <reward></reward>
      </el-collapse-item>
      <el-collapse-item title="奖罚记录" name="2">
       <search></search>
        <record></record> 
      </el-collapse-item>
    </el-collapse>
  </div>

</template>
<script>
import Reward from './components/reward'
import Record from './components/record'
import Search from './components/search'
export default {
  components: {
    Reward,
    Record,
    Search
  },
  data() {
    return {
      activeNames: ['1','2']
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
.assess {
  min-width: 800px;
}
</style>
<style >
.assess .el-collapse-item__content{
padding-bottom: 0;
}
.assess .el-collapse-item__header,
.assess .el-collapse-item__header.is-active {
  font-family: 'KaiTi';
  font-size: 17px;
  padding: 0 10px;
  background-color: rgb(223, 219, 219);
  border: 1px solid rgb(190, 187, 187);
}
</style>