<template>
    <el-tabs tab-position="left" style="height: 100%;">
        <el-tab-pane label="当月工资">
            <monthly></monthly>
        </el-tab-pane>
        <el-tab-pane label="历史工资">
            <history></history>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import monthly from './monthly/index'
    import history from './history/index'
    export default {
        components:{
            monthly,
            history
        },
        data() {
            return {

            }
        },
    }
</script>
<style scoped>

</style>