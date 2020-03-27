<template>
  <div class="article-edit">
    <h3>{{id?"编辑":"新建"}}文章</h3>
    <el-form label-width="120px" @submit.native.prevent="save">
      </el-form-item>
		<el-form-item label="所属文章">
		  <el-select v-model="model.categories" multiple>
			<el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
		  </el-select>
		</el-form-item>
      <el-form-item label="文章标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
		<el-form-item label="文章内容">
		  <vue-editor v-model="model.content" useCustomImageHandler @imageAdded="handleImageAdded"></vue-editor>
		</el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"	
export default {
  components: { VueEditor },
  props: {
    id: {}
  },
  data() {  
    return {
	  model: {},
		categories: {},
    };
  },
  methods: {
		async handleImageAdded(file, Editor, cursorLocation, resetUploader){
			const formData = new FormData();
			formData.append("file", file);
			const res = await this.$axios.post('uploads',formData)
			Editor.insertEmbed(cursorLocation, "image", res.data.url);
			resetUploader();
		},
    async save() {
      if (this.id) {
        await this.$axios.put(`/rest/articles/${this.id}`, this.model);
      } else {
        await this.$axios.post("/rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功！"
      });
    },
    async fetchCategories() {
      const res = await this.$axios.get(`/rest/categories`);
      this.categories = res.data;
    },
    async fetch() {
      const res = await this.$axios.get(`/rest/articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>


