
<template>
  <div class="staff">
      <search></search>
    <list :allList="allList"></list>
    
  </div>
</template>
<script>
import List from './components/list'
import Search from './components/search'
export default {
  components: {
    List,
    Search
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
    }
  },
  methods: {
    clicktab() {
      console.log(this.activeName)
    }
  }
}
</script>