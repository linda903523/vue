<template>
	<div id="datagrid">
		<ul class="foodlist-c">
				<li v-for="(obj, index) in dataset" >
					<img :src="obj.img"/>
					<div class="span-c">
						<span class="name-c">{{obj.name}}</span>
						<span class="jiage-c">{{obj.jiage}}</span>
					</div>
						<span>{{obj.miaoshu}}</span>
						<span>{{obj.age}}</span>
					<i class="tianjia-c" @click="tianjia(index)"></i>
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
			}
		},
		props: ['api', 'cols'],
		methods:{
			tianjia:function(index){
				var bb= this.dataset[index];
				this.$emit('abc',bb)
			}
		},
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
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