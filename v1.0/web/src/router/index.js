import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginComponent from '../components/login/login.vue'
import HomeComponent from '../components/home/home.vue'
import FoodsListComponent from '../components/foodslist/foodslist.vue'
import FoodsFormComponent from '../components/foodsform/foodsform.vue'

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
			}]
		},
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		}
	]
})

export default router