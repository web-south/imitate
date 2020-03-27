<template>
	<div class="item-list">
		<h1>物品列表</h1>
		<el-table :data="models">
			<el-table-column prop="_id" label="ID" width="260px"></el-table-column>
			<el-table-column prop="name" label="物品名称" width="120px"></el-table-column>
			<el-table-column prop="icon" label="图标">
				<template slot-scope="scope">
					<img :src="scope.row.icon" style="height: 3rem"/>
				</template>
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="160">
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
	name: 'ItemList',
	data(){
		return {models: []}
	},
	methods: {
		async fetch(){
			const res = await this.$axios.get('/rest/items')
			this.models = res.data
		},
		async edit(row){
			this.$router.push(`/items/edit/${row._id}`)
		},
		async remove(row){
			this.$confirm(`是否确认删除"${row.name}"物品`, "提示", {
			  confirmButtonText: "确定",
			  cancelButtonText: "取消",
			  type: "warning"
			}).then(async () => {
				await this.$axios.delete(`/rest/items/${row._id}`)
				this.fetch()
				this.$message({
				  type: "success",
				  message: "删除成功!"
				})
			})
		},
	},
	created(){
		this.fetch()
	}
}
</script>

<style scoped></style>
