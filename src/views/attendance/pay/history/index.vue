<template>
    <div class="p-history">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="历史工资查询条件" name="1">
                <div style="text-align: center; margin-top: 10px;">
                    <span style="margin: 0 10px;">查询时间</span>
                    <el-date-picker v-model="time" type="month" format="yyyy 年 MM 月"
                    value-format="yyyy-MM" @change="clicktime" placeholder="选择月">
                    </el-date-picker>
                </div>
            </el-collapse-item>
            <el-collapse-item title="历史工资查询" name="2">
                <salaryDetail :historydata="historydata"></salaryDetail>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import salaryDetail from '../salaryDetail'
    var icnow = new Date()
    export default {
        components: {
            salaryDetail
        },
        name: 'history',
        data() {
            return {
                historydata: {
                    basicWage: 2500,
                    bonus: 1000,  //奖金
                    overtimeWage: 1000, //加班费
                    subsidy: 200,  //补贴
                    socialInsurance: 800,   //社保
                    accumulationFund: 1000, //公积金
                    commercialInsurance: 100, //商业保险
                    travellingAllowance: 2000, //出差补助
                    claimExpense: 500, // 报销费用
                    salaryBefore: 8000, // 税前工资
                    realWages: 20000, //实发工资
                    username: '王大郅',
                    age: '男',
                    userId: '108334',
                    departmentName: 'CTC Smart City Dept-BJ',
                    companyName: '亚信中国',
                },
                time: `${icnow.getFullYear()}-${icnow.getMonth()}`,
                activeNames: ['1', '2']
            }
        },
        created() {
            if(this.$route.params.time != '' && this.$route.params.time != undefined){
                this.time = this.$route.params.time
            }
            
        },
        computed:{
            // key(){
            //     username: this.$route.params.username
            //     userId: this.$route.params.userId
            // }
        },
        methods: {
            clicktime(){
                console.log(this.$route.params.userId)
                console.log(this.time)
                // console.log(this.key.username)
            },
            handleChange(val) {
                console.log(this.time)
                console.log(val);
            }
        }
    }
</script>
