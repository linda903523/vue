// <<<<<<< HEAD
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Element from 'element-ui'

// import LoginComponent from '../components/login/login.vue'
// import HomeComponent from '../components/home/home.vue'
// import FoodsListComponent from '../components/foodslist/foodslist.vue'
// import FoodsFormComponent from '../components/foodsform/foodsform.vue'
// import ListComponent from '../components/list/list.vue'
// import BackstageComponent from '../components/backstage/backstage.vue'
// import Backstage_OrdFood from '../components/backstage_Ord/backstage_Ord.vue'
// import Backstage_AddFood from '../components/backstage_Add/backstage_Add.vue'
// import Backstage_AdmFood from '../components/backstage_Adm/backstage_Adm.vue'

// Vue.use(VueRouter)

// var router = new VueRouter({
// 	routes: [
// 		{
// 			path: '/',
// 			name: 'home',
// 			component: HomeComponent,
// 			children: [{
// 				path: '/foodslist',
// 				name: 'foodslist',
// 				component: FoodsListComponent
// 			},{
// 				path: '/foodsform',
// 				name: 'foodsform',
// 				component: FoodsFormComponent
// 			}]
// 		},
// 		{
// 			path: '/login',
// 			name: 'login',
// 			component: LoginComponent
// 		},
// 		{
// 			path:'/list',
// 			name:'list',
// 			component:ListComponent
// 		},
// 		{
// 			path:'/backstage',
// 			name:'backstage',
// 			component:BackstageComponent,
// 			children: [{
// 				path: '/OrdFood',
// 				name: 'OrdFood',
// 				component:Backstage_OrdFood
// 			},{
// 				path: '/AddFood',
// 				name: 'AddFood',
// 				component:Backstage_AddFood
// 			},{
// 				path: '/AdmFood',
// 				name: 'AdmFood',
// 				component:Backstage_AdmFood
// 			}
// 			]
// 		}
// 	]
// })

import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/login/login.vue'
import HomeComponent from '../components/home/home.vue'
import FoodsListComponent from '../components/foodslist/foodslist.vue'
import FoodsFormComponent from '../components/foodsform/foodsform.vue'
import ListComponent from '../components/list/list.vue'
import BackstageComponent from '../components/backstage/backstage.vue'
import Backstage_OrdFood from '../components/backstage/backstage_Ord.vue'
import Backstage_AddFood from '../components/backstage/backstage_Add.vue'
import Backstage_AdmFood from '../components/backstage/backstage_Adm.vue'
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
			},
            {
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
            path: '/foodsform',
            name: 'foodsform',
            component: FoodsFormComponent
        },
		{
			path: '/login',
			name: 'login',
			component: LoginComponent
		},
		{
			path:'/list/:canshu',
			name:'list',
			component:ListComponent
		},
		{
			path:'/backstage',
			name:'backstage',
			component:BackstageComponent,
			children: [{
				path: '/OrdFood',
				name: 'OrdFood',
				component:Backstage_OrdFood
			},{
				path: '/AddFood',
				name: 'AddFood',
				component:Backstage_AddFood
			},{
				path: '/AdmFood',
				name: 'AdmFood',
				component:Backstage_AdmFood
			}
			]
		}
	]
})
export default router