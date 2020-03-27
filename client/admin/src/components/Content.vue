<template>
	<div class="content">
		<el-submenu index="1">
		  <template slot="title"><i class="el-icon-menu"></i>内容管理</template>
			<el-menu-item-group>
			  <template slot="title">物品管理</template>
			  <el-menu-item index="/items/list">物品列表</el-menu-item>
			  <el-menu-item index="/items/create">创建物品</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group>
			  <template slot="title">英雄管理</template>
			  <el-menu-item index="/heros/list">英雄列表</el-menu-item>
			  <el-menu-item index="/heros/create">创建英雄</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
	</div>
</template>

<script>
	export default {
		name: 'Content'
	}
</script>

<style></style>
