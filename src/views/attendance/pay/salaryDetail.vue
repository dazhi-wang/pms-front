<template>
    <div>
        <div class="c-heard">
            <p class="h-title">工资通知单</p>
            <div style="overflow: hidden;">
                <p class="h-name">{{ webdata.username }} {{ ages }}</p>
                <p class="h-info">员工编号：{{webdata.userId }}部门名称：{{ webdata.departmentName }}公司名称：{{webdata.companyName }}</p>
            </div>
        </div>
        <div class="c-main">
            <div class="m-item">
                <p class="it-title">一、工资项目</p>
                <ul>
                    <li>
                        <p class="i-text">实发基础工资</p>
                        <p class="i-num">{{ webdata.basicWage }}</p>
                    </li>
                </ul>
            </div>

            <div class="m-item">
                <p class="it-title">二、其他税前工资项目</p>
                <ul>
                    <li>
                        <p class="i-text">奖金</p>
                        <p class="i-num">{{ webdata.bonus }}</p>
                    </li>
                    <li>
                        <p class="i-text">加班费</p>
                        <p class="i-num">{{ webdata.overtimeWage }}</p>
                    </li>
                    <li>
                        <p class="i-text">津贴、补贴</p>
                        <p class="i-num">{{ webdata.subsidy }}</p>
                    </li>
                </ul>
            </div>

            <div class="m-item">
                <p class="it-title">三、社保公积金</p>
                <ul>
                    <li>
                        <p class="i-text">社保</p>
                        <p class="i-num">{{ webdata.socialInsurance }}</p>
                    </li>
                    <li>
                        <p class="i-text">公积金</p>
                        <p class="i-num">{{ webdata.accumulationFund }}</p>
                    </li>
                </ul>
            </div>

            <div class="m-item">
                <p class="it-title">四、其他个税影响项</p>
                <ul>
                    <li>
                        <p class="i-text">商业保险</p>
                        <p class="i-num">{{ webdata.commercialInsurance }}</p>
                    </li>
                </ul>
            </div>

            <div class="m-item">
                <p class="it-title">五、税后款项</p>
                <ul>
                    <li>
                        <p class="i-text">出差补助</p>
                        <p class="i-num">{{ webdata.travellingAllowance }}</p>
                    </li>
                    <li>
                        <p class="i-text">报销费用</p>
                        <p class="i-num">{{ webdata.claimExpense }}</p>
                    </li>
                </ul>
            </div>

            <div class="m-item">
                <p class="it-title">六、最终实发</p>
                <ul>
                    <li>
                        <p class="i-text">当月税前合计</p>
                        <p class="i-num">{{ webdata.salaryBefore }}</p>
                    </li>
                    <li>
                        <p class="i-text">最终实发</p>
                        <p class="i-num">{{ webdata.realWages }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'salaryDatail',
        props: ['historydata', 'monthlydata'],
        data() {
            return {
                // webdata: {}
            }
        },
        computed: {
            webdata() {
                if (this.historydata != null) {
                    return this.historydata
                } else if (this.monthlydata != null) {
                    return this.monthlydata
                }
            },
                ages() {
                if (this.webdata.age == '男') {
                    return '先生'
                } else if (this.webdata.age == '女') {
                    return '女士'
                }
            }
        },
        // computed: {
        //     ages() {
        //         if (this.webdata.age == '男') {
        //             return '先生'
        //         } else if (this.webdata.age == '女') {
        //             return '女士'
        //         }
        //     }
        // },
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