<template>
	<div class="category-edit">
		<h1>{{id ? '编辑' : '新建'}}分类</h1>
		<el-form label-width="120px" @submit.native.prevent="categorySave">
			<el-form-item label="一级分类">
				<el-select v-model="model.grand">
					<el-option v-for="item in grands" :key="item._id" :label="item.name" :value="item._id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="二级分类">
				<el-select v-model="model.parent">
					<el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="分类名称">
				<el-input v-model="model.name"></el-input>
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
		async categorySave(){
			if(this.id){
				const res = await this.$axios.put(`/rest/categories/${this.id}`,this.model)
			}else{
				await this.$axios.post('/rest/categories',this.model)
			}
			this.$router.push('/categories/list')
			this.$message({
				type: 'success',
				message: '成功保存!'
			})
		},
		async grandFetch(){
			const res = await this.$axios.get('/rest/categories')
			this.grands = res.data
		},
		async parentFetch(){
			const res = await this.$axios.get('/rest/categories')
			this.parents = res.data
		},
		async fetch(){
			const res = await this.$axios.get(`/rest/categories/${this.id}`)
			this.model = res.data
		}
	},
	created() {
		this.grandFetch()
		this.parentFetch()
		this.id && this.fetch()
	}
}
</script>

<style scoped></style>
