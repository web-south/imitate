<template>
	<div class="hero-list">
		<h1>英雄列表</h1>
		<el-table :data="models">
			<el-table-column prop="_id" label="ID" width="230"></el-table-column>
			<el-table-column prop="name" label="英雄名称" width="100"></el-table-column>
			<el-table-column prop="title" label="英雄称号" width="100"></el-table-column>
			<el-table-column prop="avatar" label="头像">
				<template slot-scope="scope">
					<img :src="scope.row.avatar" style="height: 3rem"/>
				</template>
			</el-table-column>
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
			categories: [],
			models: [],
		}
	},
	methods: {
		async fetch(){
			const res = await this.$axios.get('/rest/heros')
			this.models = res.data
		},
		async fetchCategories(){
			const res = await this.$axios.get('/rest/categories')
			this.categories = res.data
		},
		async edit(row){
			this.$router.push(`/heros/edit/${row._id}`)
		},
		async remove(row){
			this.$confirm(`是否确认删除"${row.name}"英雄`, "提示", {
			  confirmButtonText: "确定",
			  cancelButtonText: "取消",
			  type: "warning"
			}).then(async () => {
				await this.$axios.delete(`/rest/heros/${row._id}`)
				this.fetch()
				this.$message({
				  type: "success",
				  message: "删除成功!"
				})
			})
		},
	},
	created() {
		this.fetchCategories()
		this.fetch()
	}
}
</script>

<style scoped></style>
