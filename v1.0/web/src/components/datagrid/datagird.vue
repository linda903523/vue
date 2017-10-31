<template>
	<div>
		<ul class="foodlist-c">
			<li v-for="(obj, index) in dataset" >
				<img :src="img[index]">
				<div class="span-c">
				<span class="name-c">{{name[index]}}</span>
				<span class="jiage-c">{{jiage[index]}}元/份</span>
				</div>
				<span>{{miaoshu[index]}}</span>
				<span>{{age[index]}}</span>
				<i class="tianjia-c" @click="tianjia"></i>
			</li>
		</ul>
		<loading v-show="loadingShow"></loading>
	</div>
</template>
<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray,
				img:[],
				name:[],
				age:[],
				xingbie:[],
				type:[],
				miaoshu:[],
				jiage:[]
			}
		},
		props: ['api', 'cols'],
		methods:{
			tianjia:function(){
				var self = this;
				http.get({url:self.url}).then(res => {
					console.log(res);
				})
			}
		},
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
				for(var i=0;i<res.data.length;i++){
					this.img.push(res.data[i].img);
					this.name.push(res.data[i].name);
					this.age.push(res.data[i].nianling);
					this.xingbie.push(res.data[i].xingbie);
					this.type.push(res.data[i].type);
					this.miaoshu.push(res.data[i].miaoshu);
					this.jiage.push(res.data[i].jiage)
				}
			})
		},
		components: {
			loading
		}
	}
</script>
<style>
	ul,li{list-style:none;}
	li{margin:10px;}
	.name-c{font-size:45px;}
	.foodlist-c li{position:relative;}
	.foodlist-c img{width:100%;}
	.tianjia-c{
	width: 80px;
    height: 80px;
    background-image: url("../../img/1.png");
    background-size:1500px;
    position:absolute;
    background-position:1504px 212px;
    bottom: -15px;
    right: 70px;
	}
	.jiage-c{position:absolute;right:40px;color:#F76D2F;}

</style>