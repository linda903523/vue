import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from '../components/login/login.vue'
import HomeComponent from '../components/home/home.vue'
import FoodsListComponent from '../components/foodslist/foodslist.vue'
import FoodsFormComponent from '../components/foodsform/foodsform.vue'
import ListComponent from '../components/list/list.vue'
import LiangComponent from '../components/liangcai/liangcai.vue'
import RecaiComponent from '../components/recai/recai.vue'
import TiandianComponent from '../components/tiandian/tiandian.vue'
import YingpingComponent from '../components/yingping/yingping.vue'




Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeComponent,
			children: [{
				path: '/foodslist',
				name: 'foodslist',
				component: FoodsListComponent
			},{
				path: '/foodsform',
				name: 'foodsform',
				component: FoodsFormComponent
			},{
				path:'liangcai',
				name:'liangcai',
				component:LiangComponent

			},{
				path:'recai',
				name:'recai',
				component:RecaiComponent

			},{
				path:'tiandian',
				name:'tiandian',
				component:TiandianComponent
			},{
				path:'yingping',
				name:'yingping',
				component:YingpingComponent

			}]
		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		},{
				path:'/list',
				name:'list',
				component:ListComponent
			}
	]
})

export default router