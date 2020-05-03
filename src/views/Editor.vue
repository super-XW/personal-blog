<template>
  <div class="e-wrap">
    <div>
      <el-input v-model="articleTitle" placeholder="请输入标题"></el-input>
      <el-input v-model="articleDescribe" placeholder="请输入描述"></el-input>
      <el-select v-model="selectValue" placeholder="请选择分类">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>

      <el-upload
        class="upload-demo"
        action="http://47.111.124.121:7001/api/uplod"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture"
        :on-success="handleSuccess"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <mavon-editor ref="editor" @change="change" v-model="value" />
    <el-button type="primary" @click="sumit">点击提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      selectValue: "",
      articleTitle: "",
      articleDescribe: "",
      fileList: [],
      imgurl: "",
      options: [
        {
          value: "特别推荐",
          labael: "article_night_list"
        },
        {
          value: "最新发布",
          labael: "newest_article"
        },
        {
          value: "推荐文章",
          labael: "recommend_article"
        }
      ],
      markdownText:""
    };
  },
  methods: {
    sumit() {
      let i = 0;
      switch (this.selectValue) {
        case "特别推荐":
          i = 0;
          break;
        case "最新发布":
          i = 1;
          break;
        case "推荐文章":
          i = 2;
          break;
      }
      this.axios
        .post("/sumitArticle", {
          articleTitle: this.articleTitle,
          articleDescribe: this.articleDescribe,
          selectValue: this.options[i].labael,
          imgUrl: this.imgurl,
          articleContent: this.markdownText
        })
        .then(data => {
          console.log(data);
          this.$message({
            message: "提交成功",
            type: "success"
          });
        });
    },
     change (value, render) {
      // render 为 markdown 解析后的结果(转化成了HTML格式）
      this.markdownText = render;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    
    handleSuccess(response, file, fileList) {
      this.imgurl =
        "http://47.111.124.121:7001/public/comfiles/" + response.fileName;
      console.log(file, 1);
      console.log(response, 2);
      this.fileList = fileList;
      console.log(fileList);
    }
  }
};
</script>

<style scoped>
.e-wrap {
  margin: 0 30px;
}
.el-input {
  margin: 20px 0;
}
.upload-demo {
  margin: 20px 0;
}
.el-button {
  margin: 20px 0;
}
</style>