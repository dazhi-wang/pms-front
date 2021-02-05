<template>
  <div class="download-file">
    <div class="f-d-left">
      
    </div>
    <el-divider direction="vertical"><i class="el-icon-mobile-phone"></i></el-divider>
    <div class="f-d-right">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>


<style scoped>
.download-file {
  height: calc(100vh - 50px);
  display: flex;
}
.f-d-left,
.f-d-right {
  height: 100%;
  width: 50%;
  border: 1px solid rgb(151, 144, 144);
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>