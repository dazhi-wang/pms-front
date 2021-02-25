<template>
  <div class="balance">
    <ul class="b-main">
      <li class="item">
        <div class="i-title">
          <p class="title">年假</p>
        </div>
        <div class="i-main">
          <div>
            <p class="text">剩余可请天数</p>
            <p class="num">{{ remAnnual }}</p>
          </div>
          <div>
            <p class="text">合计可请天数</p>
            <p class="num">{{ sumAnnual }}</p>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="i-title">
          <p class="title">年假</p>
        </div>
        <div class="i-main">
          <div>
            <p class="text">剩余可请天数</p>
            <p class="num">{{ remAnnual }}</p>
          </div>
          <div>
            <p class="text">合计可请天数</p>
            <p class="num">{{ sumAnnual }}</p>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="i-title">
          <p class="title">年假</p>
        </div>
        <div class="i-main">
          <div>
            <p class="text">剩余可请天数</p>
            <p class="num">{{ remAnnual }}</p>
          </div>
          <div>
            <p class="text">合计可请天数</p>
            <p class="num">{{ sumAnnual }}</p>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="i-title">
          <p class="title">年假</p>
        </div>
        <div class="i-main">
          <div>
            <p class="text">剩余可请天数</p>
            <p class="num">{{ remAnnual }}</p>
          </div>
          <div>
            <p class="text">合计可请天数</p>
            <p class="num">{{ sumAnnual }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      remAnnual: '90',
      sumAnnual: '90'
    }
  },
}
</script>
<style scoped>
.balance .b-main {
  padding: 20px 20px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.balance .item {
  width: 20%;
  margin: 10px 20px;
  list-style: none;
}

.item p {
  margin: 0;
}

.item .title {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  /* margin: 0; */
  /* padding: 10px 10px; */
  /* background-color: rgb(155, 155, 155); */
}
.i-title {
  width: 100%;
  height: 40px;
  background-color: rgb(155, 155, 155);
  border: 1px solid gray;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.i-main {
  width: 100%;
  margin: 0;
  border: 1px solid gray;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.item .text,
.item .num {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}

.item .text {
  padding-left: 10px;
  width: 70%;
}

.item .num {
  text-align: center;
  width: 30%;
}
</style>