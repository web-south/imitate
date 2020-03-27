<template>
	<div class="register">
		<el-card>
			<h2>注册<i class="el-icon-close" @click="handleClose"></i></h2>
			<el-form @submit.native.prevent="categorySave">
				<el-form-item label-width="80px" label="用户名">
					<el-input v-model="model.name"></el-input>
				</el-form-item>
				<el-form-item label-width="80px" label="邮箱">
					<el-input v-model="model.email"></el-input>
				</el-form-item>
				<el-form-item label-width="80px" label="密码">
					<el-input v-model="model.password"></el-input>
				</el-form-item>
				<el-form-item label-width="80px" label="确认码">
					<el-input v-model="model.confirm"></el-input>
				</el-form-item>
				<el-form-item>
					<el-link type="primary" @click="handleLogin">请登录</el-link>
					<el-button type="success" class="btn-submit" native-type="submit">提交</el-button>
				</el-form-item>
			</el-form>
		</el-card>
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
		async categorySave(){
			const res = await this.$axios.post('/register',this.model)
			this.$router.push('/login')
			this.$message({
				type: 'success',
				message: '成功保存!'
			})
		},
		async handleClose(){
			await this.$router.push('/login')
		},
		async handleLogin(){
			await this.$router.push('/login')
		}
	}
}
</script>

<style scoped></style>
