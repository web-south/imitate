<template>
  <div class="article-list">
    <h1>文章列表</h1>
			<el-table :data="articles">
				<el-table-column prop="_id" label="ID" width="260"></el-table-column>
				<el-table-column prop="parent.name" label="所属文章" width="120"></el-table-column>
				<el-table-column prop="title" label="文章标题"></el-table-column>
				<el-table-column fixed="right" label="操作" width="160">
					<template slot-scope="scope">
						<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
						<el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
  </div>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$axios.get("/rest/articles");
      this.articles = res.data;
    },
    async edit(row) {
      await this.$router.push(`/articles/edit/${row._id}`);
    },
    async remove(row) {
      this.$confirm(`是否确认删除"${row.title}"分类`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$axios.delete(`/rest/articles/${row._id}`);
        this.fetch();
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>

