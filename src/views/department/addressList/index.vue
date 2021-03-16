<template>
  <el-tabs v-model="activeName" type="border-card" @tab-click="clicktab()">
    <el-tab-pane label="公司全部" name="first" :key="'first'">
      <list :allList="allList"></list>
    </el-tab-pane>
    <el-tab-pane label="本部门" name="second" :key="'second'">
      <list :allList="depList"></list>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import List from './components/list'
export default {
  components: {
    List
  },
  data() {
    return {
      activeName: 'second',
      allList: [{
        username: '王大郅',
        userId: '1008334',
        section: '开发部',
        phoneNumber: '15009354333',
        superior: '经理',
        Email: '1527342335@qq.com',
        signature: ''
      }, {
       username: '王大郅',
        userId: '1008334',
        section: '产品部',
        phoneNumber: '17824828200',
        superior: '经理',
        Email: '1527342335@qq.com',
        signature: ''
      }],
      depList: [{
       username: '王大郅',
        userId: '1008334',
        section: '开发部',
        phoneNumber: '17824828200',
        superior: '经理',
        Email: '1527342335@qq.com',
        signature: ''
      }, {
       username: '王大郅',
        userId: '1008334',
        section: '开发部',
        phoneNumber: '17824828200',
        superior: '经理',
        Email: '1527342335@qq.com',
        signature: ''
      }],
    }
  },
  methods: {
    clicktab() {
      console.log(this.activeName)
    }
  }
}
</script>