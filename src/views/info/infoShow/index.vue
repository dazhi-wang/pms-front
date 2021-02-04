<template>
  <div class="infoShow">
    <div class="header">
      <div class="img">
        <el-image v-if="url != ''" style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
        </el-image>
        <el-image v-if="url == ''" style="width: 100px; height: 100px; background: #eee;" :src="url" :preview-src-list="srcList">
          <div slot="error" class="image-slot">
            <span>暂无头像</span>
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="h-right">
        <div class="h-right-u">
          <p>王大郅</p>&nbsp;<span>(101010)</span> &nbsp; <i>男</i>
        </div>
        <div class="h-right-d">
          <p><i>图标</i><span v-show="this.jobTitle == 1">修改头像</span></p>
        </div>

      </div>
    </div>
    <div class="nickName">

      <div :class="nickNameclass">
        <p>昵称</p>
        <el-input placeholder="暂无" v-model="nicknames" :readonly="useraut">
        </el-input>
      </div>
      <div :class="nickNameclass">
        <p>年龄</p>
        <el-input placeholder="暂无" v-model="age" :readonly="useraut">
        </el-input>
      </div>
      
      <div :class="nickNameclass">
        <p>手机号</p>
        <el-input placeholder="暂无" v-model="phoneNumber " :readonly="useraut">
        </el-input>
      </div>
      <div :class="nickNameclass">
        <p>邮箱</p>
        <el-input placeholder="暂无" v-model="Email" :readonly="useraut">
        </el-input>
      </div>
      <div :class="nickNameclass">
        <p>签名</p>
        <el-input placeholder="暂无" v-model="signature" :readonly="useraut">
        </el-input>
      </div>
      <!-- <div class="clearfix">
        <span>昵称</span>
        <span>很皮很天真°</span>
        <span>
          <input type="text" v-model="name" maxlength="30">
        </span>
        <span>
          <textarea maxlength="50" cols="30" rows="2"></textarea>
        </span>
      </div>
      <div class="clearfix">
        <span>签名</span>
        <span>无</span>
      </div> -->

    </div>
    <div class="workInfo">
      <div :class="workInfoclass">
        <p>NT号</p>
        <el-input placeholder="暂无" v-model="NTid" :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>工作地</p>
        <el-input placeholder="暂无" v-model="workPlace" :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>上级</p>
        <el-input placeholder="暂无" v-model="superior " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>公司</p>
        <el-input placeholder="暂无" v-model="companyName  " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>部门</p>
        <el-input placeholder="暂无" v-model="section " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>下属</p>
        <el-input placeholder="暂无" v-model="underling " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>标签</p>
        <el-input placeholder="暂无" v-model="label " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>学历</p>
        <el-input placeholder="暂无" v-model="advancedDegree " :readonly="adminaut">
        </el-input>
      </div>
    </div>
    <div class="brithday">
      <div :class="brithdayclass">
        <p>生日</p>
        <!-- <el-input placeholder="暂无" v-model="brithday " :readonly="useraut">
        </el-input> -->
        <el-date-picker v-model="brithday" type="date"  format="MM月dd日 " value-format="yyyyMMdd" placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="w-item">
        <el-input placeholder="暂无" v-model="brText " readonly>
        </el-input>
      </div>
      <div class="w-item">
        <p>入职</p>
        <el-input placeholder="暂无" v-model="entryTime " :readonly="adminaut">
        </el-input>
      </div>
      <div class="w-item">
        <el-input placeholder="暂无" v-model="entryText " readonly>
        </el-input>
      </div>
    </div>
    <div class="but">
      <el-button @click="save">保存</el-button>
      <el-button @click="edit">编辑</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: '',
      nicknames: '很皮很天真°',
      superior: '上级',
      companyName: '橙子科技',
      Email: '1527342335@qq.com',
      underling: '下属',
      label: '标签',
      advancedDegree: '本科',
      sex: '男',
      age: 23,
      signature: '', //签名
      useraut: true,
      jobTitle: 1,
      nickNameclass: 'w-item',
      brithdayclass: 'w-item',
      workInfoclass: 'w-item',
      NTid: 'dazhiwang',
      workPlace: '大连',
      phoneNumber: '17824820462',
      section: 'CTC',
      adminaut: true,
      name: '很皮很天真°',
      brithday: '19971028',
      brText: '共81名同学与您同一天生日',
      entryTime: '2020年12月21日',
      entryText: '您加入亚信大家庭已经43天了，感谢您的辛苦付出',
      // url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
      ]
    }
  },
  updated(){
console.log(this.brithday)
  },
  methods: {
    edit() {
      if (this.jobTitle == 1) {
        this.nickNameclass = 'w-item-a'
        this.brithdayclass = 'w-item-a'
        this.brithdayclass = 'w-item-a'
        this.useraut = false
      } else if (this.jobTitle == 2) {
        if (this.jobTitle == 1) {

          this.workInfoclass = 'w-item-a'
          this.adminaut = false
        }
      }
    },
    save() {
      this.nickNameclass = 'w-item'
      this.brithdayclass = 'w-item'
      this.brithdayclass = 'w-item'
      this.useraut = true
    }
  }
}
</script>
<style>
.img .el-image {
  cursor: pointer;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  margin: 20px 30px 20px 24px;
}
.img .image-slot {
  width: 100px;
  text-align: center;
  height: 18px;
  margin-top: 42px;
}
.infoShow .w-item-a > div,
.infoShow .w-item > div {
  width: calc(100% - 50px);
  height: 100%;
}
.infoShow .w-item-a > div > input {
  /* border: none; */
  margin-left: 5px;
  display: inline-block;
  color: #000;
  height: 35px;
  line-height: 35px;
}

.infoShow .w-item > div > input {
  margin-left: 5px;
  border: none;
  display: inline-block;
  color: #000;
  height: 35px;
  line-height: 35px;
}
</style>
<style scoped>
.infoShow {
  padding: 0 20px;
}
.infoShow .header {
  display: flex;
  height: 150px;
  width: 100%;
  margin: 0 20px;
  border-bottom: 1px solid #eee;
}
.header .img {
  height: 140px;
  width: 154px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.h-right {
  width: calc(100% - 154px);
  height: 100%;
  padding-top: 35px;
}
.h-right-d .h-right-u {
  height: 40px;
}
.h-right-d p,
.h-right-u p {
  margin: 0 5px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  font-size: 18px;
}
.h-right-d i,
.h-right-u i {
  padding: 5px;
  font-size: 15px;
}
.h-right-u span {
  font-size: 16px;
}
.h-right-d span {
  padding: 5px;
  font-size: 14px;
}

.infoShow .nickName {
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  padding: 32px 0;
  border-bottom: 1px solid #eee;
}
.infoShow .workInfo {
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.infoShow .w-item-a,
.infoShow .w-item {
  width: 33.333%;
  height: 35px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.infoShow .w-item-a > p,
.infoShow .w-item > p {
  display: inline-block;
  color: #999;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
}
.brithday .w-item-a > p,
.brithday .w-item > p {
  width: 30px;
  height: 100%;
}
.infoShow .brithday {
  margin: 0 20px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #eee;
}
.brithday .w-item-a,
.brithday .w-item {
  width: 50%;
  height: 35px;
  margin: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.infoShow .but {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>