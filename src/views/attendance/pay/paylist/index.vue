<template>
    <div class="p-history">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="历史工资查询条件" name="1">
                <div style="text-align: center; margin-top: 10px;">
                    <span style="margin: 0 20px;">查询时间</span>
                    <el-date-picker v-model="startTime" type="month" format="yyyy 年 MM 月" value-format="yyyy-MM"
                        @change="clickstartTime" placeholder="选择月">
                    </el-date-picker>
                    <span style="margin: 0 10px;">至</span>
                    <el-date-picker v-model="endTime" type="month" format="yyyy 年 MM 月" value-format="yyyy-MM"
                        @change="clickendTime" placeholder="选择月">
                    </el-date-picker>
                    <!-- <el-date-picker v-model="time" type="monthrange" format="yyyy 年 MM 月" value-format="yyyy-MM"
                     range-separator="至" start-placeholder="开始月份"
                        end-placeholder="结束月份">
                    </el-date-picker> -->
                </div>
            </el-collapse-item>
            <el-collapse-item title="历史工资查询" name="2">
                <el-table :data="paylistdata" style="width: 100%; margin: 0 auto;">
                    <el-table-column prop="username" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="userId" label="工号" width="120">
                    </el-table-column>
                    <el-table-column prop="time" label="时间" width="120">
                    </el-table-column>
                    <el-table-column prop="payitem" label="工资项合计" width="120">
                    </el-table-column>
                    <el-table-column prop="grossWage" label="税前其他工资项合计" width="150">
                    </el-table-column>
                    <el-table-column prop="fiveAndOne" label="五险一金" width="120">
                    </el-table-column>
                    <el-table-column prop="otherTax" label="其他个税影响合计" width="140">
                    </el-table-column>
                    <el-table-column prop="AT" label="税后扣款合计" width="120">
                    </el-table-column>
                    <el-table-column prop="final" label="最终实发" width="120">
                    </el-table-column>
                    <el-table-column label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">详细</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    var icnow = new Date()
    export default {
        name: 'paylist',
        data() {
            return {
                paylistdata: [{
                    username: '王大郅郅',
                    userId: '108334',
                    time: '2023-09',
                    payitem: '3000', //工资项目
                    grossWage: '5000', //税前工资
                    fiveAndOne: '2000', //社保公积金扣款
                    otherTax: '50',//四、其他税影响项
                    AT: '2000',  // 五、税后款项
                    final: '8000', //六
                },
                {
                    username: '王大郅',
                    userId: '108334',
                    time: '2025-08',
                    payitem: '3000', //工资项目
                    grossWage: '5000', //税前工资
                    fiveAndOne: '2000', //社保公积金扣款
                    otherTax: '50',//四、其他税影响项
                    AT: '2000',  // 五、税后款项
                    final: '8000', //六
                },
                {
                    username: '王大郅',
                    userId: '108334',
                    time: '2024-09',
                    payitem: '3000', //工资项目
                    grossWage: '5000', //税前工资
                    fiveAndOne: '2000', //社保公积金扣款
                    otherTax: '50',//四、其他税影响项
                    AT: '2000',  // 五、税后款项
                    final: '8000', //六
                }],
                startTime: `${icnow.getFullYear()}-${icnow.getMonth() - 1}`,
                endTime: `${icnow.getFullYear()}-${icnow.getMonth()}`,
                activeNames: ['1', '2']
            }
        },
        computed: {

        },
        methods: {
            clickstartTime() {
                console.log(this.startTime)
            },
            clickendTime() {
                console.log(this.endTime)
            },
            handleClick(row) {
                console.log(row.username)
                console.log(row.userId)
                // this.$router.push('/attendance/pay/history')
                this.$router.push({ name: 'history', params: { time: row.time, userId: row.userId } })
            },
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

