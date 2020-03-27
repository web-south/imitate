<template>
  <div class="system">
    <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
        <el-menu-item-group>
    	<template slot="title">分类管理</template>
			<el-menu-item index="/categories/list">分类列表</el-menu-item>
			<el-menu-item index="/categories/create">新建分类</el-menu-item>
        </el-menu-item-group>
    	<el-menu-item-group>
    	  <template slot="title">管理员</template>
    	  <el-menu-item index="/users/list">管理员列表</el-menu-item>
    	  <el-menu-item index="/users/create">新建管理员</el-menu-item>
    	</el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>