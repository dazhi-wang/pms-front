<template>
    <div class="p-monthly">
        <el-collapse value="1" @change="handleChange">
            <el-collapse-item title="当月工资查询" name="1">
                <div class="m-content">
                    <salaryDetail :monthlydata="monthlydata"></salaryDetail>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    import salaryDetail from '../salaryDetail'
    export default {
        components: {
            salaryDetail
        },
        name: 'monthly',
        data() {
            return {
                monthlydata: {
                    basicWage: 5500,
                    bonus: 600,  //奖金
                    overtimeWage: 800, //加班费
                    subsidy: 200,  //补贴
                    socialInsurance: 550,   //社保
                    accumulationFund: 1500, //公积金
                    commercialInsurance: 80, //商业保险
                    travellingAllowance: 888, //出差补助
                    claimExpense: 666, // 报销费用
                    salaryBefore: 2300, // 税前工资
                    realWages: 19999, //实发工资
                    username: '王大郅',
                    age: '男',
                    userId: 108334,
                    departmentName: 'CTC Smart City Dept-BJ',
                    companyName: '亚信中国',
                },

                webdata: {

                }
            }
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>
<style scoped>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }
    .c-heard {
        margin-bottom: 20px;
    }

    .h-title {
        width: 100%;
        margin: 0 0 10px 0;
        font-size: 20px;
        text-align: center;
    }

    .h-name {
        font-size: 13px;
        float: left;
        margin: 0 0 0 10px;
    }

    .h-info {
        margin: 0;
        width: 100%;
        font-size: 13px;
        text-align: center;
    }

    .c-main {
        margin: 0 10px;
    }

    .i-text,
    .i-num {
        display: inline-block;
        margin: 0;
        width: 50%;
    }

    .i-text {
        padding-left: 10%;
    }

    .m-item {
        background-color: #ffffff;
        border: 1px solid #e2e2e2;
        margin-bottom: 10px;
    }

    .m-item ul {
        margin: 13px 0;
    }

    .it-title {
        margin: 0;
        padding: 0 0 0 10px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-weight: 700;
        background-color: #fcfcfc;
        border-bottom: 1px solid #e2e2e2;
    }
</style>
