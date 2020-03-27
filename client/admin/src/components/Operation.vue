<template>
  <div class="operation">
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-monitor"></i>运营管理</template>
      <el-menu-item-group>
    	<template slot="title">文章管理</template>
    	<el-menu-item index="/articles/list">文章列表</el-menu-item>
    	<el-menu-item index="/articles/create">新建文章</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'Operation',

}
</script>

<style scoped></style>
