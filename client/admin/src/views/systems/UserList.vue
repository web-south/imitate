<template>
  <div class="user-list">
    <h1>管理员列表</h1>
		<el-table :data="models">
			<el-table-column prop="_id" label="ID" width="260"></el-table-column>
			<el-table-column prop="name" label="管理员名" width="120"></el-table-column>
			<el-table-column prop="email" label="邮箱"></el-table-column>
			<el-table-column fixed="right" label="操作" width="180">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" type="text" szie="small">编辑</el-button>
					<el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
	data(){
		return {
			models: []
		}
	},
	methods: {
		async fetch(){
			const res = await this.$axios.get('/rest/users')
			this.models = res.data
		},
		async edit(row){
			this.$router.push(`/users/edit/${row._id}`)
		},
		async remove(row){
			const res = await this.$axios.delete(`/rest/users/${row._id}`)
			this.fetch()
		}
	},
	created(){
		this.fetch()
	}
}
</script>

<style scoped></style>
