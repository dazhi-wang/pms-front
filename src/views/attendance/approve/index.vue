<template>
    <div class="approve">
        <search></search>
        <el-table class="el-table" :data="tableData" style="width: 100%">
            <el-table-column prop="username" label="姓名" min-width="7%">
            </el-table-column>
            <el-table-column prop="userId" label="工号" min-width="8%">
            </el-table-column>
            <el-table-column prop="statrtime" label="休假开始时间" min-width="9%">
            </el-table-column>
            <el-table-column prop="endtime" label="休假结束时间" min-width="9%">
            </el-table-column>
            <el-table-column prop="type" label="休假类型" min-width="8%">
            </el-table-column>
            <el-table-column prop="approvtime" label="申请时间" min-width="9%">
            </el-table-column>
            <el-table-column prop="approver" label="审批人" min-width="7%">
            </el-table-column>
            <el-table-column prop="state" label="审批状态" min-width="10%">
            </el-table-column>
            <el-table-column prop="statetime" label="审批时间" min-width="9%">
            </el-table-column>
            <el-table-column prop="daynum" label="休假时长/(天)" min-width="8%">
            </el-table-column>
            <el-table-column prop="desc" label="休假原因" min-width="10%">
            </el-table-column>
            <el-table-column label="操作" min-width="8%">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.state != '未审批'" type="text" @click=" detail(scope.row)">详细</el-button>
                    <el-button v-if="scope.row.state == '未审批'" type="text" @click=" change(scope.row)">审批</el-button>
                    <el-button v-if="scope.row.state != '未审批'" type="text" @click=" change(scope.row)">修改</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog class="dialog" title="打卡详细" center :visible.sync="dialogDetails" top="20px" width="50%">
            <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm record-detail">
                <el-form-item label="姓名">
                    <el-input v-model="ruleForm.username" readonly placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="ruleForm.userId" readonly placeholder="工号"></el-input>
                </el-form-item>

                <el-form-item label="休假开始时间">
                    <el-date-picker v-show="!diasabledInput" v-model="ruleForm.statrtime" :class="workTime" type="date"
                        placeholder="休假开始时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                    </el-date-picker>
                    <el-input v-show="diasabledInput" :class="workTime" v-model="ruleForm.statrtime"
                        :readonly="diasabledInput" placeholder="休假开始时间"></el-input>
                </el-form-item>

                <el-form-item label="休假结束时间">
                    <el-date-picker v-show="!diasabledInput" v-model="ruleForm.endtime" :class="workTime" type="date"
                        placeholder="休假结束时间" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
                    </el-date-picker>
                    <el-input v-show="diasabledInput" :class="workTime" v-model="ruleForm.endtime"
                        :readonly="diasabledInput" placeholder="休假结束时间"></el-input>
                </el-form-item>

                <el-form-item label="休假类型">
                    <el-input v-show="diasabledInput" v-model="ruleForm.type" readonly placeholder="休假类型"></el-input>
                    <el-select v-show="!diasabledInput" :class="workTime" v-model="ruleForm.type"
                        :readonly="diasabledInput" style="width: 100%;">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="申请时间">
                    <el-input v-model="ruleForm.approvtime" readonly placeholder="申请时间"></el-input>
                </el-form-item>
                <el-form-item label="审批人">
                    <el-input v-model="ruleForm.approver" readonly placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="审批状态">
                    <!-- <el-input v-model="ruleForm.state" readonly placeholder="审批状态"></el-input> -->
                    <el-input v-show="diasabledInput" v-model="ruleForm.state" readonly placeholder="审批状态"></el-input>
                    <el-select v-show="!diasabledInput" :class="workTime" v-model="ruleForm.state"
                        :readonly="diasabledInput" style="width: 100%;">
                        <el-option value="未通过">未通过</el-option>
                        <el-option value="通过">通过</el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="审批时间">
                    <el-input v-model="ruleForm.statetime" readonly placeholder="审批时间"></el-input>
                </el-form-item>
                <el-form-item v-show="diasabledInput" label="休假时长">
                    <el-input v-model="ruleForm.daynum" readonly placeholder="休假时长"></el-input>
                </el-form-item>
                <el-form-item label="休假原因">
                    <el-input type="textarea" v-show="diasabledInput" v-model="ruleForm.desc" :class="workTime"
                        :readonly="diasabledInput" placeholder="无" style="max-height: 100px;overflow: hidden;">
                    </el-input>
                    <el-input type="textarea" v-show="!diasabledInput" v-model="ruleForm.desc" :class="workTime"
                        :readonly="diasabledInput" placeholder="请输入休假原因（500字内）"
                        style="max-height: 100px;overflow: hidden;"></el-input>
                </el-form-item>
                <el-form-item v-show="isbut" class="form-item-but" style="text-align: center;">
                    <!-- <el-button @click="edit">编辑</el-button> -->
                    <el-button type="primary" @click="submitForm('form')">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>

</template>
<script>
    import Search from './components/search'
    export default {
        components: {
            Search
        },
        data() {
            return {
                diasabledInput: true,
                dialogDetails: false,
                workTime: '',
                isbut: false,
                options: [{
                    value: '事假',
                    label: '事假'
                }, {
                    value: '病假',
                    label: '病假'
                }, {
                    value: '产假',
                    label: '产假'
                }, {
                    value: '陪产假',
                    label: '陪产假'
                }, {
                    value: '婚嫁',
                    label: '婚嫁'
                }, {
                    value: '丧家',
                    label: '丧家'
                }],
                tableData: [{
                    username: '王大郅',
                    userId: '1008334',
                    statrtime: '2020-02-24',
                    endtime: '2020-02-29',
                    type: '事假',
                    approver: '领导1',
                    state: '未审批',
                    approvtime: '2020-02-12',
                    statetime: '2020-02-12',
                    daynum: '3',
                    desc: '家中有事家中有事家中有事'
                }, {
                    username: '王大郅',
                    userId: '1008334',
                    statrtime: '2020-02-24',
                    endtime: '2020-02-29',
                    type: '事假',
                    approver: '领导1',
                    approvtime: '2020-02-12',
                    statetime: '2020-02-12',
                    state: '已审批',
                    daynum: '3',
                    desc: '家中有事...'
                }],
                ruleForm: {
                    username: '',
                    userId: '',
                    statrtime: '',
                    endtime: '',
                    type: '',
                    approver: '',
                    approvtime: '',
                    statetime: '',
                    state: '',
                    daynum: '',
                    desc: ''
                },
            }
        },
        methods: {
            // edit() {
            //   this.diasabledInput = false
            //   this.workTime = 'work-time'
            // },
            change(row) {
                this.isbut = true
                this.dialogDetails = true
                this.diasabledInput = false
                this.workTime = 'work-time'
                this.ruleForm.username = row.username
                this.ruleForm.userId = row.userId
                this.ruleForm.statrtime = row.statrtime
                this.ruleForm.endtime = row.endtime
                this.ruleForm.type = row.type
                this.ruleForm.approver = row.approver
                this.ruleForm.state = row.state
                this.ruleForm.desc = row.desc
                this.ruleForm.approvtime = row.approvtime
                this.ruleForm.statetime = row.statetime
            },
            submitForm() {
                this.dialogDetails = false
                this.workTime = ''
                console.log(this.ruleForm)
            },
            detail(row) {
                this.isbut = false
                this.dialogDetails = true
                this.diasabledInput = true
                this.workTime = ''
                this.ruleForm.username = row.username
                this.ruleForm.userId = row.userId
                this.ruleForm.statrtime = row.statrtime
                this.ruleForm.endtime = row.endtime
                this.ruleForm.type = row.type
                this.ruleForm.approver = row.approver
                this.ruleForm.state = row.state
                this.ruleForm.daynum = row.daynum
                this.ruleForm.desc = row.desc
                this.ruleForm.approvtime = row.approvtime
                this.ruleForm.statetime = row.statetime

            },
            DateDiff(sDate1, sDate2) {
                var aDate, oDate1, oDate2, iDays
                aDate = sDate1.split("-")
                oDate1 = new Date(aDate[0], aDate[1], aDate[2])    //转换为12-18-2006格式  
                aDate = sDate2.split("-")
                oDate2 = new Date(aDate[0], aDate[1], aDate[2])
                iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数  
                return iDays
            },
        },

    }
</script>

<style scoped>

</style>

<style>
    .approve .el-table .cell {
        white-space: nowrap;
    }

    .approve .el-table .el-button {
        padding: 0;
    }

    .approve .dialog .el-input {
        width: 50%;
    }
    .approve .dialog .el-form-item{
        margin-bottom: 10px;
    }
    .approve .dialog .el-input__inner,
    .approve .dialog .el-textarea__inner {
        border: none;
    }

    .approve .dialog .work-time .el-input__inner,
    .approve .dialog .el-textarea__inner {
        border: 1px solid #DCDFE6;
    }
</style>