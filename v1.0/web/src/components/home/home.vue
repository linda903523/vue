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
		<div  id="box" class="body"  v-private>
			<img src="../../img/timg.jpg" class="ctimg-1"/>
			<ul class="c-ul1">
				<li @click="foodslist">推荐</li>
				<li @click="recai">热菜</li>
				<li @click="liangcai">冷菜</li>
				<li @click="tiandian">甜品</li>
				<li @click="yingping">饮料</li>
			</ul>
			<router-view @tong="tongxing"></router-view>
		</div>
		<footer>
			<ul class="home-c">
				<li><i class="ci-4"></i><span @click="fl_order">点菜</span></li>
				<li><i class="ci-5"></i><span>大家</span></li>
				<li><i class="ci-6"></i><span @click="cgoodlist">订单</span></li>
				<li><i class="ci-7"></i><span>我的</span></li>
			</ul>
		</footer>
	</div>
</template>
<script type="text/javascript">
	//$children
	import Vue from 'vue'
	import './home.scss'
	import router from '../../router'
	import foodslist from '../foodslist/foodslist.vue'
	export default {
		data(){
			return {
			time:'',
			zhuohao:'A区36号',
			diancai:'点菜',
			canshu:'',
			toolList: null
			}
		},
		created: function () {
			var now = new Date();
			var hour = now.getHours();
			var min = now.getMinutes();
			hour = hour<10 ? '0'+hour : hour;
			min = min<10 ? '0'+min : min;
			this.time = hour + ':' + min;
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
			cgoodlist:function(){
				router.push({name:'list', params: {canshu: this.canshu}})
			},
			liangcai:function(){
				router.push({name:'liangcai'})
			},recai:function(){
			
				router.push({name:'recai'})
			},
			foodslist:function(){
				router.push({name:'foodslist'})
			},
			tiandian:function(){
				router.push({name:'tiandian'})
			},
			yingping:function(){
				router.push({name:'yingping'})
			},
			gundong:function(){
			},
			tongxing:function(a){
				this.$emit('liang',a);
				this.canshu=JSON.stringify(a);
			},
			fl_order(){
				router.push({name:'foodsform'})
			}
		},
		components:{
			foodslist,
		},
		directives: {
			//注册一个局布指令 v-private
			private: function(element){
				// var container = document.getElementById('box');
				// console.log(container);
				// var ul = document.getElementByClassName('c-ul1');
				// if(window.scrollY>=100){
				// 	ul.className = 'fixed';
				// 	container.style.marginTop = '60px';
				// }else{
				// 	ul.className = '';
				// 	container.style.marginTop = 0;
				// }
			}
		}
	}
		

	
</script>