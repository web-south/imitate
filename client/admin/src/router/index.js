import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'

import Login from '@/views/systems/Login.vue'
import Register from '@/views/systems/Register.vue'

//1. system
import UserEdit from '@/views/systems/UserEdit'
import UserList from '@/views/systems/UserList'

import CategoryList from "@/views/systems/CategoryList";
import CategoryEdit from "@/views/systems/CategoryEdit";
//2. content 
import ItemList from "@/views/contents/ItemList";
import ItemEdit from "@/views/contents/ItemEdit";

import HeroList from "@/views/contents/HeroList";
import HeroEdit from "@/views/contents/HeroEdit";
//3. operation
import ArticleList from "@/views/operations/ArticleList";
import ArticleEdit from "@/views/operations/ArticleEdit";

Vue.use(VueRouter)

const routes = [
  {path: '/login',name: 'Login',component: Login,meta: {isPublic: true}},
  {path: '/register',name: 'Register',component: Register,meta: {isPublic: true}},
  {path: '/',redirect: '/main'},
  {path: '/main',name: 'Main',component: Main,
	children: [
		{path: '/users/list',name: 'UserList',component: UserList},
		{path: '/users/create',name: 'UserCreate',component: UserEdit,},
		{path: '/users/edit/:id',name: 'UserEdit',component: UserEdit,props: true},
		
		{path: "/categories/list",name: "CategoryList",component: CategoryList},
		{path: "/categories/create",name: "CategoryCreate",component: CategoryEdit},
		{path: "/categories/edit/:id",name: "CategoryEdit",component: CategoryEdit,props: true},
		
		{path: "/items/list",name: "Item-List",component: ItemList},
		{path: "/items/create",name: "Item-Create",component: ItemEdit},
		{path: "/items/edit/:id",name: "Item-Edit",component: ItemEdit,props: true},
					
		{path: "/heros/list",name: "Hero-List",component: HeroList},
		{path: "/heros/create",name: "Hero-Create",component: HeroEdit},
		{path: "/heros/edit/:id",name: "Hero-Edit",component: HeroEdit,props: true},
		
		{path: "/articles/list",name: "Article-List",component: ArticleList},
		{path: "/articles/create",name: "Article-Create",component: ArticleEdit},
		{path: "/articles/edit/:id",name: "Article-Edit",component: ArticleEdit,props: true},
		
	] 
  },
 
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
	if(!to.meta.isPublic && !localStorage.token){return next('/login')}
  next() 
})

export default router
