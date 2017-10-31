<template>
	<div class="container">
		<!-- <div class="fl-toolbar" style="background: #fff;">
			<a href="javascript:" class="btn btn-primary btn-sm" :class="value.class" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
		</div> -->	
		<header>
			<div>
				<i class="ci-1"></i>
				<span class="ctime" >{{time}}</span>
			</div>
			<div>
				<ul>
					<li>
						<i class="ci-2"></i>
						<span>{{zhuohao}}</span>
					</li>
					<li><span>{{diancai}}</span></li>
					<li><i class="ci-3"></i></li>
				</ul> 
			</div>
		</header>
		<div class="body">
			<img src="../../img/timg.jpg" class="ctimg-1"/>
			<ul class="c-ul1">
				<li>推荐</li>
				<li>热菜</li>
				<li>冷菜</li>
				<li>甜品</li>
				<li>饮料</li>
			</ul>
			<foodslist></foodslist>
		</div>
		<router-view></router-view>
		<footer>
			<ul class="home-c">
				<li><i class="ci-4"></i><span @click="fl_order">点菜</span></li>
				<li><i class="ci-5"></i><span>购物车</span></li>
				<li><i class="ci-6"></i><span @click="cgoodlist">订单</span></li>
				<li><i class="ci-7"></i><span>我的</span></li>
			</ul>
		</footer>
	</div>
</template>
<script type="text/javascript">
	//$children
	import './home.scss'
	import router from '../../router'
	import foodslist from '../foodslist/foodslist.vue'
	
	export default {
		data(){
			return {
				time:'12:00',
				zhuohao:'A区36号',
				diancai:'点菜',
				toolList: null
			}
		},
		methods: {
			// addTool(arg){
			// 	this.toolList = arg
			// },
			// click(arg){
			// 	if(arg.event){
			// 		arg.event()
			// 	}
			// },
			cgoodlist(){
				router.push({name:'list'})				
			},
			fl_order(){
				router.push({name:'foodsform'})
			}
		},
		components:{
			foodslist
		}
	}
</script>