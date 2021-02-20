<template>
    <div class="record">
        <div class="heard">
            <div class="h-main">
                <div class="time">
                    <p>按时间筛选</p>
                    <el-date-picker v-model="value1" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="daterange"
                        align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                        :picker-options="pickerOptions">
                    </el-date-picker>
                </div>
                <div class="user">
                    <p>按人员筛选</p>
                    <el-autocomplete popper-class="my-autocomplete" v-model="state"
                        :fetch-suggestions="querySearchAsync" placeholder="请输入内容" clearable @select="handleSelect">
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                        </template>
                    </el-autocomplete>
                </div>

                <el-button class="h-but" type="primary" @click="search">检索</el-button>
            </div>
        </div>
        <el-divider content-position="center">打卡记录</el-divider>
        <div class="main">
            <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
                <el-table-column prop="date" label="日期" width="150">
                </el-table-column>
                <el-table-column prop="userId" label="工号">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="150">
                </el-table-column>
                <el-table-column prop="workIntime" label="上班时间">
                </el-table-column>
                <el-table-column prop="workOuttime" label="下班时间">
                </el-table-column>
                <el-table-column prop="state" label="打卡状态" width="100">
                </el-table-column>
                <el-table-column label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" @click=" detail(scope.row)">详细</el-button>
                    </template>

                </el-table-column>
            </el-table>
        </div>
        <el-dialog class="dialog" title="打卡详细" center :visible.sync="dialogDetails" @close='closeDialog' width="50%">
            <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm record-detail">
                <el-form-item label="日期">
                    <el-input v-model="ruleForm.date" readonly placeholder="日期"></el-input>
                </el-form-item>
                <el-form-item label="工号">
                    <el-input v-model="ruleForm.userId" readonly placeholder="工号"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="ruleForm.name" readonly placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="上班时间">
                    <el-time-picker v-show="!diasabledInput" :class="workTime" v-model="ruleForm.workIntime" format="HH:mm:ss" value-format="HH:mm:ss" placeholder="任意时间点">
                    </el-time-picker>
                    <el-input v-show="diasabledInput" :class="workTime"  v-model="ruleForm.workIntime" :readonly="diasabledInput"
                        placeholder="上班时间"></el-input>
                    <el-input v-show="diasabledInput" class="itmestate" v-model="ruleForm.state" readonly placeholder="打卡状态"></el-input>
                </el-form-item>
                <el-form-item label="下班时间">
                    <el-time-picker v-show="!diasabledInput" :class="workTime" v-model="ruleForm.workOuttime" format="HH:mm:ss" value-format="HH:mm:ss" placeholder="任意时间点">
                      </el-time-picker>
                    <el-input v-show="diasabledInput" :class="workTime" v-model="ruleForm.workOuttime" :readonly="diasabledInput"
                        placeholder="下班时间"></el-input>
                    <el-input v-show="diasabledInput" class="itmestate" v-model="ruleForm.state" readonly placeholder="打卡状态"></el-input>
                </el-form-item>
                <el-form-item label="打卡状态">
                    <el-input v-model="ruleForm.state" readonly placeholder="打卡状态"></el-input>
                </el-form-item>
                <el-form-item class="form-item-but" style="text-align: center;">
                    <el-button @click="edit">编辑</el-button>
                    <el-button type="primary" @click="submitForm('form')">确 定</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2020-02-17',
                    userId: '000110',
                    name: '王小虎',
                    workIntime: '07:52:56',
                    workOuttime: '18:00:23',
                    state: '正常',
                }, {
                    date: '2020-02-18',
                    userId: '000110',
                    name: '王小虎',
                    workIntime: '07:52:56',
                    workOuttime: '18:00:23',
                    state: '异常',
                }, {
                    date: '2020-02-19',
                    userId: '000110',
                    name: '王小虎',
                    workIntime: '07:52:56',
                    workOuttime: '18:00:23',
                    state: '正常',
                }, {
                    date: '2020-02-20',
                    userId: '000110',
                    name: '王小虎',
                    workIntime: '07:52:56',
                    workOuttime: '18:00:23',
                    state: '正常',
                }],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                ruleForm: {
                    date: '',
                    userId: '',
                    name: '',
                    workIntime: new Date(),
                    workOuttime: new Date(),
                    state: '',
                },
                diasabledInput: true,
                dialogDetails: false,
                workTime: '',
                value1: '',
                restaurants: [],
                state: '',
                timeout: null
            }
        },
        methods: {
            search() {
                console.log(this.value1[0])
                console.log(this.value1[1])
                console.log(this.state)
            },
            detail(row) {
                this.dialogDetails = true
                this.ruleForm.date = row.date
                this.ruleForm.userId = row.userId
                this.ruleForm.name = row.name
                this.ruleForm.workIntime = row.workIntime
                this.ruleForm.workOuttime = row.workOuttime
                this.ruleForm.state = row.state
            },
            edit() {
                this.diasabledInput = false
                this.workTime = 'work-time'
            },
            submitForm() {
                this.dialogDetails = false
                this.diasabledInput = true
                this.workTime = ''
                console.log(this.ruleForm)
            },
            closeDialog() {
                this.ruleForm.date = ''
                this.ruleForm.userId = ''
                this.ruleForm.name = ''
                this.ruleForm.workIntime = ''
                this.ruleForm.workOuttime = ''
                this.ruleForm.state = ''
            },
            tableRowClassName({ row, rowIndex }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
            loadAll() {
                return [

                    { "value": "阳阳麻辣烫" },
                    { "value": "三全鲜食" }
                ];
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 3000 * Math.random());
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .record-detail .el-input {
        width: 50%;
    }

    .record-detail .itmestate {
        width: 15%;
        border: 1px solid #DCDFE6;
    }

    .record-detail .el-input__inner {
        border: none;
    }

    .itmestate .el-input__inner {
        color: red;
    }

    .work-time .el-input__inner {
        border: 1px solid #DCDFE6;
    }
    .record-detail .form-item-but .el-form-item__content{
        margin: 0 !important;
    }
</style>
<style scoped>
    
    .h-main {
        display: flex;
        padding: 20px 60px 20px 40px;
        background-color: rgb(190, 187, 187);
        justify-content: space-between;
    }

    .h-main p {
        color: #909399;
        margin: 5px;
    }

    .h-main .h-but {
        margin-top: 28px;
        height: 40px;
        background-color: rgb(133, 128, 128);
        border-color: rgb(216, 209, 205);
    }
</style>