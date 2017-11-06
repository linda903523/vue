<template>
	<div class="container">
		<header>
			<div class="home-div">
				<i class="ci-1"></i>
				<span class="ctime" >{{time}}</span>
			</div>
			<div>
				<ul>
					<li>
						<i class="ci-2"></i>
						<span>桌号:<input type="text" v-model="zhuohao" class="zhuohao"/></span>
						<span>人数:<input type="text" v-model="renshu" class="zhuohao"/></span>
					</li>
					<li><span>{{diancai}}</span></li>
					<input type="text" v-model="message" style="border-radius:20px;"/>
					<li><i class="ci-3" @click="serach"></i></li>
				</ul> 
			</div>
		</header>
		<div  id="box" class="body"  @scroll="scroll">
			<img src="../../img/timg.jpg" class="ctimg-1"/>
			<ul class="c-ul1">
				<li @click="foodslist" class="active">推荐</li>
				<li @click="recai">热菜</li>
				<li @click="liangcai">凉菜</li>
				<li @click="tiandian">甜品</li>
				<li @click="yingping">饮料</li>
			</ul>
			<foodslist v-if="showw"></foodslist>
			<router-view v-if = "show"></router-view>
		</div>
		<footer>
			<ul class="home-c">
				<li class="active"><i class="ci-4"></i><span>点菜</span></li>
				<li @click="carlist"><i class="ci-5"></i><span>购物车</span></li>
				<li @click="list"><i class="ci-6"></i><span>订单</span></li>
				<li @click="my"><i class="ci-7"></i><span>我的</span></li>
			</ul>
		</footer>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import './home.scss'
	import router from '../../router'
	import foodslist from '../foodslist/foodslist.vue'
	import http from '../../utils/httpClient.js'
	import $ from 'jquery'
	export default {
		data(){
			return {
				time:'',
				zhuohao:'',
				renshu:'',
				diancai:'点菜',
				canshu:'',
				toolList: null,
				message:'',
				showw:true,
				show:false,
				serachnumber:[]
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
			carlist:function(){
				router.push({name:'carlist'})				
			},
			list:function(){
				router.push({name:'list'})				
			},
			my:function(){
				router.push({name:'my'})
			},
			liangcai:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'liangcai'})
				$('.c-ul1').children().eq(2).addClass('active').siblings().removeClass('active')
			},
			recai:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'recai'})
				$('.c-ul1').children().eq(1).addClass('active').siblings().removeClass('active')
			},
			foodslist:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'foodslist'})
				$('.c-ul1').children().eq(0).addClass('active').siblings().removeClass('active')
			},
			tiandian:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'tiandian'})
				$('.c-ul1').children().eq(3).addClass('active').siblings().removeClass('active')
			},
			yingping:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'yingping'})
				$('.c-ul1').children().eq(4).addClass('active').siblings().removeClass('active')
			},
			tongxing:function(a){
				this.$emit('liang',a);
				this.canshu=JSON.stringify(a);
			},
			serach:function(){
				this.showw=false;
				this.show=false;
				router.push({name:'serach'})
				var self = this
				http.post({
	            	url:'serach',
		            params:{
		                name:self.message
		            }
		        }).then(res=>{
		            this.serachnumber=res.data;
		            this.showw=false;
		            this.show=true;
		        })
	    	},
			scroll:function(){
				if($('.c-ul1').offset().top <= $('#box').scrollTop()){
					$('.c-ul1').addClass('fixed');
					$('#datagrid').css({marginTop:'150px'});
				}else{
					$('.c-ul1').removeClass('fixed');
					$('#datagrid').css({marginTop:'0px'});
				}
			}
		},
		components:{
			foodslist			
		}		
	}	
</script>