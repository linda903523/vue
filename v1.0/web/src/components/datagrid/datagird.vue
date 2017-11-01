<template>
	<div id="datagrid">
		<!-- <h1>datagrid</h1>
		<table>
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
				</tr>
			</tbody>
		</table> -->
		<ul>
			<li v-for="(obj, index) in dataset">
				<!-- <p v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</p> -->
				<img src="img[index]" alt="">
				<p>{{name[index]}}</p>
				<p>{{decorations[index]}}</p>
				<p>{{price[index]}}</p>
			</li>
		</ul>
		<loading v-show="loadingShow"></loading>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	console.log(333)
	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray,
				name:[],
				price:[],
				img:[],
				decorations:[]
			}
		},
		props: ['api', 'cols'],
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
	body,html,img{width: 100%;}
	body,dl,dd,h1,h2,h3,h4,h5,h6,p,form{margin:0;}
	ol,ul{margin:0; padding:0;}
	ul,ol,li{list-style:none;}
	input{outline:none;}
	body{height: 100%;font-size:10px;}
	ul{overflow: hidden;}
	li{float:left;margin:10px;}
	#datagrid p{color:#000;margin:0;}
</style>