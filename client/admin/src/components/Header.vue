<template>
  <div class="heder">
    <el-header style="text-align: right; font-size: 14px">
	  <el-dropdown>
		 <i class="el-icon-setting" style="margin-right: 15px"></i>
		 <el-dropdown-menu slot="dropdown">
		    <el-dropdown-item>查看</el-dropdown-item>
		    <el-dropdown-item>新增</el-dropdown-item>
		    <el-dropdown-item>删除</el-dropdown-item>
		 </el-dropdown-menu>
	  </el-dropdown>
      <el-link type="primary" @click="handerLogin">登录</el-link> 
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
	  async handerLogin(){
		  this.$router.push('/login')
	  }
  }
}
</script>

<style scoped></style>
