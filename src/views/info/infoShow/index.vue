<template>
  <div class="infoShow">
    <div class="header">
      <div class="img">
        <el-image v-if="url != ''" style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
        </el-image>
        <el-image v-if="url == ''" style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList">
          <div slot="error" class="image-slot">
            <span>暂无头像</span>
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <div class="h-right">
        <span>姓名</span>&nbsp;<span>(101010)</span> &nbsp; <i>男</i>
        <span><i>图标</i><span>修改头像</span></span>
      </div>
    </div>
    <div class="nickName">
        <div :class="nickNameclass">
        <p>昵称</p>
        <el-input placeholder="暂无" v-model="nicknames" :readonly="adminaut">
        </el-input>
      </div>
      <div :class="nickNameclass">
        <p>签名</p>
        <el-input placeholder="暂无" v-model="signature" :readonly="adminaut">
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
        <p>手机号</p>
        <el-input placeholder="暂无" v-model="phoneNumber " :readonly="adminaut">
        </el-input>
      </div>
      <div :class="workInfoclass">
        <p>部门</p>
        <el-input placeholder="暂无" v-model="section " :readonly="adminaut">
        </el-input>
      </div>
    </div>
    <div class="brithday">
      <div :class="brithdayclass">
        <p>生日</p>
        <el-input placeholder="暂无" v-model="brithday " :readonly="adminaut">
        </el-input>
        </div>
        <div class="w-item">
        <el-input placeholder="暂无" v-model="brText " readonly>
        </el-input>
      </div>
      <div :class="brithdayclass">
        <p>入职</p>
        <el-input placeholder="暂无" v-model="entryTime " :readonly="adminaut">
        </el-input>
         </div>
        <div class="w-item">
        <el-input placeholder="暂无" v-model="entryText " readonly>
        </el-input>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: '',
      nicknames: '很皮很天真°',
      signature: '', //签名
      nickNameclass: 'w-item',
      brithdayclass: 'w-item-a',
      workInfoclass: 'w-item-a',
      NTid: 'dazhiwang',
      workPlace: '大连',
      phoneNumber: '17824820462',
      section: 'CTC',
      adminaut: true,
      name: '很皮很天真°',
      brithday: '10月28日',
      brText: '共81名同学与您同一天生日',
      entryTime: '2020年12月21日',
      entryText: '您加入亚信大家庭已经43天了，感谢您的辛苦付出',
      //   url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
      ]
    }
  },
}
</script>
<style>
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
  margin: 0 20px;
  border-bottom: 1px solid #eee;
}
.infoShow .nickName {
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
</style>