<template>
	<div class="container">
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
					<li>
						<i class="ci-3"></i>
					</li>
				</ul> 
			</div>
		</header>
		<div class="body">
			<img src="../../img/timg.jpg" class="ctimg-1"/>
			<ul class="c-ul1">
				<li >推荐</li>
				<li @click="recai">热菜</li>
				<li @click="liangcai">冷菜</li>
				<li @click="tiandian">甜品</li>
				<li @click="yingping">饮料</li>
			</ul>
			<foodslist class="foodslist-c"></foodslist>
			<router-view></router-view>
		</div>
		<footer>
			<ul class="home-c">
				<li><i class="ci-4"></i><span>点菜</span></li>
				<li><i class="ci-5"></i><span>大家</span></li>
				<li><i class="ci-6"></i><span @click="cgoodlist">订单</span></li>
				<li><i class="ci-7"></i><span>我的</span></li>
			</ul>
		</footer>
	</div>
</template>
<script type="text/javascript">
	 import './home.scss'
	 import router from '../../router'
	 import foodslist from '../foodslist/foodslist.vue'
	export default {
		data : function(){
			return {
			time:'',
			zhuohao:'A区36号',
			diancai:'点菜'
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
			generateToolBar: function(obj){
				//动态生成按钮
			},
			cgoodlist:function(){
				router.push({name:'list'})
				
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
				
			}
		},
		components:{
			foodslist,
		},

	}
</script>