<template>
    <div class="pay">
        <p>工资查询</p>
        <!-- <el-tabs tab-position="left" style="height: 100%;">
        <el-tab-pane label="当月工资">
            <monthly></monthly>
        </el-tab-pane>
        <el-tab-pane label="历史工资">
            <history></history>
        </el-tab-pane>
        <el-tab-pane label="历史工资列表">
            <paylist></paylist>
        </el-tab-pane>
    </el-tabs> -->
    <router-view></router-view>
    </div>
    
</template>

<script>
    import monthly from './monthly/index'
    import history from './history/index'
    import paylist from './paylist/index'
    export default {
        components:{
            monthly,
            history,
            paylist
        },
        data() {
            return {

            }
        },
    }
</script>
<style scoped>
.pay{
    height: 100%;
}
.pay p{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    margin: 0;
    background-color: rgb(190, 187, 187);
}
</style>