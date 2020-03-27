<template>
	<div class="user-edit">
		<h1>{{id ? '编辑' : '新建'}}分类</h1>
		<el-form label-width="120px" @submit.native.prevent="userSave">
			<el-form-item label="管理员名">
				<el-input v-model="model.name"></el-input>
			</el-form-item>
			<el-form-item label="邮箱">
				<el-input v-model="model.email"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="model.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="success" native-type="submit">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	props: {id: {}},
	data(){
		return {
			model: {},
			parents: [],
			grands: []
		}
	},
	methods: {
		async userSave(){
			if(this.id){
				await this.$axios.put(`/rest/users/${this.id}`,this.model)
			}else{
				const res = await this.$axios.post('/rest/users',this.model)
			}
			this.$router.push('/users/list')
			this.$message({
				type: 'success',
				message: '成功保存!'
			})
		},
		async fetch(){
			const res = await this.$axios.get(`/rest/users/${this.id}`)
			this.model = res.data
		}
	},
	created() {
		this.id && this.fetch()
	}
}
</script>

<style scoped></style>
