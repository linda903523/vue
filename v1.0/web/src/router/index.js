import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from '../components/login/login.vue'
import HomeComponent from '../components/home/home.vue'
import FoodsListComponent from '../components/foodslist/foodslist.vue'
import FoodsFormComponent from '../components/foodsform/foodsform.vue'
import CarListComponent from '../components/carlist/carlist.vue'
import BackstageComponent from '../components/backstage/backstage.vue'
import Backstage_OrdFood from '../components/backstage/backstage_Ord.vue'
import Backstage_AddFood from '../components/backstage/backstage_Add.vue'
import Backstage_AdmFood from '../components/backstage/backstage_Adm.vue'
import SerachComponent from '../components/serach/serach.vue'
import MyComponent from '../components/my/my.vue'
import LiangComponent from '../components/foodstype/liangcai.vue'
import RecaiComponent from '../components/foodstype/recai.vue'
import TiandianComponent from '../components/foodstype/tiandian.vue'
import YingpingComponent from '../components/foodstype/yingping.vue'
import ListComponent from '../components/list/list.vue'

Vue.use(VueRouter)
var router = new VueRouter({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: HomeComponent,
			children: [{
				path: '/foodslist',
				name: 'foodslist',
				component: FoodsListComponent
			},
            {
                path:'/liangcai',
                name:'liangcai',
                component:LiangComponent
            },{
                path:'/recai',
                name:'recai',
                component:RecaiComponent

            },{
                path:'/tiandian',
                name:'tiandian',
                component:TiandianComponent
            },{
                path:'/yingping',
                name:'yingping',
                component:YingpingComponent

            },{
                path:'serach',
                name:'serach',
                component:SerachComponent
            }]
		},
        {
            path: '/foodsform',
            name: 'foodsform',
            component: FoodsFormComponent
        },
		{
			path: '/',
			name: 'login',
			component: LoginComponent
		},
        {
            path:'/list',
            name:'list',
            component:ListComponent  
        },
		{
			path:'/carlist',
			name:'carlist',
			component:CarListComponent
		},
        {
            path:'/my',
            name:'my',
            component:MyComponent
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
			}]
		}
	]
})
export default router