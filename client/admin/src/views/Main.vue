<template>
	<div class="main">
		<el-container style="height: 100vh;">
		  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
		    <el-menu router :default-openeds="['2']" unique-opened :default-active="$router.path">
		      <Content></Content>
		      <MainOperation></MainOperation>
		      <MainSystem></MainSystem>
		    </el-menu>
		  </el-aside>
		  <el-container>
			<el-header style="text-align: right; font-size: 14px">
			  <Header></Header>
			</el-header>
		    <el-main>
		      <router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import MainSystem from '@/components/System'
import MainOperation from '@/components/Operation'
export default {
	name: 'Main',
	components: {
		Header,
		Content,
		MainSystem,
		MainOperation
	}
}
</script>

<style></style>
