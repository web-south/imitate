<template>
	<div class="register">
		<el-card>
			<h2>登录<i class="el-icon-close" @click="handleClose"></i></h2>
			<el-form @submit.native.prevent="loginSave">
				<el-form-item label="用户名">
					<el-input v-model="model.email" placeholder="请输入邮箱"></el-input>
				</el-form-item>  
				<el-form-item label="密码">
					<el-input v-model="model.password"></el-input>
				</el-form-item>
				<el-form-item>
					<el-link type="primary" @click="handleRegister">我要注册</el-link>
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
		}
	},
	methods: {
		async loginSave(){
			const res = await this.$axios.post('/login',this.model)
			localStorage.token = res.data.token
			this.$router.push('/categories/list')
			this.$message({
				type: 'success',
				message: '成功登录!'
			})
		},
		async handleClose(){
			await this.$router.push('/login')
		},
		async handleRegister(){
			await this.$router.push('/register')
		}
	}
}
</script>

<style scoped></style>
