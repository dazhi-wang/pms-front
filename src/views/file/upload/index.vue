 
 <template>
  <div class="upload-file">
    <div class="f-u-left">
      <p>部门内部文件</p>
      <el-upload class="upload-demo" drag :before-upload="beforeUpload" :on-success="upSuccess" :on-error="upError" action="https://jsonplaceholder.typicode.com/posts/" multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传pdf/doc/docx/xls/xlsx文件，且不超过50M</div>
      </el-upload>
    </div>
    <div class="f-u-right">
      <p>公司文件</p>
      <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" disabled :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过50M</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      },
      {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }
      ]
    };
  },
  methods: {
    // 上传文件之前,判断文件是否符合要求
    beforeUpload(file) {
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);

      const whiteList = ["pdf", "doc", "docx", "xls", "xlsx"];
      const isLt2M = file.size / 1024 / 1024 < 50;
      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message({
          message: '上传文件只能是 pdf、doc、docx、xls、xlsx格式',
          type: 'error'
        });
        return false;
      }
      if (!isLt2M) {
        this.$message({
          message: '上传文件大小不能超过 50MB',
          type: 'error'
        });

        return false;
      }
    },
    // 上传成功
    upSuccess(e) {
      this.$message({
        message: '上传成功',
        type: 'success'
      });
    },
    // 上传失败
    upError(e) {
      this.$message({
        message: '上传失败',
        type: 'error'
      });
    },
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
.upload-file {
  height: 70vh;
  display: flex;
}
.f-u-left,
.f-u-right {
  height: 100%;
  width: 50%;
  flex-direction: column;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.f-u-left > div,
.f-u-right > div {
  width: 360px;
  height: 205px;
}
.f-u-right > div {
  padding: 20px;
}
</style>