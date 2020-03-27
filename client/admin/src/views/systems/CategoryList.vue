<template>
	<div class="category-list">
		<h1>分类列表</h1>
		<el-table :data="models">
			<el-table-column prop="_id" label="ID" width="260"></el-table-column>
			<el-table-column prop="grand.name" label="一级分类"></el-table-column>
			<el-table-column prop="parent.name" label="二级分类"></el-table-column>
			<el-table-column prop="name" label="分类名称"></el-table-column>
			<el-table-column fixed="right" label="操作">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
					<el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data(){
		return {
			models: []
		}
	},
	methods: {
		async fetch(){
			const res = await this.$axios.get('/rest/categories')
			this.models = res.data
		},
		async edit(row){
			this.$router.push(`/categories/edit/${row._id}`)
		},
		async remove(row){
			this.$confirm(`是否确认删除"${row.name}"分类`, "提示", {
			  confirmButtonText: "确定",
			  cancelButtonText: "取消",
			  type: "warning"
			}).then(async () => {
				await this.$axios.delete(`/rest/categories/${row._id}`)
				this.fetch()
				this.$message({
				  type: "success",
				  message: "删除成功!"
				})
			})
		},
	},
	created() {
		this.fetch()
	}
}
</script>

<style scoped></style>
